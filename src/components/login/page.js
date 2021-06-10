import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import { IoLogInOutline } from "react-icons/io5";
import './style.css';

export default function Page(props) {
    const { 
        lanId,
        password,
        loading,
        error,
        doLogin,
        onChangeUser,
        onChangePassword,
    } = props;

    const showError = ((error !== undefined && error.code !== ''));

    return (
        <Container>
            <Row>
                <Col>
                    <Jumbotron fluid={false}>
                        <Container>
                            <Row>
                                <Col md={{ span: 6, offset: 3 }}>
                                    <div className="app-title"><h2>QS1 Application</h2></div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={{ span: 6, offset: 3 }}>
                                    <Card style={{ width: '22rem' }}>
                                        <Card.Body>
                                            <Card.Title>Login</Card.Title>
                                            <Form >
                                                <Form.Group controlId="lanId">
                                                    <Form.Label>LANID</Form.Label>
                                                    <Form.Control type="text" placeholder="EK####" value={lanId}
                                                    onChange={onChangeUser} disabled={loading}/>
                                                    <Form.Text className="text-muted">
                                                        LANID user company identifier.
                                                    </Form.Text>
                                                </Form.Group>
                                                <Form.Group controlId="password">
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control type="password" placeholder="***********" value={password}
                                                    onChange={onChangePassword} disabled={loading}/>
                                                    <Form.Text className="text-muted">
                                                        LANID user password.
                                                    </Form.Text>
                                                </Form.Group>

                                                <Button variant="secondary" type="button" onClick={doLogin} disabled={loading} >
                                                { loading ? 
                                                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="load-spinner-btn"/>
                                                    :
                                                    <IoLogInOutline className='btn-icon'/>
                                                }
                                                Login
                                                </Button>
                                            </Form>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>   
                            <Row>
                                <Col>
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



