import React , {Component} from "react" ;
import {Jumbotron, Navbar} from "reactstrap"
import IconButton from 'material-ui/IconButton';
import  {FaBell} from "react-icons/fa" ;
import  {MdAccountCircle} from "react-icons/md" ;
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Logo from "../logo.jpeg" ;
import  "../Home.css" ;

const styles = {

    largeIcon: {
      width: 60,
      height: 60,
    },
  
  };
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
                
                <div><FaBell className="notification"></FaBell></div>
                <div><MdAccountCircle  className="iconss"/></div>
                
                </div>
            </div>
            </header>
        )
    }
}

