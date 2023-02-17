/** @format */

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../MainWorks/Loader';

function SinglePage({ name, deparment, gender, price, image }) {
  // const [image,setImage]=useState("");

  return (
    <div>
      <div>
        <h3></h3>
      </div>
      <div>
        <img src={image} alt='1st' />
      </div>
      <div>{gender}</div>

      <div>{price}</div>
      <div>{deparment}</div>
    </div>
  );
}
export default SinglePage;
