import React, { Component } from "react" ;
import Header from "./HeaderComponent" ;
import Login from './UserManagement' ;
import Home from './Home' ;
import Signup from "./Signup" ;
import {Router} from "react-router-dom"

class Main extends Component {
    constructor(props){
        super(props);


    }
    
    render(){
        return(
            <Home></Home>
        );
    }
}

export default Main ;