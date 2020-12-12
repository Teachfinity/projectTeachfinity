import React, { Component } from "react";

import {Row} from "reactstrap" ;
import { BrowserRouter, Switch , Route , Redirect } from 'react-router-dom';
import "../Home.css";
import Sidebar from "./Sidebar" ;
import Header from "./HeaderComponent" ;
import MyClasses from "./MyClasses" ;
import Chat from "./Chat" ;
import Diary from "./Diary" ;
import Timetable from "./Timetable" ;
import Bookmarks from "./Bookmarks" ;
function Home() {
    
    return (
        <div >
            <header>
            <Header />
            </header>
            <Row>
            <div className="col-1">
            <Sidebar />
            </div>
            <div className="col-11">
               <BrowserRouter>
               <Switch>
                   <Route exact path="/home/myclasses" component={MyClasses} />
                   <Route exact path="/home/chat" component={Chat} />
                   <Route exact path="/home/diary" component={Diary} />
                   <Route exact path="/home/timetable" component={Timetable} />
                   <Route exact path="/home/bookmarks" component={Bookmarks} />
                   <Redirect to="/home/myclasses"/>
               </Switch>
               </BrowserRouter>
            </div>
            </Row>
        </div>
        
    );
    }

export default Home;