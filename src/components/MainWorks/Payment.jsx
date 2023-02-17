import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";

function Payment() {
    const appoint=useSelector((store)=>store.appoint)
    const appointuser=useSelector((store)=>store.appointuser)
    const user=useSelector((store)=>store.user)
    const time=useSelector((store)=>store.time)

    const [image,setImage]=useState(`https://elearning.jacustoms.gov.jm/images/processing2.gif`);
    const [boolean,setBoolean]=useState(false);
    
    useEffect(()=>{
      sendAppointment();
    },[])

    // setTimeout(()=>{
    //     setImage(`https://cdn.dribbble.com/users/1751799/screenshots/5512482/check02.gif`);
    //     setTimeout(()=>{
    //         setBoolean(true);
    //     },5000)
    // },5000)
  
    async function sendAppointment() {
        let Appointment={...appoint,...appointuser}
        try {
          let req = await fetch(`https://odd-blue-scarab-kit.cyclic.app/signUp/appoint`, {
            method: "POST",
            body: JSON.stringify({user,Appointment}),
            headers: {
              "Content-type": "application/json"
            }
          });
          let res = await req.json();
          // console.log(res);
          // alert(res.message);
          // history("/login");
          // alert("Signup Successfull");
          await setImage(`https://cdn.dribbble.com/users/1751799/screenshots/5512482/check02.gif`);
          await  setBoolean(true);
          toast.success(res.message,{
            position: "top-center",
          })
        } catch (e) {
          toast.error(e, {
            position: "top-center",
          });
        }
      }
      
    if(boolean)
    {
    return <Navigate to="/user" />}

    return (
        <div>
            <img src={image} alt="payment"/>
        </div>
    );
}

export default Payment;