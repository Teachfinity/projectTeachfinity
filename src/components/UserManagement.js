import React, { Component } from "react" ;
import {Label , Button, Row  } from "reactstrap" ;
import { CommonLoading } from 'react-loadingg';
import {TextField, Checkbox} from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons" ;
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loggedUser, loginUser } from "../redux/auth/authAction";
import Google from "./Google";

import "../Login.css";

import {Link } from "react-router-dom" ;




const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
}


class Login extends Component {
    constructor(props){
        super(props);

        this.state = { 
            emailRegex : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            email: '' ,
            password: '' ,
            errors: {
                email : ''
            }
            , loading : false  

        }

        this.informParent = this.informParent.bind(this)
    }
    componentDidMount() {
        this.setState({ buttonText: "Register" })

        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/Connect");
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/home"); // push user to dashboard when they login
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors,
            });
        }
    }




    
    
    
    
    
    handleChange = (event) => {
        const {name , value} = event.target ;
        let errors = this.state.errors ;
        if(name=== "email"){
            this.setState({email: value}) ;
        }
        else if(name === "password"){
            this.setState({password: value}) ;
        }

        switch(name) {
            case 'email' :
                errors.email = this.state.emailRegex.test(value) && this.state.email.length > 0 
          ? ''
          : 'Email is not valid!';
      break;
      default : ;
      break ;
        }
        this.setState({errors}) ;

    }

       informParent = response => {
        //this.props.history.push('/dashboard');
        console.log("INFORM PARENT" + response)
        this.props.loggedUser(response.data)
    };


    handleSubmit = (event) => {
       event.preventDefault() ;

       if(validateForm(this.state.errors)){
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
           this.setState({loading: true})
         
           this.props.loginUser(userData); 
 }
       else{
           alert("Please remove errors before submission") ;
       }
        
    }
    render(){

        const errors = this.state.errors ;
        return(
            <header className="background">
                <header className="background-cover">
                <div className="login-container2">    
                <Row>
                <div>
                <div className="login-container1">
                    
                       
                    <ValidatorForm ref="form"  >
                    { this.state.loading ? <CommonLoading /> : null }
                        <br></br><h1>Login</h1><br></br>
                        <div className="textfields form-group" >
                            <TextValidator
                            label="Email"
                            name="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                           placeholder="Please enter your Email Address"
                            className="textfields"
                            
                            />
                            {errors.email.length > 0 && <span className='error'>{errors.email}</span>}
                        </div>
                        <div className="textfields">
                            <TextValidator
                            
                            label="Password"
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.password}
                            placeholder="Please enter your Password"
                            type="password"
                            className="textfields"
                           />
                        </div>
                        <div className="rowin">
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
                        <Button className="login-button" type="submit" onClick={this.handleSubmit}>Log in</Button><br></br>
                        <br></br><h5>OR</h5>
                        <div><FacebookLoginButton></FacebookLoginButton></div>
                        <Google informParent={this.informParent} />
                        

                            <div>
                                <Link className="nav-link" to='/signup' >
                                    <br></br><h6>Don't have an account?</h6>
                                    <h7 >Sign up</h7>
                                </Link>


                            </div>

                    </ValidatorForm>
                            </div>


                        </div>
                      

                        <div>
                            <div className="login-container3">
                               
                            </div>
                        </div>
                    </Row>
                    </div>
                </header>
             
            </header>
        );
    }
}





Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
})

const mapDispatchToProps = {  
    loginUser, loggedUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login) ;