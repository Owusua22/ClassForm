import React from 'react';
import { Card, Col } from 'react-bootstrap';

const User = (props) => {
    return (
        <Col md = "4" style={{marginBottom: "1rem"}}>
            <Card>
      <Card.Body>
        <Card.Title>MzSarah Complex School Form</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.userInfo.Name}</Card.Subtitle>
        <Card.Text>
         <p>Email: {props.userInfo.email}</p>
         <p>Gen: {props.userInfo.Gen}</p>
         <p>Location: {props.userInfo.Location}</p>
         <p>Age: {props.userInfo.Age}</p>
         
        </Card.Text>
        <Card.Link href="#">Edit</Card.Link>
        <Card.Link href="#">Delete</Card.Link>
       
      </Card.Body>
    </Card>
        </Col>
    );
}

export default User;
