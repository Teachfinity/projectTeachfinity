import React, { Component } from "react" ;
import {Label , Button, Form } from "reactstrap" ;
import {TextField, Checkbox} from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons" ;
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


import "../Login.css";
import Signup from "./Signup";
import {NavLink} from "react-router-dom"



class Login extends Component {
    constructor(props){
        super(props);
        this.state = { 
            email: '' ,
            password: '' ,
            error: true 
        }
    }

    handleEmailChange = (event) => {
        const email = event.target.value;
        this.setState({ email : email });

        
    }
    handlePasswordChange = (event) => {
        const pass = event.target.value;
        this.setState({password: pass});
    }
    handleSubmit = () => {
        if(this.state.email != "" && this.state.password != ""){
            alert("Email is " + this.state.email + "password is : " +  this.state.password) ;
        }
        
    }
    render(){

       
        return(
            <header className="background">
                <header className="background-cover">
                <div className="container">
                    <ValidatorForm ref="form"  >
                        <br></br><h1>Login</h1><br></br>
                        <div className="textfields form-group" >
                            <TextValidator
                            
                            label="Email"
                            name="email"
                            onChange={this.handleEmailChange}
                            value={this.state.email}
                            validators={['required' , 'isEmail']}
                            errorMessages={['this is a required field' , 'email is not valid']}
                            placeholder="Please enter your Email Address"
                            className="textfields"
                            
                            />
                        </div>
                        <div className="textfields">
                            <TextValidator
                            
                            label="Password"
                            name="password"
                            onChange={this.handlePasswordChange}
                            value={this.state.password}
                            placeholder="Please enter your Password"
                            type="password"
                            className="textfields"
                            validators={['required']}
                    errorMessages={['this field is required']}
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
                        <Button className="login-button" type="submit" onClick={this.handleSubmit}>Log in</Button>
                        <br></br><h5>OR</h5>
                        <div><FacebookLoginButton></FacebookLoginButton></div>
                        <div><GoogleLoginButton></GoogleLoginButton></div>
                        

                            <div>
                                <NavLink className="nav-link" to="/signup" >
                                    <br></br><h6>Don't have an account?</h6>
                                    <h7 >Sign up</h7>

                                </NavLink>


                            </div>

                    </ValidatorForm>
                </div>
                </header>
            </header>
        );
    }
}

export default Login ;