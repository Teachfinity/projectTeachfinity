import React, { Component } from "react";
import Logo from "../logo.jpeg"
import { School,LocalLibrary} from '@material-ui/icons';
// import LocalLibrary from '@material-ui/icons/LocalLibrary';
// import School from '@material-ui/icons/School';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import GroupIcon from '@material-ui/icons/Group';
import { useHistory } from 'react-router-dom';
import "../Home.css";
import Routes from "./Routes";
import {Button,Typography,Grid} from '@material-ui/core';

function Home() {
    const history = useHistory();
    const goto = () => {
        history.push("/diary");
    };
    return (
        <header>
            <div className="titlebar col-12">
                <img className="logo" src={Logo} alt="main"></img>
                <div className="title-contents">
                    <div><NotificationsIcon fontSize='large' className="notification"></NotificationsIcon></div>
                    <div><AccountCircleIcon fontSize='large' className="icons"></AccountCircleIcon></div>
                </div>
            </div>
            <div className="main"><div className="sidebar">
                
                <div><Button className="buttons" href="/" ><School fontSize='large' className="icons center"></School><div className="text">My Classes</div></Button></div>
                <div>
                    <Button className="buttons" href="/chat"  >
                        
                    <QuestionAnswerIcon fontSize='large' className="icons" />
                    
                    <div className="text" >Chat </div>
                    </Button>
                </div>
                <div><Button className="buttons" href="/diary"><LocalLibrary fontSize='large' className="icons"></LocalLibrary><div className="text">Diary</div></Button></div>
                <div><Button className="buttons" href="/timetable"><DateRangeIcon fontSize='large' className="icons"></DateRangeIcon><div className="text">Timetable</div></Button></div>
                <div><Button className="buttons" href="/bookmarks"><BookmarksIcon fontSize='large' className="icons center"></BookmarksIcon><div className="text">Bookmarks</div></Button></div>
            </div>
                <div className="center">
                    <Routes></Routes>
                </div></div>
        </header>
    );
}

export default Home;