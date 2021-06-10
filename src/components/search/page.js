import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from './../navbar';
import { BiSearchAlt2 } from 'react-icons/bi';
import Preview from '../preview';
import Alert from '../alert';
import Spinner from 'react-bootstrap/Spinner';
import './style.css';

export default function Page(props) {
    const { 
        patSeqno,
        patient,
        loading,
        error,
        doSearch,
        onChangePatSeqno,
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
                                                    <Form.Label>Petient Id</Form.Label>
                                                    <Form.Control type="text" placeholder="FERECA" maxLength={7} minLength={6} value={patSeqno}
                                                    onChange={onChangePatSeqno} disabled={loading}/>
                                                    <Form.Text className="text-muted">
                                                    QS1 Patient Id or PAT_SEQNO.
                                                    </Form.Text>
                                                </Form.Group>
                                                <Button variant="secondary" type="button" onClick={doSearch}  disabled={loading}>
                                                { loading ? 
                                                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="load-spinner-btn"/>
                                                    :
                                                    <BiSearchAlt2 className='btn-icon'/>
                                                }
                                                Search
                                                </Button>
                                            </Form>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Preview isVisible={exists} data={patient} goTo={goTo}/>
                                    <Alert isVisible={showError} data={error}/>
                                </Col>
                            </Row>
                        </Container>
                    </Jumbotron> 
                </Col>
            </Row>
        </Container>       
    );
}
