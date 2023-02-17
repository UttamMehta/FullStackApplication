/** @format */
import st from '../Navbar/nabar.module.css';
import React from 'react';

const Input = () => {
  return (
    <div>
      {/* <div style={{ display: 'flex' }}>
        <input type='text' />
        <input type='text' />
      </div> */}
      <div
        style={{ width: '100%', height: '400px', marginTop: '30px' }}
        id={st.kl}>
        <img
          style={{ width: '80%' }}
          src='https://s3.ap-southeast-1.amazonaws.com/www.practostatic.com/consumer-home/desktop/images/1597423628/chronic_consumer_banner_dweb.png'
          alt='rgd'
        />
      </div>
    </div>
  );
};

export default Input;
