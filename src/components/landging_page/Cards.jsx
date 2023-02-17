/** @format */

import React from 'react';

const Cards = () => {
  const arrdata = [
    {
      dimg: 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png',
      title: 'Instant Video Consultation',
      title2: 'Connect within  60 secs',
      background: ' #AFCFED',
    },
    {
      dimg: 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png',
      title: 'Find Doctors Near You',
      title2: 'Confirmed appointments',
      background: ' #98CBD6',
    },
    {
      dimg: 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_medicines.png',
      title: 'Medicines',
      title2: 'Essentials at your doorstep',
      background: ' #CCD0DB',
    },
    {
      dimg: 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_lab_tests.png',
      title: 'Lab Tests',
      title2: 'Sample pickup at your home',
      background: ' #AFCFED',
    },
    {
      dimg: 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png',
      title: 'Surgeries',
      title2: 'Safe and trusted surgery centers',
      background: ' #D5D8FC',
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '80%',
        // border: 'solid black',
        textAlign: 'center',
        flexWrap: 'wrap',
        gap: '30px',
        margin: 'auto',
        justifyContent: 'center',
      }}>
      {arrdata.map((e) => {
        return (
          <div
            style={{
              borderRadius: '20px',
              boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
            }}>
            <div
              style={{
                height: '170px',
                width: '200px',
                background: e.background,
                paddingTop: '12px',
                paddingLeft: '20px',
                paddingRight: '20px',
                paddingBottom: '0px',
                //   borderRadius: '20px',
                // border: 'solid black',
                borderTopLeftRadius: '20px',
                borderTopRightRadius: '20px',
              }}>
              <img
                style={{ height: '100%', width: '100%' }}
                src={e.dimg}
                alt=''
              />
            </div>
            <div
              style={{
                height: '120px',
                width: '200px',
                // border: 'solid black',
                paddingTop: '20px',
                borderBottomLeftRadius: '20px',
                borderBottomRightRadius: '20px',
              }}>
              <div
                style={{
                  fontSize: ' 20px',
                  fontFamily: 'Lato,Helvetica,Arial,sans-serif!important',
                  color: ' #2d2d32',
                  fontWeight: '700',
                  textAlign: 'left',
                  paddingLeft: '10px',
                }}>
                {e.title}
              </div>
              <div
                style={{
                  fontSize: ' 14px',
                  fontWeight: '400',
                  color: '#787887',
                  fontFamily: 'Lato,Helvetica,Arial,sans-serif!important',
                  paddingTop: '10px',
                  textAlign: 'left',
                  paddingLeft: '10px',
                }}>
                {e.title2}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
