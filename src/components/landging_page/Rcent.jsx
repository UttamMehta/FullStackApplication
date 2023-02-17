/** @format */

import React from 'react';

const Rcent = () => {
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
    <div style={{ marginTop: '50px' }}>
      <div
        style={{
          border: 'solid black',
          margin: 'auto',
          marginTop: '80px',
          width: '70%',
          display: 'flex',
          // flexWrap: 'wrap',
          color: '#414146',
          gap: '30px',
          // justifyContent: 'space-between',
        }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            // border: 'solid black',
            alignItems: 'center',
          }}>
          <div
            style={{
              boxSizing: 'border-box',
              border: 'solid green',
              // display: 'flex',
              width: '200px',
              height: '300px',
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
            <div style={{}}>
              <button
                style={{
                  margin: 'auto',
                  // padding: '15px 30px',
                  backgroundColor: '#14bef0',
                  color: '#fff',
                  textAlign: 'center',
                  border: 'none',
                  borderRadius: '5px',
                }}>
                See all articles
              </button>
            </div>
          </div>
          <div style={{ margin: 'auto' }}>
            <div
              style={{
                margin: 'auto',
                //   marginTop: '50px',
                //   border: 'solid black',
                // height: '300px',
                display: 'flex',
                paddingTop: '20px',
                // paddingBottom: '20px',
                display: 'flex',

                width: '80%',
                gap: '30px',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              {arrdataa.map((e) => {
                return (
                  <div
                    style={{
                      height: '300px',
                      width: '300px',
                      // border: 'solid pink',
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
                      <div
                        style={{
                          marginTop: '10px',
                          color: '#358588',
                          fontSize: '14px',
                          fontFamily:
                            'Lato,Helvetica,Arial,sans-serif!important',
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
                          fontFamily:
                            'Lato,Helvetica,Arial,sans-serif!important',
                          fontSize: '14px',
                          color: '#414146',
                          marginTop: '10px',
                          fontWeight: '400',
                        }}>
                        {e.doname}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rcent;
