/** @format */

import React, { Component } from 'react';
import Slider from 'react-slick';

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    const arrdataa = [
      {
        dimg: 'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg',
        title: ' Dentist',
        title2: 'Teething troubles? Schedule a dental checkup',
      },
      {
        dimg: 'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg',
        title: 'Gynecologist/Obstetrician',
        title2:
          'Explore for women’s health, pregnancy and infertility treatments',
      },
      {
        dimg: 'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dietitian@2x.jpg',
        title: 'Dietitian/Nutrition',
        title2:
          'Get guidance on eating right, weight management and sports nutrition',
      },
      {
        dimg: 'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-physiotherapist@2x.jpg',
        title: 'Physiotherapist',
        title2: 'Pulled a muscle? Get it treated by a trained physiotherapist',
      },
      {
        dimg: 'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-surgeon@2x.jpg',
        title: 'Orthopedist',
        title2: 'For Bone and Joints issues, spinal injuries and more',
      },
      {
        dimg: 'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-doctor@2x.jpg',
        title: 'General physician',
        title2: 'Find the right family doctor in your neighborhood',
      },
    ];
    return (
      <div>
        <div
          style={{
            margin: 'auto',
            marginTop: '50px',
            width: '80%',
            display: 'flex',
            marginBottom: '20px',
            color: '#414146',
            justifyContent: 'space-between',
          }}>
          <div>
            <h2 style={{ margin: '0' }}>
              Book an appointment for an in-clinic consultation
            </h2>
            <div
              style={{
                textAlign: 'left',
              }}>
              Find experienced doctors across all specialties
            </div>
          </div>

          <div></div>
        </div>
        <div>
          <div
            style={{
              width: '80%',
              //   border: 'solid black',
              //   position: 'relative',
              marginRight: '5px',
              marginLeft: '5px',
              margin: 'auto',
            }}>
            <Slider {...settings}>
              {arrdataa.map((e) => {
                return (
                  <div
                    style={{
                      height: '300px',
                      width: '300px',
                      // border: 'solid pink',
                      // paddingBottom: '3000px',
                    }}>
                    <div
                      style={{
                        width: '270px',
                        height: '220px',
                        borderRadius: '5px',

                        // border: 'solid black',
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
                        {e.title2}
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
