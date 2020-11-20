import React, { Component } from "react" ;
import {Form} from "reactstrap" ;
import {TextField} from "@material-ui/core";
import "../Signup.css";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            nameRegex : /^[a-zA-Z\- ]{3,20}$/ ,
            passwordRegex : /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
            user: {
                 firstname: "" ,
                 lastname: "" ,
                 email: "",
                 password: "" ,
                 confirmpassword: ""
             }
        }
    }
    componentDidMount(){
        ValidatorForm.addValidationRule('nameLength' , (value) => {
            if ( this.state.nameRegex.test(value) ){
                return true 
                
            }
            else {
                return false
            }
        });
        ValidatorForm.addValidationRule('newPassword' , (value) => {
            if(this.state.passwordRegex.test(value)){
                return true;
            }
            else{
                return false;
            }
        });
        ValidatorForm.addValidationRule('confirmPassword' , (value) => {
            if (value !== this.state.user.password) {
                return false;
            }
            return true;
        });
    }
    componentWillUnmount() {
        
        ValidatorForm.removeValidationRule('nameLength');
        ValidatorForm.removeValidationRule('newPassword');
        ValidatorForm.removeValidationRule('confirmPassword');  
    }
    
    handleFirstNameChange = (event) => {
        const { user } = this.state;
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }
    handleLastNameChange = (event) => {
        const { user } = this.state;
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }
    handleEmailChange = (event) => {
        const { user } = this.state;
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }
    handlePasswordChange = (event) => {
        const { user } = this.state;
        user[event.target.name] = event.target.value;
        this.setState({ user });
      
    }
    handleConfirmPassword = (event) => {
        const { user } = this.state;
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }
    handleSubmit = () => {
        alert(this.state.user.firstname + " " + this.state.user.lastname);
    }

    render(){
        return(
            <header className="background">
                <header className="background-cover">
                <div className="container">
                    <ValidatorForm>
                        <br></br><h1>Signup</h1><br></br>
                        <div className="textfields">
                            <TextValidator
                             label= "First Name"
                             name="firstname"
                             onChange={this.handleFirstNameChange}
                             value={this.state.user.firstname}
                             validators={['required' , 'nameLength']}
                             variant="outlined"
                             errorMessages={['This is a required Field', 'Name should be atleast 3 and less than 21 characters long']}
                             placeholder="First Name"
                             className="textfields"
                            />
                        </div>
                        <div className="textfields">
                            <TextValidator
                            label= "Last Name"
                            name = "lastname"
                            onChange={this.handleLastNameChange}
                            value={this.state.user.lastname}
                            validators={['required','nameLength']}
                            errorMessages={['This is required Field','Name should be atleast 3 and less than 21 characters long']}
                            placeholder="Last Name"
                            variant="outlined"
                            className="textfields"
                            />
                        </div>
                        <div className="textfields">
                            <TextValidator
                            label= "Email"
                            name=  "email"
                            onChange = {this.handleEmailChange}
                            value={this.state.user.email}
                            validators={['required' , 'isEmail']}
                            errorMessages={['this is a required field' , 'email is not valid']}
                            placeholder="Please enter your Email Address"
                            variant="outlined"
                            className="textfields"
                            />
                        </div>
                        <div className="textfields">
                            <TextValidator
                            label= "Password"
                            placeholder="Password"
                            type="password"
                            name="password"
                            onChange={this.handlePasswordChange}
                            value={this.state.user.password}
                            validators={['required' , 'newPassword']}
                            errorMessages={['This is a required field' , 'Password error']}
                            variant='outlined'
                            className="textfields"
                            />
                        </div>
                        <div className="textfields">
                            <TextValidator
                            name="confirmpassword"
                            label="Confirm Password"
                            type="password"
                      
                            placeholder="Confirm Password"
                            
                            variant="outlined"
                            onChange={this.handleConfirmPassword}
                            value={this.state.user.confirmpassword}
                            validators={['required' , 'confirmPassword']}
                            errorMessages={['this is required field' , 'The Password and Confirm Password fields do not match']}
                            className="textfields"
                            />
                        </div>
                        <div><button class="login-button" type="submit" onClick={this.handleSubmit}>Register</button></div>
                    </ValidatorForm>
                </div>
                </header>
            </header>
        );
    }
}

export default Signup ;