import React, { Component } from "react" ;
import {Card, CardImg , CardBody , CardTitle, CardText,CardSubtitle, Button, Row , Form , FormGroup , Input ,
  Modal, ModalBody , ModalHeader , Label} from 'reactstrap' ;
  import { Link} from 'react-router-dom';
  import ClassImg from "../images/new-class-logo.png" ;
import ClassMainScreen from "./ClassMainScreen";
import "../App.css" ;


class ClassList extends Component {
    constructor(props){
        super(props) ;


    }
    render(){
       if(this.props !== "" && this.props.description !== ""){
        return(
            <div className="cardhandle">
            <Card className="cardcontainer">
            
             <Link  to={'/home/myclasses/classId'}  >
          <CardImg  src={ClassImg} className="classcardimg"/>
          <br/>
          <br />
                    <CardTitle tag="h5" > {this.props.name}</CardTitle>
                    <CardSubtitle >{this.props.description}</CardSubtitle>
                    </Link>

        </Card >
        </div>
            );   
       
       }
       else{
        return(
            <div className="cardhandle">
                No Classes to show Create or join a new class
            </div>
        )
           
       }

    }

}


export default ClassList ;