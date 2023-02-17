/** @format */

import React from 'react';
import moment from 'moment';
import NoAppointment from './NoAppointment';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import { add2 } from '../Redux/Actions/actions';
// import { useEffect } from 'react';
function Time({ appoint, sav, set }) {
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     // function sub() {
  //     add2(dispatch, sav, appoint);
  //     //   }
  //   }, [appoint]);

  
  let date = new Date();
  if (
    +moment(date).format('DD') >= +appoint.day &&
    +moment(date).format('MM') >= +appoint.month &&
    +moment(date).format('YYYY') >= +appoint.year
  )
    return <NoAppointment />;

  if (appoint.dateState.toString().substring(0, 3) === 'Sun')
    return <NoAppointment />;

  let arr = ['10:00 A.M', '11:00 A.M', '12:00 P.M', '3:00 P.M', '4:00 P.M'];

  // const timed=(data)=>{
  // timeAction(data,appoint,)
  // }

  return (
    <div>
      <h4> {appoint.date}</h4>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
        }}>
        {arr.map((el, i) => {
          return (
            <Link to='/booking'>
              <button
                onClick={() => set(el)}
                key={i}
                style={{
                  width: '100px',
                  height: '32px',
                  margin: '12px',
                  borderRadius: '3px',
                  color: '#14bef0',
                  border: 'solid #14bef0',
                  background: 'white',
                }}
                className='button'>
                {el}
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Time;
