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
import ClassMainScreen from "./ClassMainScreen" ;
function Home() {
    
    return (
        <div >
        
            <Header className="titlebar" />
            
            <div className="main">
            <div>
            <Sidebar />
            </div>

            <div className="center">
               
               <BrowserRouter>
               <Switch>
                   <Route  path="/home/myclasses/classId"  component={ClassMainScreen} />
                   <Route  path="/home/myclasses" component={MyClasses} />
                   {/* Below the class id will be sent to open specific class but rn its a sample flow to show that*/}
                 
                   <Route exact path="/home/chat" component={Chat} />
                   <Route exact path="/home/diary" component={Diary} />
                   <Route exact path="/home/timetable" component={Timetable} />
                   <Route exact path="/home/bookmarks" component={Bookmarks} />
                   <Redirect to="/home/myclasses"/>
               </Switch>
               </BrowserRouter>
            </div>
            </div>
        </div>
    );
    }

export default Home;