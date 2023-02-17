/** @format */

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Otp({ otp, reSend }) {
  const [val, setValue] = useState();
  const [boolean,setBoolean]=useState(false);
  useEffect(() => {
    set();
  }, [val]);

  const set = () =>
    setTimeout(() => {
      setValue(otp);
    }, 5000);

  const resend = async(e) => {
    e.preventDefault();
    setValue('');
   await reSend();
  };


  async function sendAppointment(e){
    e.preventDefault();
    // let Appointment={...appoint,...appointuser};
    // try {
    //     let req=await fetch(`http://localhost:3035/signUp/appoint`,{
    //         method:"POST",
    //         body:JSON.stringify({name:"ok"}),
    //         headers:{
    //             "Content-type":"application-json",
    //         },
    //     })
    //     let res=await req.json();
    //    setBoolean(true);
    //     console.log(res);
    // } catch (e) {
    //     console.log(e);
    // }
}
if(boolean)
return <Navigate to="/payment" />

  return (
    <div style={{ marginTop: '10px' }}>
      <input placeholder='Enter Otp' value={val} type='number' />
      <span style={{ marginLeft: '50px' }}>Enter Otp</span>
      <Link to="/payment">
        <button
          style={{
            margin: '0px',
            padding: '0px',
            backgroundColor: 'cornflowerblue',
            marginBottom: '20px',
            alignItems: 'center',
            fontWeight: 'bold',
            width: '90%',
            borderRadius: '8px',
            backgroundColor: '#e7e7e7',
            cursor: 'pointer',
            backgroundColor: 'cornflowerblue',
            marginBottom: '20px',
            height: '30px',
            marginTop: '10px',
            fontSize: 'medium',
          }}>
          CLick
        </button>
        </Link>
      <button
        onClick={resend}
        style={{
          margin: '0px',
          padding: '0px',
          backgroundColor: 'cornflowerblue',
          marginBottom: '20px',
          alignItems: 'center',
          fontWeight: 'bold',
          width: '90%',
          borderRadius: '8px',
          backgroundColor: '#e7e7e7',
          cursor: 'pointer',
          backgroundColor: 'cornflowerblue',
          marginBottom: '20px',
          height: '30px',
          marginTop: '10px',
          fontSize: 'medium',
        }}>
        Resend Otp
      </button>
    </div>
  );
}

export default Otp;
