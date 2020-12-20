import React, { Component } from "react";
import {Card, CardImg , CardBody , CardTitle, CardText,CardSubtitle, Button} from 'reactstrap' ;
   
import ClassImg from "../images/new-class-logo.png" ;
import ContentLoader from "react-content-loader" ;
import MyLoader from "./content-loader" ;
import "../ClassMain.css" ;
import Jitsi from 'react-jitsi'
import {Route, Switch, Redirect , BrowserRouter , Link} from 'react-router-dom'
import ClassMeeting from "./classMeeting";
import classAnnouncements from "./classAnnouncements" ;

class ClassMainScreen extends Component {
    constructor(props){
        super(props) ;
    }
    render(){
        return(
            <div className="col-12">
                <div className="row">
                    <div className="col-3 container-side">

                        <Card className="titlecardcontainer">
                            <CardImg src={ClassImg} className="classcardimg" />
                            <br />
                            <br />
                            <CardTitle tag="h3" > Class Title</CardTitle>
                            <CardSubtitle >Class Description here (optional)</CardSubtitle>

                        </Card >
                        <br />
                        <br />
                        <Link className="sidebuttons" to="/home/myclasses/classId/announcements" >Announcements</Link>
                     
                        <Link className="sidebuttons" to="/home/myclasses/classId/meeting">Meetings</Link>
                        <Link className="sidebuttons">Chat Area</Link>


                    </div>
                
                    
                     
                    <div className="col-9 container-main">
                        <BrowserRouter>
                        <Switch>
                            <Route exact path='/home/myclasses/classId/meeting' component={ClassMeeting} />
                            <Route exact  path="/home/myclasses/classId/announcements" component={classAnnouncements} />
                         
                            <Redirect to='/home/myclasses/classId/announcements'/>
                            
                        </Switch>
                        </BrowserRouter>
                    </div>
                    </div>           
            </div>
        )
    }
}

export default ClassMainScreen ;