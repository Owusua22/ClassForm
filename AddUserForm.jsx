import React, { Component } from 'react';
import {Form, Button} from "react-bootstrap";
 
class AddUserForm extends Component {
    constructor(props){
        super(props)
        this.state ={
            name:"",
            Email:"",
            Location: "",
            gen:"",
            Password:"",
            Age:"",
}
    }
    handleChange = (e) =>{
        e.preventDefault()
        this.setState({
        [e.target.name] : e.target.value
        })
        console.log(this.state)
    }
    render() {
        return (
            <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name </Form.Label>
              <Form.Control type="text" placeholder="Enter name" name ="name" onChange={this.handleChange} />
            </Form.Group>
           
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name ="email" onChange={this.handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="Enter Location" name ="name" onChange={this.handleChange} />
            </Form.Group>
           
            <Form.Group className="mb-3" controlId="formBasicGen">
              <Form.Label>Gen</Form.Label>
              <Form.Control type="number" placeholder="Enter gen" name ="number" onChange={this.handleChange} /> 
            </Form.Group>

      
            <Form.Group className="mb-3" controlId="formBasicPassword" >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name ="Password" onChange={this.handleChange} />
            </Form.Group>
           
            <Form.Group className="mb-3" controlId="formBasicAge">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" placeholder="number"  name ="age" onChange={this.handleChange} />
            </Form.Group>
           
            <Button>
                Submit
            </Button>
           
            
          </Form>
                

            
        );
    }
}

export default AddUserForm;
