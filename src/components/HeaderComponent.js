import React , {Component} from "react" ;
import {Jumbotron, Navbar} from "reactstrap"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Logo from "../logo.jpeg" ;
export default class Header extends Component {
    constructor(props){
        super(props);

    }
    render(){
        return(
            <header>
                <div className="titlebar col-12">
                <img className="logo" src={Logo} alt="main"></img>
                <div className="title-contents">
                    <div><NotificationsIcon fontSize='large' className="notification"></NotificationsIcon></div>
                    <div><AccountCircleIcon fontSize='large' className="icons"></AccountCircleIcon></div>
                </div>
            </div>
            </header>
        )
    }
}

