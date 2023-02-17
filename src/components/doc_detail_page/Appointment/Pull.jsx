/** @format */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {Appointment, AppointmentCard} from './Appointment';
import { ToastContainer, toast } from "react-toastify";
import Loader from '../../MainWorks/Loader';

const Pull = () => {
  const email=useSelector((store)=>{
   return store.user.email;
  })
  const token=useSelector((store)=>{
    return store.token;
  })
  
  const [loader,setLoader]=useState(true);
  const [appoint,setAppoint]=useState([]);
  const [message,setMesaage]=useState("");

useEffect(()=>{
  setAppoint([]);
  getAllAppointment();
  console.log(email);
  setLoader((prev)=>!prev);
},[token])

const getAllAppointment=async()=>{
  
try {
  let req=await fetch("https://odd-blue-scarab-kit.cyclic.app/signUp/singleUserAppointment",{
      method: "POST",
      body: JSON.stringify({"email":email}),
      headers: {
        "Content-type": "application/json",
      },
  })
  let res=await req.json();
  if(res.message){
    // toast.error(res.message, {
    //   position: "top-center",
    // });
    setMesaage(res.message)
  }
  else{
    console.log(res);
    if(res.allAppointment.length===0){
      setMesaage("No Appointment booked yet")
    }
else{
   setAppoint(res.allAppointment);
   setMesaage("");
}
}

} catch (e) {
  toast.error(e, {
    position: "top-center",
  });
  console.log(e);
}
setLoader(false);
}

console.log(message);

if(loader)
return <Loader />




  return (
    <div
      style={{
        height:appoint.length<=2?'400px':"",
      }}>
        {
          appoint.length===0?<h3 style={{textAlign:"center",backgroundColor:"white"}}>{message}</h3>:appoint.map((el,i)=>{
          return <AppointmentCard all={el} key={i}/>
          })
        }
      {/* <Appointment /> */}
    </div>
  );
};

export default Pull;
