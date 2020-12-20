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
      button: 'Add',
      key: ''
    }
  }
  updatestate = event => {
    const {value}  = event.target;
    this.setState({ input: value })
  }
  addtask = () => {
    if (this.state.button === 'Update') {
      alert(this.state.key);
      const t = this.state.task
      const update = t.map(taski=>{
        if(taski===this.state.key){
          return taski = this.state.input
        }
      })
      alert(update)
      this.setState({task: [...this.state.task, update]})
      this.setState({button: "Add"})
      this.setState({input: ""})
    }
    else if (this.state.input !== '') {
      this.setState({ task: [...this.state.task, this.state.input] })
      this.setState({ input: '' })
    }
  }
  removetask = (taskkey) =>{
    const remove = this.state.task.filter(taskd =>{
      return taskd!==taskkey
    });
    this.setState({task: [...remove]})
  }
  render() {
    return (
      <header className="bg">
        <header className="bg-cover">
          <div className="box">
            <br></br><h1>My Diary</h1><br></br>
            <div>
              <TextField className="textfield" value={this.state.input} onChange={this.updatestate} label="Todo" variant="outlined" placeholder="add task..."></TextField>
              <Button onClick={() => this.addtask()} className="button"><AddCircle className="addicon"></AddCircle></Button>
            </div>
            <div>
              {this.state.task.map((task, index) => (
                <div className="TODO">
                  {task}
                  <div className="todoicons">
                  <Button onClick={() => this.setState({input: task, button: "Update", key: task})} className="button"><Edit></Edit></Button>
                  <Button onClick={() => this.removetask(task)} className="button"><Cancel></Cancel></Button>
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