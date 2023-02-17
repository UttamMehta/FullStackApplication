/** @format */

import styles from './DocProfile.module.css';
import Styles from '../../doctor/Doc.module.css';
import { Image, Box } from '@chakra-ui/react';
import TabData from './TabData';
import Ghh from '../../MainWorks/Ghh';
import { useSelector } from 'react-redux';
//import Tabs from "./tabs";
export default function DocProfile() {
  const data = useSelector((store) => {
    return store.user;
  });
  console.log(data, 'wcw');
  const sav = {
    image: data.image,
    deparment: data.deparment,
    price: data.price,
    Patient_Stories: data.Patient_Stories,
    exp: data.exp,
    host: data.host,
    id: data.id,
  };
  return (
    <div className={styles.tab_data}>
      <div className={styles.flexBox}>
        <div id='profileimg'>
          {/* <img src="https://imagesx.practo.com/providers/dr-sankeerth-vijayakumar-dermatologist-bangalore-19b241f3-1b4a-4885-acc7-97b469890d02.jpg?i_type=t_100x100" alt="docimg" /> */}
          <Box boxSize='120px'>
            <Image src={data.image} alt='docimg' />
          </Box>
        </div>
        <div className={styles.contprofileinfo}>
          <div
            className={styles.divprofileinfo}
            style={{
              textAlign: 'left',
              marginBottom: '50px',
            }}>
            <h1 id='name'> Dr.{data.namee}</h1>
            <h3>Specialization :{data.deparment}</h3>
            {/* <p>Dermatologist,Aesthetic Dermatologist, Cosmetologist</p> */}
            <h4> Years Experience Overall ({data.exp} as specialist)</h4>
            <p>
              <img src='practo_3\public\accept.png' alt='' /> &nbsp; Medical
              Registration Verified{' '}
            </p>
            <p>
              <img src='practo_3\public\like.png' alt='' /> &nbsp; 97%{' '}
            </p>
          </div>
          <div
            style={{
              marginBottom: '50px',
            }}>
            <p
              style={{
                textAlign: 'left',
              }}>
              Dr. Sankeerth Vijayakumar is a Consultant Dermatologist and a
              Cosmetologist. He has obtained his MBBS degree from Kempegowda
              Institute of Medical Sciences, Bangalore and post graduate MD
              degree in Dermatology, Venereology & Leprosy from S.S Institute of
              Medical Sciences, Davangere. He has earned a fellowship in
              Cosmetology and Lasers from the prestigious Bangalore Medical
              College & Research Centre. He was a former consultant at APOLLO
              hospital Bangalore and has over 9 years of experience in this
              field of medical science. He has presented many papers on various
              topics in National and State conferences.
            </p>
          </div>
          <Ghh sav={sav} />
        </div>
      </div>
      <TabData />
    </div>
  );
}
