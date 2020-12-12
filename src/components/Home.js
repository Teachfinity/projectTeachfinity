import React, { Component } from "react";
import Logo from "../logo.jpeg"
import { School, LocalLibrary, QuestionAnswer, Bookmarks, DateRange, AccountCircle, Notifications } from '@material-ui/icons';
import "../Home.css";
import Routes from "./Routes";
import $ from 'jquery';
import { Button, Typography, Grid } from '@material-ui/core';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isactive: false
        }
    }
    render() {
        return (
            <header>
                <div className="titlebar col-12">
                    <img className="logo" src={Logo} alt="main"></img>
                    <div className="title-contents">
                        <div><Notifications fontSize='large' className="notification"></Notifications></div>
                        <div><AccountCircle fontSize='large' className="icons"></AccountCircle></div>
                    </div>
                </div>
                <div className="main"><div className="sidebar">

                    <div><Button className={this.state.isActive ? "buttons" : "active"} onClick={()=>this.setState({isactive: !this.state.isactive})}>
                        <School fontSize='large' className="icons center"></School><div className="text">My Classes</div>
                        </Button></div>
                    <div>
                        <Button className="buttons" href="/chat"  >

                            <QuestionAnswer fontSize='large' className="icons" />

                            <div className="text" >Chat </div>
                        </Button>
                    </div>
                    <div><Button className="buttons" href="/diary"><LocalLibrary fontSize='large' className="icons"></LocalLibrary><div className="text">Diary</div></Button></div>
                    <div><Button className="buttons" href="/timetable"><DateRange fontSize='large' className="icons"></DateRange><div className="text">Timetable</div></Button></div>
                    <div><Button className="buttons" href="/bookmarks"><Bookmarks fontSize='large' className="icons center"></Bookmarks><div className="text">Bookmarks</div></Button></div>
                </div>
                    <div className="center">
                        <Routes></Routes>
                    </div></div>
            </header>
        );
    }
}

export default Home;