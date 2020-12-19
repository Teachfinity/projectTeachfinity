import React, { Component } from "react";
import {Card, CardImg , CardBody , CardTitle, CardText,CardSubtitle, Button} from 'reactstrap' ;
    import { Link} from 'react-router-dom';
import ClassImg from "../images/new-class-logo.png" ;
import ContentLoader from "react-content-loader" ;
import MyLoader from "./content-loader" ;
import "../ClassMain.css" ;

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
                        <div className="sidebuttons">Announcements</div>
                     
                        <div className="sidebuttons">Meetings</div>
                        <div className="sidebuttons">Chat Area</div>


                    </div>
                    
                    
                     
                    <div className="col-9 container-main">
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />

                    </div>
                    </div>           
            </div>
        )
    }
}

export default ClassMainScreen ;