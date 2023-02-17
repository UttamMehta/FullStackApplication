/** @format */

// /** @format */

// import { Link } from 'react-router-dom';
// import Styles from './Doc.module.css';
// function Doc4ui() {
//   return (
//     <>
//       <div className={Styles.p4div1}>
//         <div className={Styles.p4div11}>
//           <div className={Styles.p4div110}>
//             <h3>In-Clinic Appoinment</h3>
//           </div>
//           <div className={Styles.p4div111}>
//             <div>
//               <input type='date' name='' id='' />
//             </div>
//             <div>
//               <input
//                 type='time'
//                 name='
//                     '
//                 id=''
//               />
//             </div>
//           </div>
//           <div className={Styles.p4div112}>
//             <div>
//               <img
//                 className={Styles.p4img1}
//                 src='https://png.pngtree.com/element_our/sm/20180501/sm_5ae8198fec951.jpg'
//                 alt=''
//               />
//             </div>
//             <div>
//               <p>
//                 kkkk <span>prachi</span>
//               </p>
//             </div>
//           </div>
//           <div className={Styles.p4div113}>
//             <div>
//               <img
//                 className={Styles.p4img1}
//                 src='https://png.pngtree.com/element_our/sm/20180501/sm_5ae8198fec951.jpg'
//                 alt=''
//               />
//             </div>
//             <div>
//               <p>
//                 kkkk <span>prachi</span>
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className={Styles.p4div12}>
//           <h3>
//             {' '}
//             <b>Enter your mobile number</b>{' '}
//           </h3>
//           <label htmlFor=''>Mobile</label> <br />
//           <input type='number' name='' id='' placeholder='Enter Mobile' />
//           <p>
//             You will receive an OTP shortly. <br />{' '}
//             <span>
//               We will send appointment-related communications on this number.
//             </span>{' '}
//           </p>
//           <p></p>
//           <Link to='/checkout'>
//             {' '}
//             <button>Continue</button>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Doc4ui;
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Styles from './Doc.module.css';
function Doc4ui() {
  let navigate = useNavigate();
  const data = useSelector((store) => {
    return store;
  });
  console.log(data);
  const [item, setItem] = useState({ kindOfStand: '', another: 'another' });

  const { kindOfStand } = item;

  const handleChange = (e) => {
    e.persist();
    // console.log(e.target.value);

    setItem((prevState) => ({
      ...prevState,
      kindOfStand: e.target.value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`${kindOfStand}`);
    if(!data.token)
    navigate(`/signup`);
    else if (kindOfStand == 'online') {
      let path = `/checkout`;
      navigate(path);
    } else {
      let path = `/payment`;
      navigate(path);
    }
  };

  return (
    <>
      <div className={Styles.p4div1}>
        <div className={Styles.p4div11}>
          <div className={Styles.p4div110}>
            <h3>In-Clinic Appoinment</h3>
          </div>
          <div className={Styles.p4div111}>
            <div>
              <h5>{data.appoint.date}</h5>
            </div>
            <div>
              <h5>{data.appoint.time}</h5>
            </div>
          </div>
          <div className={Styles.p4div112}>
            <div>
              <img
                className={Styles.p4img1}
                src={data.appointuser.image}
                alt=''
              />
            </div>
            <div>
              <h5>
                Name: <span> Dr.{data.appointuser.namee}</span>
              </h5>
              <p
                style={{
                  fontSize: '16px',
                }}>
                <span> {data.appointuser.department}</span>
              </p>
            </div>
          </div>
          <div className={Styles.p4div113}>
            <div>
              <img
                className={Styles.p4img1}
                src='https://png.pngtree.com/element_our/sm/20180501/sm_5ae8198fec951.jpg'
                alt=''
              />
            </div>
            <div>
              <h5>
                <span> {data.appointuser.host} Hospital</span>
              </h5>
            </div>
          </div>
        </div>
        <div className={Styles.p4div12}>
          <h3>
            {' '}
            <b>Patient Details</b>{' '}
          </h3>
          <label
            // htmlFor=''
            style={{
              textAlign: 'left',
              // border: 'solid black',
              width: '95%',
            }}>
            Name
          </label>{' '}
          <br />
          <input
            type='text'
            name=''
            placeholder='Enter Name'
            className={Styles.in2}
          />
          <br />
          <label
            style={{
              textAlign: 'left',
              // border: 'solid black',
              width: '95%',
            }}>
            Mobile
          </label>{' '}
          <br />
          <input
            type='number'
            className={Styles.in2}
            name=''
            placeholder='Enter Mobile'
          />
          <br />
          <label
            style={{
              textAlign: 'left',
              // border: 'solid black',
              width: '95%',
            }}>
            Email
          </label>{' '}
          <br />
          <input
            type='email'
            className={Styles.in2}
            name=''
            placeholder='Your Email'
          />
          <br />
          <br />
          <br />
          <p>Choose a payment option to book appoinments.</p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          // border: 'solid black',
          // marginTop: '30px',
        }}>
        <div
          style={{
            width: '790px',
            // border: 'solid blue',
          }}></div>
        <form
          style={{
            // height:"20px",
            textAlign: 'left',
            width: '400px',
          }}
          onSubmit={handleSubmit}>
          <Form.Group controlId='kindOfStand'>
            <Form.Check
              value='online'
              type='radio'
              aria-label='radio 1'
              label='Online'
              onChange={handleChange}
              checked={kindOfStand === 'online'}
            />
            <Form.Check
              value='offline'
              type='radio'
              aria-label='radio 2'
              label='Pay later at hostpital '
              onChange={handleChange}
              checked={kindOfStand === 'offline'}
            />
          </Form.Group>
          <Button
            variant='primary'
            type='submit'
            style={{
              // height:"20px",
              width: '400px',
            }}>
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}
export default Doc4ui;

//new css//
