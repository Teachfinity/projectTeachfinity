import React , {Component} from "react" ;
import {Jumbotron, Navbar} from "reactstrap"


export default class Header extends Component {
    constructor(props){
        super(props);

    }
    render(){
        return(
            
                <Navbar dark >
                    <div className=" center conatiner">

                    TEACHFINITY
                   
                    </div>
                </Navbar>
            
        )
    }
}