import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BiShow } from 'react-icons/bi';
import './style.css';

export default function Page(props) {

    const {
        isVisible, 
        data,
    } = props;

    return (
        isVisible &&
            <Card style={{ width: '20rem' }}>
                <Card.Body>
                    <Card.Title><span>{data.id}</span> - <span>{data.firstName+ ' '+ data.lastName}</span></Card.Title>
                    
                    <Form>
                        <Form.Group as={Row} controlId="formFirstName">
                            <Form.Label column sm="5" className="field">Fisrt Name:</Form.Label>
                            <Col sm="5"><Form.Control plaintext readOnly defaultValue={data.firstName} /></Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formLastName">
                            <Form.Label column sm="5" className="field">Last Name:</Form.Label>
                            <Col sm="7"><Form.Control plaintext readOnly defaultValue={data.lastName} /></Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formGender">
                            <Form.Label column sm="5" className="field">Gender:</Form.Label>
                            <Col sm="7"><Form.Control plaintext readOnly defaultValue={data.gender} /></Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formBirthday">
                            <Form.Label column sm="5" className="field">Birthday:</Form.Label>
                            <Col sm="7"><Form.Control plaintext readOnly defaultValue={data.birthday} /></Col>
                        </Form.Group>
                    </Form>
                
                    <Button variant="secondary" type="button" 
                        onClick={() => props.goTo(data.link)}>
                        <BiShow className='btn-icon'/>View
                    </Button>

                </Card.Body>
            </Card>
    );
}




