/** @format */

import React from 'react';

function Gender({ changeGender }) {
  return (
    <div
      style={{
        color: 'white',
        display: 'flex',
        gap: '20px',
        margin: '0px 0px 0px 10px',
      }}>
      {/* <div> */}
      <span
        style={{
          marginTop: '0px',
        }}>
        Filter by
      </span>
      {/* </div> */}
      <div style={{ padding: '0px', margin: '0px' }}>
        <select
          name=''
          id='gender'
          onChange={(e) => changeGender(e.target.value)}>
          <option value=''>Gender</option>
          <option value='male'>Male Doctor</option>
          <option value='female'>Female Doctor</option>
        </select>
      </div>
    </div>
  );
}

export default Gender;
