import React, { Component } from "react" ;
import {Form} from "reactstrap" ;
import {TextField} from "@material-ui/core";
import "../Signup.css";

class Signup extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <header className="background">
                <header className="background-cover">
                <div className="container">
                    <Form>
                        <br></br><h1>Signup</h1><br></br>
                        <div className="textfields">
                            <TextField
                            required
                            label="First Name"
                            placeholder="First Name"
                            variant="outlined"
                            className="textfields"
                            />
                        </div>
                        <div className="textfields">
                            <TextField
                            required
                            label="Last Name"
                            placeholder="Last Name"
                            variant="outlined"
                            className="textfields"
                            />
                        </div>
                        <div className="textfields">
                            <TextField
                            required
                            label="Email"
                            placeholder="Please enter your Email Address"
                            variant="outlined"
                            className="textfields"
                            />
                        </div>
                        <div className="textfields">
                            <TextField
                            required
                            label="Password"
                            placeholder="Password"
                            type="password"
                            variant="outlined"
                            className="textfields"
                            />
                        </div>
                        <div className="textfields">
                            <TextField
                            required
                            label="Confirm Password"
                            placeholder="Confirm Password"
                            type="password"
                            variant="outlined"
                            className="textfields"
                            />
                        </div>
                        <div><button class="login-button">Register</button></div>
                    </Form>
                </div>
                </header>
            </header>
        );
    }
}

export default Signup ;