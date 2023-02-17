/** @format */

import React from 'react';

function Price({ changePrice }) {
  return (
    <div
      style={{
        color: 'white',
        display: 'flex',
        gap: '10px',
        margin: '0px 0px 0px 10px',
      }}>
      {/* <div> */}
      <span
        style={{
          marginTop: '0px',
        }}>
        Sort by
      </span>
      {/* </div> */}
      <div style={{ padding: '0px', margin: '0px' }}>
        <select
          name=''
          id='filter'
          onChange={(e) => changePrice(e.target.value)}>
          <option value=''>Relevance</option>
          <option value='price=-1'>High To Low</option>
          <option value='price=1'>Low To High</option>
          <option value='yearexp=1'>Less Years of Experience</option>
          <option value='yearexp=-1'>More Years of Experience</option>
        </select>
      </div>
    </div>
  );
}

export default Price;
