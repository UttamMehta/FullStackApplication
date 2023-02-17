/** @format */

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landging_page from '../landging_page/Landing_page';
import Login from '../Log In/Login';
import Signup from '../Log In/Signup';
import Dashboard from '../ProductsPages/Dashboard';
import DocProfile from '../doc_detail_page/DocProfile/DocProfile';
import Doc4ui from '../doctor/Doc4ui';
import Checkout from '../ProductsPages/Checkout';
import Payment from '../MainWorks/Payment';
import Appointment from '../doc_detail_page/Appointment/Appointment';
import Sidebar from '../doc_detail_page/SideBar/SideBar';
import Pull from '../doc_detail_page/Appointment/Pull';

const Allroute = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landging_page />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/single' element={<DocProfile />} />
        <Route path='/booking' element={<Doc4ui />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/user' element={<Pull />} />
        {/* <Route path='/side' element={<Sidebar />} /> */}
        {/* Side bar */}
      </Routes>
    </div>
  );
};

export default Allroute;
