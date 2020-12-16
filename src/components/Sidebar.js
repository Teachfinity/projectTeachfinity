import React , {Component} from "react" ;



import { School,LocalLibrary} from '@material-ui/icons';
// import LocalLibrary from '@material-ui/icons/LocalLibrary';
// import School from '@material-ui/icons/School';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import DateRangeIcon from '@material-ui/icons/DateRange';

import "../Home.css";

import {Button,Typography,Grid} from '@material-ui/core';


class Sidebar extends Component {
    constructor(props){
        super(props) ;

    }

    render(){
        return(
         
           <div className="sidebar">
                
                <Button className="buttonss nav-link" href="/home/myclasses" ><School fontSize='large' className="iconss "></School><div className="text">My Classes</div></Button>
                
                <Button className="buttonss" href="/home/chat" >


                    <QuestionAnswerIcon fontSize='large' className="iconss" />
                     
                  <div className="text" >Chat </div> 
                </Button>
                
                <Button className="buttonss" href="/home/diary"><LocalLibrary fontSize='large' className="iconss"></LocalLibrary><div className="text">Diary</div></Button>
                <Button className="buttonss" href="/home/timetable"><DateRangeIcon fontSize='large' className="iconss"></DateRangeIcon><div className="text">Timetable</div></Button>
                <Button className="buttonss" href="/home/bookmarks"><BookmarksIcon fontSize='large' className="iconss center"></BookmarksIcon><div className="text">Bookmarks</div></Button>
           </div> 
               
      




        )
    }
}

export default Sidebar ;