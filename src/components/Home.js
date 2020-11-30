import React, { Component } from "react";
import Logo from "../logo.jpeg"
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import SchoolIcon from '@material-ui/icons/School';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import GroupIcon from '@material-ui/icons/Group';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import "../Home.css";
import Routes from "./Routes";

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {   
        return (
            <header>
                <div className="titlebar">
                    <img className="logo" src={Logo} alt="main"></img>
                    <div className="title-contents">
                        <div><NotificationsIcon fontSize='large' className="notification"></NotificationsIcon></div>
                        <div><AccountCircleIcon fontSize='large' className="icons"></AccountCircleIcon></div>
                    </div>
                </div>
                <div className="main"><div className="sidebar">
                    <div><button className="active"><SchoolIcon fontSize='large' className="iactive"></SchoolIcon><div className="tactive">My Classes</div></button></div>
                    <div>
                        {/* <button onClick={()=>this.props.history.push("/chat")} className="buttons"> */}
                        <a href="/chat" className="buttons">
                            <QuestionAnswerIcon fontSize='large' className="icons" />
                                
                                <div className="text">Chat</div>
                                </a>
                                </div>
                    <div><button className="buttons"><LocalLibraryIcon fontSize='large' className="icons"></LocalLibraryIcon><div className="text">Diary</div></button></div>
                    <div><button className="buttons"><DateRangeIcon fontSize='large' className="icons"></DateRangeIcon><div className="text">Timetable</div></button></div>
                    <div><button className="buttons"><BookmarksIcon fontSize='large' className="icons"></BookmarksIcon><div className="text">Bookmarks</div></button></div>
                </div>
                <div className="center">
                    <Routes></Routes>
                </div></div>
            </header>
        );
    }
}

export default Home;