import React, { Component } from "react" ;
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker
} from '@material-ui/pickers';
import 'date-fns';
import { Calendar, Views  , momentLocalizer}  from 'react-big-calendar' ;

import events from "../assets/events"
import moment from 'moment'
import DateFnsUtils from '@date-io/date-fns';
import "../App.css"

const propTypes = {}

class Timetable extends Component {
  constructor(...args){
    super(...args);
    this.state = {events}

  }

   handleDateChange = (date) => {
     
    console.log(date);
    this.setState({selectedDate: date}) ;
    }; 


    handleSelect = ({ start, end }) => {
      const title = window.prompt('New Event name')
      if (title)
        this.setState({
          events: [
            ...this.state.events,
            {
              start,
              end,
              title,
            },
          ],
        })
    }
  render(){
    const localizer= momentLocalizer(moment);
  return (
   
    <div >
     <div  >
      <MuiPickersUtilsProvider utils={DateFnsUtils}>

        <KeyboardDatePicker
        id="time-picker"
          label="Time Picker"
          
          value={this.state.selectedDate}
          onChange={this.handleDateChange}
          
        />
        <KeyboardTimePicker
        id="time-picker"
          label="Time Picker"
          
          value={this.state.selectedDate}
          onChange={this.handleDateChange}
          
        />
      </MuiPickersUtilsProvider>
</div> 
<Calendar
          selectable
          localizer={localizer}
          events={this.state.events}
          defaultView={Views.month}
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date(2015, 3, 12)}
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={this.handleSelect}
        />




</div>
  );
  }
}
Timetable.propTypes = propTypes
export default Timetable;