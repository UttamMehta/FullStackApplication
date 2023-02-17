/** @format */

import React from 'react';

function Pagination({ page, onChange,prev,next }) {
  let z = Math.floor(Math.random() * (8 - 1) + 2);
  let arr = [];
  for (let i = 0; i < 5; i++) arr.push(i + 1);

  return (
    <div
      style={{
        marginTop: '40px',
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <p onClick={prev}
        style={{
          marginTop: '14px',
          color:page===1?"red":'rgb(55,184,237)',
          display:page<=1?"none":"",
        }}>
        previous
      </p>
      {arr.map((e, i) => {
        return (
          <button
            key={i}
            onClick={() => onChange(e)}
            style={{
              color: +page === +e ? 'rgb(55,184,237)' : 'grey',
              borderRadius: '16px',
              width: '56px',
              height: '32px',
              border: 'none',
              background: 'white',
            }}>
            {e}
          </button>
        );
      })}
      <p  onClick={next}
        style={{
          marginTop: '14px',
          color:page===5?"red":'rgb(55,184,237)',
          display:page>=5?"none":"",
        }}>
        next
      </p>
    </div>
  );
}

export default Pagination;
