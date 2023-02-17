import Styles from "./Doc.module.css";
import React from "react";
 function DocUI(){
    return (
    <>
    <div className={Styles.pdiv1}>
      <div className={Styles.pdiv11 } >Video consult
      </div>
      <div>
      <select  className={Styles.pdiv12} name="" id="">
        <option value="">Availability</option>
        <option value="bb">Available Today</option>
        <option value="bb">Available Tommorow</option>
        <option value="bb">Available in 7 days</option>
      </select>
      </div>
      <div>
      <select className={Styles.pdiv13} name="" id="">
        <option value="bb">All filters</option>
        <option value="bb">lkl</option>
        <option value="bb">lkl</option>
      </select>
      </div>
      <div>
      <select className={Styles.pdiv14} name="" id="">
        <option value="bb">Sort by</option>
        <option value="bb">Relevance</option>
        <option value="bb">Availablity</option>
        <option value="">Price Low-high</option>
        <option value="">Price high-low</option>
        <option value="">Recommadance</option>
      </select>
      </div>
     
    </div>
    
    </>
   );
}
export default DocUI;