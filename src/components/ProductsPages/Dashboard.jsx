/** @format */

import { useContext, useEffect, useState } from 'react';
import Gender from '../MainWorks/Gender';
import Loader from '../MainWorks/Loader';
import Pagination from '../MainWorks/Pagination';
import Price from '../MainWorks/Price';
import Doc2ui from '../doctor/Doc2ui';

function Dashboard() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [search, setSearch] = useState("");
  // const [user, setUser] = useState('');
  const [image, setImage] = useState([]);
  const [error, setError] = useState(false);
  const [gender, setGender] = useState("");
  const [sorting, setSorting] = useState("");
  const [page, setPage] = useState(1);
  const [curr, setCurr] = useState("");

  // if(!curr)
  // setSearch("");

  // let ar = [
  //   'Dentist',
  //   'Gynecologist',
  //   'Dermatologist',
  //   'General Physician',
  //   'Homoeopath',
  //   'Ayurveda',
  //   'Dermatologist',
  // ];
// console.log(data)
  useEffect(() => {
    // if (price && gender)
    //   fetching(
    //     `http://localhost:8080/doctor?_page=${page}&_limit=5&deparment=${search}&gender=${gender}&_sort=${price}`
    //   );
    // else if (price)
    //   fetching(
    //     `http://localhost:8080/doctor?_page=${page}&_limit=5&deparment=${search}&_sort=${price}`
    //   );
    // else if (gender)
    //   fetching(
    //     `http://localhost:8080/doctor?_page=${page}&_limit=5&deparment=${search}&gender=${gender}`
    //   );
    // else
    //   fetching(
    //     `http://localhost:8080/doctor?_page=${page}&_limit=5&deparment=${search}`
    //   );
    // setPage(1);
    setLoader(true)
    getDoctor();
  }, [gender, sorting, page, search]);

  const changecurr = (e) => {
    // for (let i = 0; i < ar.length; i++) {
    //   if (ar[i] === curr) setSearch(i + 1);
    // }

    setSearch(curr);
    console.log(curr);
  };

  // const fetching = async (value) => {
  //   setLoader(true);
  //   if (+search > 10) setError(true);
  //   let a = await fetch(value);
  //   let b = await a.json();
  //   setData(b);
  //   console.log(b);
  //   let arr = [];
  //   for (let a1 of b) {
  //     let gender = a1.gender == 'Male' ? 'male' : 'female';
  //     console.log(gender);
  //     let req = await fetch(`https://randomuser.me/api/?gender=${gender}`);
  //     let res = await req.json();
  //     // setImage([]);
  //     arr.push(res.results[0].picture.large);
  //   }
  //   if (image.length === 0);
  //   setImage(arr);
  //   console.log(arr);
  //   setLoader(false);
  // };

  //  const call=async(value)=>{
  //   if(value)
  //   fetching(`http://localhost:8080/doctor?_page=1&_limit=5&deparment=${search}${value}`)
  //  }
  const changeGender = (d) => {
    setGender(d);
  };

  const changePrice = (d1) => {
    setSorting(d1);
  };

  const onChange = (v) => {
    setPage(v);
  };

  const increasePage=()=>{
    if(page<5)
    setPage((pre)=>pre+1);
  }

  const decreasePage=()=>{
    if(page>1)
    setPage((pre)=>pre-1);
  }

  async function getDoctor() {
    try {
      let req = await fetch(`https://odd-blue-scarab-kit.cyclic.app/doctor?department=${search}&page=${page}&gender=${gender}&${sorting}`);
      let res = await req.json();
      if (res.error) alert(res.error);
      else {
        setData(res.doctorData);
        setLoader(false)
      }
      // console.log(res);
    } catch (e) {
      alert(e);
    }
  }

  if (error) return <h1 style={{ color: 'red' }}>404 Error</h1>;
  return (
    <div>
      <h1>Search Doctor</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '0px 0px 16px 0px',
        }}>
        <div style={{ border: '2px solid grey' }}>
          <span
            class='material-symbols-outlined'
            style={{ padding: '0px', marginTop: '6px', marginRight: '0px' }}>
            search
          </span>
        </div>
        <input
          type='text'
          placeholder='Search Doctor'
          onChange={(e) => setCurr(e.target.value)}
          style={{
            height: '40px',
            width: '1000px',
            margin: '0',
            borderRadius: 'none',
            marginLeft: '-1px',
          }}
        />
        <button
          onClick={changecurr}
          style={{
            backgroundColor: '#28328c',
            color: 'white',
            height: '40px',
            border: 'none',
            width: '80px',
          }}>
          Search
        </button>
      </div>
      <div
        style={{
          backgroundColor: '#28328c',
          display: 'flex',
          height: '60px',
          justifyContent: 'space-around',
          marginTop: '32px',
          position: 'fixed',
          width: '100%',
          marginBottom: '20px',
          margin: 'auto',
          position: '-webkit-sticky',
          position: 'sticky',
          top: '0',
          alignItems: 'center',
        }}>
        <Gender changeGender={changeGender} />
        <Price changePrice={changePrice} />
        
      </div>
      <div
        style={{
          width: '100%',
          paddingLeft: '100px',
          marginTop: '100px',
          border: 'solild black',
        }}>
        {loader ? (
          <Loader />
        ) : (
          data.map((e, i) => {
            return (
              <Doc2ui
                key={e.id}
                namee={e.name}
                department={e.department}
                gender={e.gender}
                exp={e.yearexp}
                price={e.price}
                image={e.image}
                Patient_Stories={e.PatientStories}
                host={e.hospital}
                id={e.id}
              />
            );
          })
        )}
      </div>
      <Pagination page={page} onChange={onChange} prev={decreasePage} next={increasePage}/>
    </div>
  );
}

export default Dashboard;
