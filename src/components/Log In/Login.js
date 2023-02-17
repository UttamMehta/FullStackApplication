import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { json, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { add3, Authaction } from "../Redux/Actions/actions";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const token = useSelector((store) => {
    return store.token;
  });

  const [tick, setTick] = useState(false);
  const [data, setData] = useState([]);
  // console.log(inpval);

  const getdata = async (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    // console.log(value,name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };
  const dispatch = useDispatch();
  const addData = (e) => {
    e.preventDefault();
    let { email, password } = inpval;
    findUser({ email, password });
  };
  async function findUser(data) {
    try {
      let req = await fetch(
        `https://odd-blue-scarab-kit.cyclic.app/signUp/logIn`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      let res = await req.json();
      if (res.error)
        toast.error(res.error, {
          position: "top-center",
        });
      else {
        alert(res.message);
        await add3(dispatch, res.data);
        history("/");
        // console.log(res);
      }
      // history("/");
      // alert(res.message);
    } catch (e) {
      toast.error(e, {
        position: "top-center",
      });
    }
  }

  function check(e) {
    let { value, checked } = e.target;
    checked ? setTick(true) : setTick(false);
  }

  return (
    <>
      <section>
        <div className="log-App">
          <div className="loginn">
            <div id="log-design">
              <NavLink className="log" to="/Login">
                Login
              </NavLink>
            </div>
            <div id="sign-design">
              <NavLink className="sign" to="/Signup">
                Register
              </NavLink>
            </div>
          </div>
          <hr className="lines"></hr>
          <div className="contain">
            <div className="picc">
              <img
                className="logos"
                src="https://accounts.practo.com/static/images/illustration.png"
              ></img>
            </div>

            <div className="info">
              <Form id="formm">
                <Form.Group>
                  <label id="labelss" for="mobile">
                    Email
                  </label>
                  <input
                    id="mobile"
                    type="email"
                    name="email"
                    onChange={getdata}
                    placeholder="Email"
                  />
                </Form.Group>

                <Form.Group>
                  <label id="labelss" for="passcode">
                    Password
                  </label>
                  <input
                    id="passcode"
                    type="password"
                    name="password"
                    onChange={getdata}
                    placeholder="Password"
                  />
                </Form.Group>

                <Form.Group>
                  <input id="check" type="checkbox" onChange={check} />
                  <label id="para">Remember me for 30 days</label>
                </Form.Group>

                <Button
                  id="submit"
                  disabled={
                    tick && inpval.email && inpval.password ? false : true
                  }
                  onClick={addData}
                  type="submit"
                >
                  Login
                </Button>
                <p id="parag">
                  Don't Have an Account{" "}
                  <span>
                    <NavLink id="links" to="/Signup">
                      Register
                    </NavLink>
                  </span>{" "}
                </p>
              </Form>
              <ToastContainer />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
