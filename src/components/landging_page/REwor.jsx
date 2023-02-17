/** @format */

import React from 'react';

const REwor = () => {
  const arrdataa = [
    {
      dimg: 'https://www.practostatic.com/fit/5fd27b74d9477cb633445cf3f105078bbc479910',
      green: 'Coronavirus',
      title: '12 Coronavirus Myths and Facts That You Should Be Aware Of',
      doname: 'Dr. Diana Borgio',
    },
    {
      dimg: 'https://www.practostatic.com/fit/bade52edc7fb158bf627216bf96c2b881a97f30c',
      green: 'Vitamins and Supplements',
      title: 'Eating Right to Build Immunity Against Cold and Viral Infections',
      doname: 'Dr. Diana Borgio',
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        marginTop: '50px',
        // border: 'solid pink',
      }}>
      <div
        style={{
          //   border: 'solid red',
          width: '80%',
          //   height: '300px'
          margin: 'auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          textAlign: 'center',
        }}>
        <div
          style={{
            margin: 'auto',
            boxSizing: 'border-box',
            // border: 'solid green',
            // display: 'flex',
            alignItems: 'center',
            width: '300px',
            height: '200px',
            textAlign: 'left',
          }}>
          <h2 style={{ margin: '0' }}>
            Consult top doctors online for any health concern
          </h2>
          <div
            style={{
              textAlign: 'left',
              marginTop: '5px',
              marginBottom: '20px',
            }}>
            Private online consultations with verified doctors in all
            specialists
          </div>
          <div style={{ margin: 'auto' }}>
            <button
              style={{
                margin: 'auto',
                // padding: '15px 30px',
                backgroundColor: '#14bef0',
                color: '#fff',
                // textAlign: 'center',
                border: 'none',
                borderRadius: '5px',
              }}>
              See all articles
            </button>
          </div>
        </div>
        <div
          style={{
            margin: 'auto',
            //   marginTop: '50px',
            // border: 'solid black',
            // height: '300px',
            display: 'flex',
            paddingTop: '20px',
            // paddingBottom: '20px',
            display: 'flex',
            flexWrap: 'wrap',
            // width: '80%',
            gap: '30px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          {arrdataa.map((e) => {
            return (
              <div
                style={{
                  width: '280px',
                  height: '350px',
                  borderRadius: '5px',
                  //   border: 'solid black',
                  textAlign: 'left',
                  margin: 'auto',
                }}>
                <div
                  style={{
                    width: '280px',
                    height: '220px',
                    borderRadius: '5px',
                    //   border: 'solid black',
                    textAlign: 'left',
                    margin: 'auto',
                  }}>
                  <img
                    style={{
                      borderRadius: '5px',
                      width: '100%',
                      height: '100%',
                    }}
                    src={e.dimg}
                    alt='dcwe'
                  />
                </div>

                <div
                  style={{
                    marginTop: '10px',
                    color: '#358588',
                    fontSize: '14px',
                    fontFamily: 'Lato,Helvetica,Arial,sans-serif!important',
                    fontWeight: '700',
                  }}>
                  {e.green}
                </div>
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
                    fontSize: '14px',
                    color: '#414146',
                    marginTop: '10px',
                    fontWeight: '400',
                  }}>
                  {e.doname}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default REwor;
