import React, { Component } from "react" ;
import {Form, Label} from "reactstrap" ;
import {TextField, Checkbox} from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons" ;
import "../Login.css";

class Login extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <header className="background">
                <header className="background-cover">
                <div className="container">
                    <Form>
                        <br></br><h1>Login</h1><br></br>
                        <div className="textfields">
                            <TextField
                            required
                            label="Email"
                            placeholder="Please enter your Email Address"
                            className="textfields"
                            />
                        </div>
                        <div className="textfields">
                            <TextField
                            required
                            label="Password"
                            placeholder="Please enter your Password"
                            type="password"
                            className="textfields"
                            />
                        </div>
                        <div class="row">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        color='primary'
                                    />
                                }
                                label="Remember Me?"
                            />
                            <Label><b>Forgot Password?</b></Label>    
                        </div>
                        <div><button class="login-button">Log in</button></div>
                        <br></br><h5>OR</h5>
                        <div><FacebookLoginButton></FacebookLoginButton></div>
                        <div><GoogleLoginButton></GoogleLoginButton></div>
                        <div>
                            <br></br><h6>Don't have an account?</h6>
                            <h7>Sign up</h7>
                        </div>
                    </Form>
                </div>
                </header>
            </header>
        );
    }
}

export default Login ;