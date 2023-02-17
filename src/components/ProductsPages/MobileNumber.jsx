/** @format */

import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Otp from '../MainWorks/Otp';

function MobileNumber() {

  const appoint=useSelector((store)=>store.appoint)
  const appointuser=useSelector((store)=>store.appointuser)
  const user=useSelector((store)=>store.user)

  const [mno, SetMno] = useState(0);
  const [otp, setOtp] = useState();

  const generateOtp =(e) => {
    e.preventDefault();
    setOtp("");
    getOtp();
  };

  const reSend = () => {
    // e.preventDefault();
    setOtp("")
    getOtp();
  };

  // console.log(otp);

async function getOtp(){

  try {
    let req=await fetch(`https://odd-blue-scarab-kit.cyclic.app/generateotp`);
    let res=await req.json();
   await setOtp(res.z);
    // console.log(res)
  //  await appoints();

  } catch (e) {
    toast.error(e,{
      position: "top-center",
    })
  }
}



  return (
    <>
      <input
        style={{ width: '70%', height: '40px', marginTop: '20px' }}
        placeholder='Enter Mobile Number'
        onChange={(e) => SetMno(e.target.value)}
      />

      {otp ? (
        <Otp otp={otp} reSend={reSend} />
      ) : (
        <>
          {' '}
          
          <button
            disabled={mno.length == 10 && +mno > 0 ? false : true}
            onClick={generateOtp}
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
            Click
          </button>
        </>
      )}
    </>
  );
}

export default MobileNumber;
