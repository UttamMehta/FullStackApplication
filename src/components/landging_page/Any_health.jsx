/** @format */

import React from 'react';

const Any_health = () => {
  const arrdataa = [
    {
      dimg: 'https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png',
      title: ' Period doubts or Pregnancy',
    },
    {
      dimg: 'https://www.practostatic.com/consult/consult-home/symptoms_icon/Acne.png',
      title: 'Acne, pimple or skin issues',
    },
    {
      dimg: 'https://www.practo.com/consult/static/images/top-speciality-sexology.svg',
      title: 'Performance issues in bed',
    },
    {
      dimg: 'https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png',
      title: 'Cold, cough or fever',
    },
    {
      dimg: 'https://www.practo.com/consult/static/images/top-speciality-pediatric.svg',
      title: 'Child not feeling well',
    },
    {
      dimg: 'https://www.practostatic.com/acred/search-assets/2/12-mental-wellness.png',
      title: 'Depression or anxiety',
    },
  ];

  return (
    <div>
      <div styte={{ border: 'black solid' }}>
        <div
          style={{
            margin: 'auto',
            marginTop: '80px',
            // border: 'black solid',
            width: '80%',
            display: 'flex',
            color: '#414146',
            justifyContent: 'space-between',

            alignItems: 'center',
          }}>
          <div style={{ margin: '0', boxSizing: 'border-box' }}>
            <h2 style={{ margin: '0', textAlign: 'left' }}>
              Consult top doctors online for any health concern
            </h2>
            <div
              style={{
                textAlign: 'left',
              }}>
              Private online consultations with verified doctors in all
              specialists
            </div>
          </div>
          <button
            style={{
              fontSize: '14px',
              color: '#14bef0',
              fontWeight: '400',
              padding: '12px 16px',
              border: '1.5px solid #14bef0',
              backgroundColor: '#fff',
              borderRadius: '5px',
              width: '200px',
              height: '60px',
            }}>
            View All Specialities
          </button>
        </div>
        <div
          style={{
            // marginBottom: '100px',
            margin: 'auto',
            marginTop: '50px',
            // border: 'solid black',

            // height: '200px',
            paddingTop: '20px',
            paddingBottom: '20px',
            display: 'flex',
            flexWrap: 'wrap',
            width: '80%',
            gap: '30px',
            // justifyContent: 'space-between',
            justifyContent: 'center',
          }}>
          {arrdataa.map((e) => {
            return (
              <div
                style={{
                  height: '200px',
                  width: '150px',
                  // border: 'solid pink',
                }}>
                <div
                  style={{
                    width: '120px',
                    height: '120px',
                    //   border: 'solid black',
                    margin: 'auto',
                  }}>
                  <img
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                    src={e.dimg}
                    alt=''
                  />

                  <div
                    style={{
                      fontWeight: '700',
                      fontSize: '14px',
                      color: '#414146',
                      marginTop: '10px',
                    }}>
                    {e.title}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Lato,Helvetica,Arial,sans-serif!important',
                      color: '#14bef0',
                      marginTop: '10px',
                      fontSize: '12px',
                      fontWeight: '700',
                    }}>
                    CONSULT NOW
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Any_health;
