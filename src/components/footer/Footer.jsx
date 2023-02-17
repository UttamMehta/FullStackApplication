/** @format */
import styles from './footer.module.css';
import React from 'react';

const Footer = () => {
  return (
    <>
      <div
        id={styles.kll}
        style={{
          //   display: 'flex'
          backgroundColor: '#28328c',
          textAlign: 'center',
        }}>
        <div
          style={{
            display: 'flex',
            backgroundColor: '#28328c',
            padding: '48px 0',
            justifyContent: 'space-around',
          }}>
          <div className={styles.forall}>
            <h6>Practo</h6>
            <p>About</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>Press</p>
            <p>Contact Us</p>
          </div>
          <div className={styles.forall}>
            <h6>For patients</h6>
            <p>Search for doctors</p>
            <p>Search for clinics</p>
            <p>Search for hospitals</p>
            <p>Book Diagnostic Tests</p>
            <p>Book Full Body Checkups</p>
            <p>Practo Plus</p>
            <p>Covid Hospital listing</p>
            <p>Practo Care Clinics</p>
            <p>Read health articles</p>
            <p>Read about medicines</p>
            <p>Practo drive</p>
            <p>Health app</p>
            <p>Practo Plus Infinity</p>
          </div>
          <div className={styles.forall}>
            <h6>For doctors</h6>
            <p>Practo Profile</p>
            <div
              style={{
                marginTop: '20px',
              }}
              className={styles.forall}>
              <h6>For clinics</h6>
              <p>Ray by Practo</p>
              <p>Practo Reach</p>
              <p>Ray Tab</p>
              <p>Practo Pro</p>
            </div>
          </div>
          <div className={styles.forall}>
            <h6>For hospitals</h6>
            <p>Insta by Practo</p>
            <p>Qikwell by Practo</p>
            <p>Practo Profile</p>
            <p>Practo Reach</p>
            <p>Practo Drive</p>

            <div
              style={{
                marginTop: '20px',
              }}
              className={styles.forall}>
              <h6>For Corporates</h6>
              <p>Wellness Plans</p>
            </div>
          </div>

          <div className={styles.forall}>
            <h6>More</h6>
            <p>Help</p>
            <p>Developers</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>PCS T&C</p>
            <p>Healthcare Directory</p>
            <p>Practo Health Wiki</p>
          </div>
          <div className={styles.forall}>
            <h6>Social</h6>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>LinkedIn</p>
            <p>Youtube</p>
            <p>Github</p>
          </div>
        </div>

        <div
          style={{
            // width: '412px',
            textAlign: 'center',
            // margin: 'auto',
            // border: 'solid black',
            color: '#fff',
          }}>
          <div
            style={{
              textAlign: 'center',
              marginBottom: '30px',
            }}>
            <img
              src='https://www.practostatic.com/web-assets/images/white_practo_logo.svg'
              alt=''
            />
          </div>

          {/* <div></div> */}
          <span>Copyright © 2017, Practo.All rights reserved. </span>
          {/* <span>All rights reserved.</span> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
