import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from './../navbar';
import { BiSearchAlt2 } from 'react-icons/bi';
import { BiShow } from 'react-icons/bi';
import './style.css';

export default function Page(props) {
    const { 
        id,
        patient,
        error,
        onClick,
        onChange,
        goTo,
    } = props;

    const showError = ((error !== undefined && error.code !== ''));
    const exists = (patient !== undefined && patient.id !== '');

    return (
        <Container>
            <Row>
                <Col><NavBar/></Col>
            </Row>
            <Row>
                <Col>
                    <Jumbotron fluid={false}>
                        <Container>
                            <Row>
                                <Col>
                                    <Card style={{ width: '25rem' }}>
                                        <Card.Body>
                                            <Card.Title>Search Patient</Card.Title>
                                            <Form>
                                                <Form.Group controlId="patientId">
                                                    <Form.Label>Patient Id</Form.Label>
                                                    <Form.Control type="text" placeholder="1212323" value={id}
                                                    onChange={(event) => {
                                                            onChange(event.target.value);
                                                    }}
                                                    />
                                                    <Form.Text className="text-muted">
                                                    Freedom Patient Id.
                                                    </Form.Text>
                                                </Form.Group>
                                                <Button variant="secondary" type="button" 
                                                onClick={() => {
                                                    onClick();
                                                }}>
                                                <BiSearchAlt2 className='btn-icon'/>Search
                                                </Button>
                                            </Form>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <ShowPatient show={exists} patient={patient} goTo={goTo}/>
                                    <AlertMessage show={showError} error={error}/>
                                </Col>
                            </Row>
                        </Container>
                    </Jumbotron> 
                </Col>
            </Row>
        </Container>       
    );
}


function AlertMessage(props) {
    if (props.show) {
        return (
            <Alert variant={props.error.type} transition={true}>
            <Alert.Heading><h3>{props.error.code}</h3>{props.error.title}</Alert.Heading>
                <p>
                    {props.error.message}
                </p>
            </Alert>
        );
    }else{
        return null;
    }
}

function ShowPatient(props) {
    if (props.show) {
        return (
            <Card style={{ width: '20rem' }}>
                <Card.Body>
                    <Card.Title><span>#{props.patient.id}</span> - <span>{props.patient.firstName+ ' '+ props.patient.lastName}</span></Card.Title>
                    
                    <Form>
                        <Form.Group as={Row} controlId="formFirstName">
                            <Form.Label column sm="5" className="field">Fisrt Name:</Form.Label>
                            <Col sm="5"><Form.Control plaintext readOnly defaultValue={props.patient.firstName} /></Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formLastName">
                            <Form.Label column sm="5" className="field">Last Name:</Form.Label>
                            <Col sm="7"><Form.Control plaintext readOnly defaultValue={props.patient.lastName} /></Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formGender">
                            <Form.Label column sm="5" className="field">Gender:</Form.Label>
                            <Col sm="7"><Form.Control plaintext readOnly defaultValue={props.patient.gender} /></Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formBirthday">
                            <Form.Label column sm="5" className="field">Birthday:</Form.Label>
                            <Col sm="7"><Form.Control plaintext readOnly defaultValue={props.patient.birthday} /></Col>
                        </Form.Group>
                    </Form>
                
                    <Button variant="secondary" type="button" 
                        onClick={() => props.goTo(props.patient.link)}>
                        <BiShow className='btn-icon'/>View
                    </Button>
        
                </Card.Body>
            </Card>
        );
    }else{
        return null;
    }
}


