import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core";
import { AddCircle, Edit, Cancel } from '@material-ui/icons';
import "../Diary.css";

class Diary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      task: [],
      button: 'Add'
    }
  }
  updatestate = event => {
    const { value } = event.target;
    this.setState({ input: value })
  }
  addtask = () => {
    if (this.state.button === 'Update') {
      this.setState({ task: [this.state.input] })
      this.setState({ input: '' })
      this.setState({ button: 'Add' })
    }
    else if (this.state.input !== '') {
      this.setState({ task: [...this.state.task, this.state.input] })
      this.setState({ input: '' })
    }
  }
  render() {
    return (
      <header className="background">
        <header className="background-cover">
          <div className="container">
            <br></br><h1>My Diary</h1><br></br>
            <div>
              <TextField className="textfield" defaultValue={this.state.input} onChange={this.updatestate} label="Todo" variant="outlined" placeholder="add task..."></TextField>
              <Button onClick={() => this.addtask()} className="button"><AddCircle className="addicon"></AddCircle></Button>
            </div>
            <div>
              {this.state.task.map((task, index) => (
                <div className="TODO">
                  {task}
                  <div className="todoicons">
                    <Edit></Edit>
                    <Cancel></Cancel>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </header>
      </header>
    )
  }
}

export default Diary;