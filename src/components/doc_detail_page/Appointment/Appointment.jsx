/** @format */

import styles from './Appointment.module.css';
import SliderWrapper from '../SliderWrapper/SliderWrapper';
import { useSelector } from 'react-redux';
import Sidebar from '../SideBar/SideBar';
const AppointmentCard = ({all}) => (
  <>
    {/*  */}
  <div style={{border: 'solid black',marginBottom:"10px" }}>
      <div className={styles.appointment_card}>
        <div className={styles.appointment_info}>
        <img src={all.image} alt={all.name}/>
          <div className={styles.appointment_date}>

            {/* <p>{all.date}</p>
            <p>{all.month}</p> */}
            {/* <img src={all.image} alt={all.name}/> */}
          </div>
          <div className={styles.appointment_name}>
            <h4>
              Dr. {all.namee},{all.department}
            </h4>
            <p style={{ margin: 0 }}>
              {all.date}, on {all.time}
            </p>
            <p>{all.host} Hospital</p>
          </div>
        </div>
        <div className={styles.appointment_button}>
          {/* <button>Book Again</button> */}
          {/* <button>Cancel Appointment</button> */}
        </div>
      </div>
    </div>
  </>
);

const Appointment = () => {
  const data = useSelector((store) => {
    return store;
  });

  const appointments = [
    {
      date: data.appoint.date,
      name: data.appointuser.namee,
      speciality: data.appointuser.department,
      day: data.appoint.date,
      time: data.time,
      clinicname: data.appointuser.host,
    },
  ];

  const arr = appointments.map((el) => <AppointmentCard {...el} />);

  // return <SliderWrapper arr={arr} />;
};

export {Appointment,AppointmentCard}
