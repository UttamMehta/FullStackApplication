/** @format */

import {
  ChakraProvider,
  Image,
  Box,
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from '@chakra-ui/react';
import React from 'react';
import rating from './rating.png';
import { CheckCircleIcon, AtSignIcon, ArrowLeftIcon } from '@chakra-ui/icons';
import Styles from './DocProfile.module.css';

export default function TabData() {
  return (
    <div>
      <ChakraProvider>
        <Flex width='80%' margin='auto' justifyContent='center'>
          <Tabs variant='enclosed-colored'>
            <TabList>
              <Tab>
                <b>Info</b>
              </Tab>
              <Tab>
                <b>Stories</b>
              </Tab>
              <Tab>
                <b>Consult Q&A</b>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <div className={Styles.infotab}>
                  <div className={Styles.infotabcolumn}>
                    <p>HSR Layout, Bangalore</p>
                    <p> DermaVille</p>
                    <p>
                      <img width={100} height={90} src={rating} alt='Ratings' />
                    </p>
                    <p>114/115, 27th Main Road, 2nd floor ,</p>
                    <p>Hsr layout 2nd sector, Bengaluru,</p>
                    <p>Karnataka , Landmark: Near NIFT</p>
                    <p>college, Bangalore</p>
                  </div>
                  <div className={Styles.infotabcolumn}>
                    <h3>Mon,Wed-Fri </h3>
                    <p>10:00 AM - 01:00 PM</p>
                    <p>04:00 PM - 07:00 PM</p>
                    <h3>Tue</h3>
                    <p>04:00 PM - 07:00 PM</p>
                    <h3>Sat</h3>
                    <p>10:15 AM - 01:00 PM</p>
                    <p>04:00 PM - 07:15 PM</p>
                  </div>
                  <div className={Styles.infotabcolumn}>
                    {' '}
                    <p>Charge: 600 /- </p>
                    <p>
                      <ArrowLeftIcon /> &nbsp; Online Payment Accepted
                    </p>
                    <p>
                      Prime <CheckCircleIcon color='blue.500' />
                    </p>
                    <p>Max.60 mins wait + Verified Details</p>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className={Styles.singlestory}>
                  <div className={Styles.flexonly}>
                    <span className={Styles.feedback__icon}>V</span> &nbsp;
                    <p className={Styles.clientname}>Verified Patient</p>
                    <span className={Styles.inclininc}>
                      <AtSignIcon /> in-clinic
                    </span>
                  </div>
                  <div className={Styles.clientstory}>
                    <h3>Visited For TreatMent</h3>
                    <p>I Recommend the Doctor</p>
                    <p>
                      Happy With : Doctor Friendliness, Explanation Of the
                      Health Issue, Treatment Satisfaction
                    </p>
                    <p>Value For Money ,Wait Time</p>
                    <p>
                      {' '}
                      Doctor was friendly and explained everything in detail.
                      Had a very pleasant experience at the clinic
                    </p>
                  </div>
                </div>
                <div className={Styles.singlestory}>
                  <div className={Styles.flexonly}>
                    <span className={Styles.feedback__icon}>V</span> &nbsp;
                    <p className={Styles.clientname}>Verified Patient</p>
                    <span className={Styles.inclininc}>
                      <AtSignIcon /> in-clinic
                    </span>
                  </div>
                  <div className={Styles.clientstory}>
                    <h3>Visited For TreatMent</h3>
                    <p>I Recommend the Doctor</p>
                    <p>
                      Happy With : Doctor Friendliness, Explanation Of the
                      Health Issue, Treatment Satisfaction
                    </p>
                    <p>Value For Money ,Wait Time</p>
                    <p>
                      {' '}
                      Doctor was friendly and explained everything in detail.
                      Had a very pleasant experience at the clinic
                    </p>
                  </div>
                </div>
                <div className={Styles.singlestory}>
                  <div className={Styles.flexonly}>
                    <span className={Styles.feedback__icon}>V</span> &nbsp;
                    <p className={Styles.clientname}>Verified Patient</p>
                    <span className={Styles.inclininc}>
                      <AtSignIcon /> in-clinic
                    </span>
                  </div>
                  <div className={Styles.clientstory}>
                    <h3>Visited For TreatMent</h3>
                    <p>I Recommend the Doctor</p>
                    <p>
                      Happy With : Doctor Friendliness, Explanation Of the
                      Health Issue, Treatment Satisfaction
                    </p>
                    <p>Value For Money ,Wait Time</p>
                    <p>
                      {' '}
                      Doctor was friendly and explained everything in detail.
                      Had a very pleasant experience at the clinic
                    </p>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  <div className={Styles.qaheader}>
                    <h2>
                      {' '}
                      <b> Common Questions & Answers</b>
                    </h2>
                  </div>
                  <div className={Styles.questions}>
                    <b>
                      {' '}
                      <h3>Q:Where Does Doctor Practice?</h3>
                    </b>
                    <p>
                      <b>A:</b>Doctor practices at Dermaville - HSR Layout. The
                      doctor also provides{' '}
                    </p>
                    <p>online video consultation through Practo.</p>
                  </div>
                  <div className={Styles.questions}>
                    <b>
                      {' '}
                      <h3>Q:How can I take Doctor's appointment ?</h3>
                    </b>
                    <p>
                      <b>A:</b>You can take Doctor's appointment online through
                      Practo for in-clinic visit or
                    </p>
                    <p> for video consultation with the doctor.</p>
                  </div>
                  <div className={Styles.questions}>
                    <b>
                      {' '}
                      <h3>Q:Why do patients visit Doctor's?</h3>
                    </b>
                    <p>
                      <b>A:</b>Patients frequently visit Doctor for Dermatitis
                      Treatment, Chronic Skin
                    </p>
                    <p>
                      {' '}
                      Allergy, Alopecia Areta Treatment. To see more reasons
                      visit the doctor's profile on Practo.
                    </p>
                  </div>
                  <div className={Styles.questions}>
                    <b>
                      <h3>Q:What is Doctor's rating?</h3>
                    </b>
                    <p>
                      <b>A:</b>Doctor has been recommended by 421 patients and
                      has recieved stories
                    </p>
                    <p>
                      {' '}
                      from 151 patients. You can read detailed reviews of the
                      doctor on Practo.
                    </p>
                  </div>
                  <div className={Styles.questions}>
                    <b>
                      {' '}
                      <h3>Q:What is Doctor's education qualification?</h3>
                    </b>
                    <p>
                      <b>A:</b>Doctor's has the following qualifications - MBBS.
                      You can book the
                    </p>
                    <p> doctor through the doctor's profile on Practo.</p>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>Heathfeed Tab</TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </ChakraProvider>
    </div>
  );
}
