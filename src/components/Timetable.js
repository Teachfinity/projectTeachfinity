import React, { Component } from "react" ;
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import "../App.css"
class Timetable extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedDate: new Date() 
    }

  }
   handleDateChange = (date) => {
    console.log(date);
    this.setState({setSelectedDate: date});
    
  };
  render(){
  return (
      <div >
      <MuiPickersUtilsProvider utils={DateFnsUtils}>

        <KeyboardDatePicker
          label="Material Date Picker"
          value={this.state.selectedDate}
          onChange={this.handleDateChange}
          onClose={() => alert(this.state.selectedDate)}
        />

      </MuiPickersUtilsProvider>
        
      </div>
  );
  }
}

export default Timetable;