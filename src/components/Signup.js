import React, { Component } from "react" ;
import { CommonLoading } from 'react-loadingg';
import axios from "axios" ;
import {Row} from "reactstrap" ;
import {TextField} from "@material-ui/core";
import "../Signup.css";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
}
class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            nameRegex : /^[a-zA-Z\- ]{3,20}$/ ,
            passwordRegex : /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
            validEmailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
           , loading: false ,
           errors : {
               firstname : '' ,
               lastname : '' ,
               email : '' ,
               password : '' ,
               confirmpassword: ''
           } ,
            
            user: {
                 firstname: "" ,
                 lastname: "" ,
                 email: "",
                 password: "" ,
                 confirmpassword: ""
             }
        }
    }
    
    
    


    handleChange = (event) => {
        event.preventDefault() ;
        
  const { name , value } = event.target;
  let errors = this.state.errors;

  const {user} = this.state;
  user[event.target.name] = event.target.value ;
  this.setState({user}) ;

  switch (name) {
    case 'firstname': 
      errors.firstname = 
        this.state.nameRegex.test(value) && this.state.user.firstname.length >0 
        ? '' : 'Name must be atleast 3 characters long' ;
      break;

    case 'lastname':
          errors.lastname =
              this.state.nameRegex.test(value) && this.state.user.lastname.length > 0
               ? '' : ' Name must be atleast 3 characters long!' ;
    break;
    case 'email': 
      errors.email = 
       this.state.validEmailRegex.test(value) && this.state.user.email.length > 0 
          ? ''
          : 'Email is not valid!';
      break;
    case 'password': 
      errors.password = 
        this.state.passwordRegex.test(value) && this.state.user.password.length > 0
          ? "" : 'Password must be 8 characters long with atleast one Uppercase and numeric character !'
          ;
      break;
    case 'confirmpassword': 
      errors.confirmpassword = 
        value !== this.state.user.password  && this.state.user.confirmpassword.length > 0 
          ? 'password and Confirm password fields donot match' : ''
          ;
      break;
    default:
      break;
  }

  this.setState({errors})
  
}

    
 handleSubmit = (event) => {
        event.preventDefault() ;

        if(validateForm(this.state.errors)){
             const newuser= {
            "name" :  this.state.user.firstname + " " + this.state.user.lastname ,
            "email" : this.state.user.email ,
            "password" : this.state.user.password
        }

        
            this.setState({ loading: true });
            axios.post(`http://localhost:5000/api/user/register`, newuser)
                .then(res => {
                    this.setState({ loading: false });
                    console.log(res);
                    alert("Registered Successfully" + res.status);
                })
                .catch(error => {
                    this.setState({ loading: false });
                    alert(error.message);
                })    


        }
        else {

            alert("Please remove the errors in form before submitting") ;
        }
}

    render(){
        const errors = this.state.errors ;
        return(
            <header className="background">
                <header className="background-cover">
                <div className="container1">
                    <Row>
                        <div>
                        <div className="container2">
                            {this.state.loading ? <CommonLoading /> : null}
                            <ValidatorForm>
                                <br></br><h1>Signup</h1><br></br>
                                <div className="textfields">
                                    <TextValidator
                                        label="First Name"
                                        name="firstname"
                                        onChange={this.handleChange}
                                        value={this.state.user.firstname}
                                        variant="outlined"

                                        placeholder="First Name"
                                        className="textfields"
                                    />
                                    {errors.firstname.length > 0 && <span className='error'>{errors.firstname}</span>}
                                </div>
                                <div className="textfields">
                                    <TextValidator
                                        label="Last Name"
                                        name="lastname"
                                        onChange={this.handleChange}

                                        value={this.state.user.lastname}
                                        placeholder="Last Name"
                                        variant="outlined"
                                        className="textfields"
                                    />
                                    {errors.lastname.length > 0 && <span className='error'>{errors.lastname}</span>}
                                </div>
                                <div className="textfields">
                                    <TextValidator
                                        label="Email"
                                        name="email"
                                        onChange={this.handleChange}
                                        value={this.state.user.email}
                                        placeholder="Please enter your Email Address"
                                        variant="outlined"
                                        className="textfields"
                                    />
                                    {errors.email.length > 0 && <span className='error'>{errors.email}</span>}
                                </div>
                                <div className="textfields">
                                    <TextValidator
                                        label="Password"
                                        placeholder="Password"
                                        type="password"
                                        name="password"
                                        onChange={this.handleChange}
                                        value={this.state.user.password}
                                        variant='outlined'
                                        className="textfields"
                                    />
                                    {errors.password.length > 0 && <span className='error'>{errors.password}</span>}
                                </div>
                                <div className="textfields">
                                    <TextValidator
                                        name="confirmpassword"
                                        label="Confirm Password"
                                        type="password"
                                        placeholder="Confirm Password"
                                        variant="outlined"
                                        onChange={this.handleChange}
                                        value={this.state.user.confirmpassword}
                                        className="textfields"
                                    />
                                    {errors.confirmpassword.length > 0 && <span className='error'>{errors.confirmpassword}</span>}
                                </div>
                                <div><button class="login-button" type="submit" onClick={this.handleSubmit}>Register</button></div>

                            </ValidatorForm>
                    </div>
                    </div>

                    <div>
                       <div className="container3">
                     
                       </div>
                    </div>
                    </Row>
                </div>
                </header>
            </header>
        );
    }
}

export default Signup ;