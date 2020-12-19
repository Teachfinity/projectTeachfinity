import React, { Component } from "react" ;
import {Card, CardImg , CardBody , CardTitle, CardText,CardSubtitle, Button, Row , Form , FormGroup , Input ,
  Modal, ModalBody , ModalHeader , Label} from 'reactstrap' ;

import CreateClassLogo from "../images/createclass.png"
import JoinClassLogo from "../images/joinclass.png"
import "../App.css"
class MyClasses extends Component {
  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false ,
      className: "" ,
      description: ""
    }
    this.toggleModal = this.toggleModal.bind(this) ;
    this.handleSubmit = this.handleSubmit.bind(this) ;

  }
  toggleModal = () =>{
    this.setState({isModalOpen: !this.state.isModalOpen})
}
/* handleInputChange(event) {
  const target = event.target;
  const value = target.value;
  const name = target.name;
 
this.setState({
    [name] : value
  });


} */
handleSubmit = (event) => {
  this.toggleModal();

  alert("Class name: " + this.coursename.value + "  Description:  " + this.description.value);
  event.preventDefault();
}
  render(){
  return (
       <div className="col-12  m-1">

        <div className="center">
        
          <div className="cardhandle " >
          <Card className="cardcontainer" >
                    <CardImg className="classcardimg " src={CreateClassLogo} />
                    <CardBody>
                        <CardTitle tag="h5" >
                          
                           Create Class
                        </CardTitle>
                         <CardSubtitle>Create a new class using this option</CardSubtitle> 
                        <br/>
                        <br/>
                        <div className="butcenterr">
                        <Button onClick={this.toggleModal} outline  >Create New Class</Button>
                        </div>
                    </CardBody>
                   </Card>





                   <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}  >
                     <ModalHeader toggle={this.toggleModal}  >Enter Details</ModalHeader>
                     <ModalBody>
                       <Form onSubmit={ (values) => this.handleSubmit(values)}>
                         <FormGroup>
                           <Label for="courseName">Course Name:</Label>
                           <Input type="text" id="courseName" 
                            innerRef={(input) => this.coursename = input}
                           
                           
                           placeholder="Enter the name for the class/course"></Input>
                         </FormGroup>
                      

                         <FormGroup>
                           <Label for="courseDes">Course Description:</Label>
                           <Input type="textarea" rows="4" id="courseDes" name="courseDes" 
                            innerRef={(input) => this.description = input}
                           placeholder="Enter the course description here"></Input>
                         </FormGroup>
                        <br/>
                         <Button color="info" value="submit" type="submit">Proceed</Button>
                         
                       </Form>
                     </ModalBody>
                   </Modal>




          </div>
          <div className="cardhandle">
          <Card className="cardcontainer">
                    <CardImg className="classcardimg" src={JoinClassLogo} />
                    <CardBody>
                        <CardTitle tag="h5" >
                          
                           Join Class
                        </CardTitle>
                         <CardSubtitle>Join class by  entering the code below</CardSubtitle> 
                         <br/>
                         <CardText>
                         <Form>
                           <FormGroup>
                             <Input type="text" name="classcode" id="classcode" placeholder="Enter code here" />
                           </FormGroup>
                           <div className="butcenter">
                           <Button type="submit"  outline  >Search</Button>
                           </div>
                          
                         </Form>
                         </CardText>
                        {/* <CardText>{item.description}</CardText> */}
                    </CardBody>
                </Card>
          </div>

        
          </div>
      </div>
      
  );
  }
}

export default MyClasses;