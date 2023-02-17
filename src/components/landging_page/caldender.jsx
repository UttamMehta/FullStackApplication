/** @format */

import React from 'react';
import { Calendar } from 'react-calendar';

export default class AppointmentScheduler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: null,
      selectedTime: null,
    };
  }

  handleDateSelection(date) {
    this.setState({
      selectedDate: date,
    });
  }

  handleTimeSelection(time) {
    this.setState({
      selectedTime: time,
    });
  }

  render() {
    return (
      <div>
        <h1>Appointment Scheduler</h1>
        <p>Please select a date and time for your appointment:</p>
        <Calendar onChange={(date) => this.handleDateSelection(date)} />
        {this.state.selectedDate && (
          <TimeSelector
            onTimeSelection={(time) => this.handleTimeSelection(time)}
          />
        )}
        {this.state.selectedTime && (
          <p>
            Your appointment is scheduled for{' '}
            {this.state.selectedDate.toLocaleDateString()} at{' '}
            {this.state.selectedTime}.
          </p>
        )}
      </div>
    );
  }
}

class TimeSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      times: [
        '9:00 AM',
        '9:30 AM',
        '10:00 AM',
        '10:30 AM',
        '11:00 AM',
        '11:30 AM',
        '12:00 PM',
        '12:30 PM',
        '1:00 PM',
        '1:30 PM',
        '2:00 PM',
        '2:30 PM',
        '3:00 PM',
        '3:30 PM',
        '4:00 PM',
        '4:30 PM',
        '5:00 PM',
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.times.map((time) => (
          <button onClick={() => this.props.onTimeSelection(time)}>
            {time}
          </button>
        ))}
      </div>
    );
  }
}
