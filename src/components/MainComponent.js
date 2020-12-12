import React, { Component } from "react" ;
import Header from "./HeaderComponent" ;
import Login from './UserManagement' ;
import Home from './Home' ;
import Signup from "./Signup" ;
import Sidebar from "./Sidebar" ;
import {Route , Switch , Redirect, withRouter , BrowserRouter } from "react-router-dom"
import MyClasses from "./MyClasses";


class Main extends Component {
    constructor(props){
        super(props);


    }
    
    render(){
        return(

             <Switch>
                 <Route  path='/login' component={Login} />
                 <Route  path='/signup' component={Signup} />
                 <Route path="/home" component={Home} />
                 <Route path="/sidebar" component={Sidebar} />
                 <Redirect to="/login" />
             </Switch>
            
        );
    }
}

export default Main ;