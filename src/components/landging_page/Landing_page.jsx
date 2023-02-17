/** @format */

import React from 'react';
import Allcards from './Allcards';
import Any_doctor from './Any_doctor';
import Any_health from './Any_health';
import Input from './Input';
import Rcent from './Rcent';
import ControlledCarousel from './ControlledCarousel';
import MultipleItems from './Slid';

import REwor from './REwor';
const Landing_page = () => {
  return (
    <div>
      <Input />
      <Allcards />

      <Any_health />
      {/* <AppointmentScheduler /> */}
      <MultipleItems />
      {/* <Rcent /> */}
      <REwor></REwor>
      <ControlledCarousel />
    </div>
  );
};

export default Landing_page;
