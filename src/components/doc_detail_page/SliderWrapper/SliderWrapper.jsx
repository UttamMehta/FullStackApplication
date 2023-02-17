//import { useState } from 'react';
import './SliderWrapper.css';

const SliderWrapper = ({ arr, limit }) => {
	

	

	return (
		<div className='appt'>
			
				{arr.map((el, indx) => (
					<div key={indx} className='apptcard'>
						{el}
					</div>
				))}
		
			
		</div>
	);
};

export default SliderWrapper;
