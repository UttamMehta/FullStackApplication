/** @format */

import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import { add2 } from '../Redux/Actions/actions';
import { useDispatch } from 'react-redux';
import Time from './Time';
const Ghh = ({ sav }) => {
  const dispatch = useDispatch();
  const [appoint, setappoint] = useState({
    date: null,
    time: 10,
    isbook: false,
    day: null,
  });

  const [showTime, setShowTime] = useState(false);

  const [dateState, setDateState] = useState();

  useEffect(() => {
    setappoint({
      date: moment(dateState).format('MMMM Do YYYY'),
      day: moment(dateState).format('DD'),
      month: moment(dateState).format('MM'),
      year: moment(dateState).format('YYYY'),
      time: null,
      isbook: true,
      dateState,
    });
  }, [dateState]);

  const changeDate = (e) => {
    setDateState(e);
    setShowTime(true);
  };
  // console.log(appoint);
  // const changeAppoint = (data) => {
  //   setappoint({ ...appoint, time: '' });
  // };
  // console.log(moment(dateState).format('Mon'));
  // console.log(dateState.toString().substring(0, 3));
  // console.log(appoint);
  function sub(e) {
    console.log(e);
    // setappoint({ time: '10' });
    var timeee = e;

    add2(dispatch, sav, appoint, timeee);
  }

  return (
    <div>
      {showTime ? (
        <Time appoint={appoint} sav={sav} set={sub} />
      ) : (
        <Calendar
          value={dateState}
          onChange={changeDate}
          style={{ margin: 'auto' }}
        />
      )}
    </div>
  );
};

export default Ghh;
