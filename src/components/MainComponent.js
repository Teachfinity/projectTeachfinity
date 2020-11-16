import React, { Component } from "react" ;
import Header from "./HeaderComponent" ;
import Login from './UserManagement' ;
import Signup from "./Signup" ;
import {Switch , Route , Redirect} from "react-router-dom"

class Main extends Component {
    constructor(props){
        super(props);


    }
    
    render(){
        return(
            <div>
                <Header />
                <Switch>

               
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Redirect to="/login" />
                

                </Switch>

                        


            </div>



        );
    }
}

export default Main ;