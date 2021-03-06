import React from 'react'
import DateFnsUtils from '@date-io/date-fns';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import {
  Modal, ModalHeader, Form, FormGroup, Input, Label, Button
} from 'reactstrap';
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker
} from '@material-ui/pickers';

import moment from 'moment'

import "../Timetable.css";

const localizer = momentLocalizer(moment) // or globalizeLocalizer
const now = new Date();
const myEventsList = [
  {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2020, 0, 0),
    end: new Date(2020, 0, 1),
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2015, 3, 7),
    end: new Date(2015, 3, 10),
  },

  {
    id: 2,
    title: 'DTS STARTS',
    start: new Date(2016, 2, 13, 0, 0, 0),
    end: new Date(2016, 2, 20, 0, 0, 0),
  },

  {
    id: 3,
    title: 'DTS ENDS',
    start: new Date(2016, 10, 6, 0, 0, 0),
    end: new Date(2016, 10, 13, 0, 0, 0),
  },

  {
    id: 4,
    title: 'Some Event',
    start: new Date(2015, 3, 9, 0, 0, 0),
    end: new Date(2015, 3, 10, 0, 0, 0),
  },
  {
    id: 5,
    title: 'Conference',
    start: new Date(2015, 3, 11),
    end: new Date(2015, 3, 13),
    desc: 'Big conference for important people',
  },
  {
    id: 6,
    title: 'Meeting',
    start: new Date(2015, 3, 12, 10, 30, 0, 0),
    end: new Date(2015, 3, 12, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
  },
  {
    id: 7,
    title: 'Lunch',
    start: new Date(2015, 3, 12, 12, 0, 0, 0),
    end: new Date(2015, 3, 12, 13, 0, 0, 0),
    desc: 'Power lunch',
  },
  {
    id: 8,
    title: 'Meeting',
    start: new Date(2015, 3, 12, 14, 0, 0, 0),
    end: new Date(2015, 3, 12, 15, 0, 0, 0),
  },
  {
    id: 9,
    title: 'Happy Hour',
    start: new Date(2015, 3, 12, 17, 0, 0, 0),
    end: new Date(2015, 3, 12, 17, 30, 0, 0),
    desc: 'Most important meal of the day',
  },
  {
    id: 10,
    title: 'Dinner',
    start: new Date(2015, 3, 12, 20, 0, 0, 0),
    end: new Date(2015, 3, 12, 21, 0, 0, 0),
  },
  {
    id: 11,
    title: 'Birthday Party',
    start: new Date(2015, 3, 13, 7, 0, 0),
    end: new Date(2015, 3, 13, 10, 30, 0),
  },
  {
    id: 12,
    title: 'Late Night Event',
    start: new Date(2015, 3, 17, 19, 30, 0),
    end: new Date(2015, 3, 18, 2, 0, 0),
  },
  {
    id: 12.5,
    title: 'Late Same Night Event',
    start: new Date(2015, 3, 17, 19, 30, 0),
    end: new Date(2015, 3, 17, 23, 30, 0),
  },
  {
    id: 13,
    title: 'Multi-day Event',
    start: new Date(2020, 3, 20, 19, 30, 0),
    end: new Date(2020, 3, 22, 2, 0, 0),
  },
  {
    id: 14,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
  {
    id: 15,
    title: 'Point in Time Event',
    start: now,
    end: now,
  },
  {
    id: 16,
    title: 'Video Record',
    start: new Date(2015, 3, 14, 15, 30, 0),
    end: new Date(2015, 3, 14, 19, 0, 0),
  },
  {
    id: 17,
    title: 'Dutch Song Producing',
    start: new Date(2015, 3, 14, 16, 30, 0),
    end: new Date(2015, 3, 14, 20, 0, 0),
  },
  {
    id: 18,
    title: 'Itaewon Halloween Meeting',
    start: new Date(2015, 3, 14, 16, 30, 0),
    end: new Date(2015, 3, 14, 17, 30, 0),
  },
  {
    id: 19,
    title: 'Online Coding Test',
    start: new Date(2015, 3, 14, 17, 30, 0),
    end: new Date(2015, 3, 14, 20, 30, 0),
  },
  {
    id: 20,
    title: 'An overlapped Event',
    start: new Date(2015, 3, 14, 17, 0, 0),
    end: new Date(2015, 3, 14, 18, 30, 0),
  },
  {
    id: 21,
    title: 'Phone Interview',
    start: new Date(2015, 3, 14, 17, 0, 0),
    end: new Date(2015, 3, 14, 18, 30, 0),
  },
  {
    id: 22,
    title: 'Cooking Class',
    start: new Date(2015, 3, 14, 17, 30, 0),
    end: new Date(2015, 3, 14, 19, 0, 0),
  },
  {
    id: 23,
    title: 'Go to the gym',
    start: new Date(2015, 3, 14, 18, 30, 0),
    end: new Date(2015, 3, 14, 20, 0, 0),
  },
]
export default class Timetable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      selecteddate: '',
      date: '',
      enddate: '',
      eventname: '',
      events: {
        title: " ",
        start: new Date(),
        end: new Date(),
      }
    }
    this.toggleModal = this.toggleModal.bind(this);
  }
  updatestate = event => {
    const { value } = event.target;
    this.setState({eventname: value});
    this.setState({
      events: {
        title: value,
        start: new Date(this.state.date),
        end: new Date(this.state.enddate),
      }
    })
  }
  onSlotChange(slotInfo) {
    this.setState({ selecteddate: moment(slotInfo.start.toLocaleString()).format("DD-MM-YYYY") })
    this.setState({ date: moment(slotInfo.start.toLocaleString()).format("YYYY-MM-DD HH:mm:ss") })
    this.setState({ enddate: moment(slotInfo.start.toLocaleString()).format("YYYY-MM-DD HH:mm:ss") })
    //alert(this.state.selecteddate)
    this.toggleModal();
  }
  toggleModal() {
    this.setState({ modalIsOpen: !this.state.modalIsOpen })
  }
  onEventClick(event) {
    alert(event) //Shows the event details provided while booking
  }
  onFormSubmit = (event) => {
    event.preventDefault();
    myEventsList.push(this.state.events);
    this.toggleModal();
    this.setState({ eventname: ''})
  }
  handleDateChange = (date) => {
    this.setState({
      events: {
        title: this.state.eventname,
        start: new Date(date),
        end: new Date(this.state.enddate),
      }
    })
    this.setState({ date: date })
  };
  handleEndDateChange = (date) => {
    this.setState({
      events: {
        title: this.state.eventname,
        start: new Date(this.state.date),
        end: new Date(date),
      }
    })
    this.setState({ enddate: date })
  };
  renderModal = () => {
    if (!this.state.modalIsOpen) return;
    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        toggle={this.toggleModal}
      >
        <ModalHeader toggle={this.toggleModal}>Add Event: {this.state.selecteddate}</ModalHeader>
        <Form onSubmit={this.onFormSubmit}>
          <FormGroup>
            <Label className="eventlabel" for="eventname">Event Name:</Label>
            <Input value={this.state.eventname} onChange={this.updatestate} className="eventinput" type="text" id="eventname"
              placeholder="Enter title for event..."></Input>
          </FormGroup>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDateTimePicker
              value={this.state.date}
              onChange={this.handleDateChange}
              label="Select Start Date/Time"
              minDate={new Date("2018-01-01T00:00")}
              format="yyyy/MM/dd hh:mm a"
            />
          </MuiPickersUtilsProvider>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDateTimePicker
              value={this.state.enddate}
              onChange={this.handleEndDateChange}
              label="Select End Date/Time"
              minDate={new Date("2018-01-01T00:00")}
              format="yyyy/MM/dd hh:mm a"
            />
          </MuiPickersUtilsProvider>
          <br />
          <Button color="info" value="submit" type="submit">Add</Button>
        </Form>
      </Modal>
    );
  }
  render() {
    return (
      <div className="wallpaper">
        <Calendar className="wallpaper"
          localizer={localizer}
          selectable={true}
          onSelectEvent={event => this.onEventClick(event)}
          onSelectSlot={(slotInfo) => this.onSlotChange(slotInfo)}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
        />
        {this.renderModal()}
      </div>
    )
  }
}