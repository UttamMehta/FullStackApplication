/** @format */

//import React, { useState } from 'react';
// import {
//     FaTh,
//     FaBars,
//     FaUserAlt,
//     FaRegChartBar,
//     FaCommentAlt,
//     FaShoppingBag,
//     FaThList
// }from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import styles from './SideBar.module.css';
import { useDispatch } from 'react-redux';
import { Authactionout } from '../../Redux/Actions/actions';

const Sidebar = ({ children }) => {
  // const[isOpen ,setIsOpen] = useState(false);
  // const toggle = () => setIsOpen (!isOpen);
  const dispatch = useDispatch();
  function jklpo() {
    // Authactionout(dispatch, null);
  }
  const menuItem = [
    {
      path: '/lkmk',
      name: 'Medical Records',
      // icon:<FaTh/>
    },
    {
      path: '/Appointment',
      name: 'Appointments',
      // icon:<FaUserAlt/>
    },
    {
      path: '/LabTests',
      name: 'LabTests',
      // icon:<FaRegChartBar/>
    },
    {
      path: '/MedicineOrders',
      name: 'Medicine Orders',
      // icon:<FaCommentAlt/>
    },
    {
      path: '/OnlineConsultations',
      name: 'Online Consultations',
      // icon:<FaShoppingBag/>
    },
    {
      path: '/Articles',
      name: 'Articles',
      // icon:<FaThList/>
    },
    {
      path: '/Feedback',
      name: 'Feedback',
      // icon:<FaThList/>
    },
    {
      path: '/payment',
      name: 'payment',

      // icon:<FaThList/>
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.top_section}>
          <b>
            <h1>Your Drive</h1>
          </b>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={styles.link}
            activeclassName='active'>
            <div style={{ display: 'block' }} className={styles.link_text}>
              {item.name}
            </div>
          </NavLink>
        ))}
        <div>
          <h3 onClick={jklpo}>logout</h3>
        </div>
      </div>

      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
