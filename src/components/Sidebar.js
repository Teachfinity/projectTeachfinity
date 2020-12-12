import React , {Component} from "react" ;


import Logo from "../logo.jpeg"
import { School,LocalLibrary} from '@material-ui/icons';
// import LocalLibrary from '@material-ui/icons/LocalLibrary';
// import School from '@material-ui/icons/School';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MyClasses from "./MyClasses" ;
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import GroupIcon from '@material-ui/icons/Group';
import { Link , NavLink} from 'react-router-dom';
import "../Home.css";
import Routes from "./Routes";
import {Button,Typography,Grid} from '@material-ui/core';


class Sidebar extends Component {
    constructor(props){
        super(props) ;

    }

    render(){
        return(
         
           <div className="main"><div className="sidebar">
                
                <Button className="buttons nav-link" href="/home/myclasses" ><School fontSize='large' className="icons center"></School><div className="text">My Classes</div></Button>
                
                <Button className="buttons" href="/home/chat" >


                    <QuestionAnswerIcon fontSize='large' className="icons" />
                     
                  <div className="text" >Chat </div> 
                </Button>
                
                <div><Button className="buttons" href="/home/diary"><LocalLibrary fontSize='large' className="icons"></LocalLibrary><div className="text">Diary</div></Button></div>
                <div><Button className="buttons" href="/home/timetable"><DateRangeIcon fontSize='large' className="icons"></DateRangeIcon><div className="text">Timetable</div></Button></div>
                <div><Button className="buttons" href="/home/bookmarks"><BookmarksIcon fontSize='large' className="icons center"></BookmarksIcon><div className="text">Bookmarks</div></Button></div>
           </div> 
           </div> 
               
      




        )
    }
}

export default Sidebar ;