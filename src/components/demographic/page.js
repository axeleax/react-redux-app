import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BiCloudDownload } from "react-icons/bi";
import Spinner from 'react-bootstrap/Spinner';
import Alert from '../alert';
import './style.css';

export default function Page(props) {

    const { 
        loading,
        data,
        doReload,
        error,
    } = props;

    const showError = ((error !== undefined && error.code !== ''));
    
    return (
        <div>
            <div className="reload-icon-div">
                { loading && <Spinner as="span" animation="border" size="md" role="status" aria-hidden="true" className="load-spinner"/>}
                <BiCloudDownload className={loading && 'icon-loading'} onClick={doReload} disabled={loading}/> 
            </div>   
            {showError ? 
                <Alert isVisible={showError} data={error}/>
            :
                loading ? 
                    <div className={'loading-text'}><h4>Loading...</h4></div>
                :
                <Form className="form">
                    <Row>
                        <Col>
                            <Form.Group as={Row} controlId="formFirstName">
                                <Form.Label column sm="4" className="field">Fisrt Name:</Form.Label>
                                <Col sm="8"><Form.Control plaintext readOnly value={data.firstName} /></Col>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group as={Row} controlId="formLastName">
                                <Form.Label column sm="4" className="field">Last Name:</Form.Label>
                                <Col sm="8"><Form.Control plaintext readOnly value={data.lastName} /></Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group as={Row} controlId="formGender">
                                <Form.Label column sm="4" className="field">Gender:</Form.Label>
                                <Col sm="8"><Form.Control plaintext readOnly value={data.gender} /></Col>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group as={Row} controlId="formSsn">
                                <Form.Label column sm="4" className="field">SSN:</Form.Label>
                                <Col sm="8"><Form.Control plaintext readOnly value={data.ssn} /></Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group as={Row} controlId="formBirthday">
                                <Form.Label column sm="4" className="field">Birthday:</Form.Label>
                                <Col sm="8"><Form.Control plaintext readOnly value={data.birthday} /></Col>
                            </Form.Group>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                    <div className="divider"/>
                    <Row>
                        <Col>
                        <Form.Group as={Row} controlId="formAddress1">
                            <Form.Label column sm="4" className="field">Address 1:</Form.Label>
                            <Col sm="8"><Form.Control as="textarea" className="form-textarea" readOnly value={props.data.address.address1} /></Col>
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group as={Row} controlId="formAddress2">
                            <Form.Label column sm="4" className="field">Address 2:</Form.Label>
                            <Col sm="8"><Form.Control className="form-textarea" as="textarea" readOnly value={props.data.address.address2} /></Col>
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group as={Row} controlId="formCity">
                                <Form.Label column sm="4" className="field">City:</Form.Label>
                                <Col sm="8"><Form.Control plaintext readOnly value={props.data.address.city} /></Col>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group as={Row} controlId="formState">
                                <Form.Label column sm="4" className="field">State:</Form.Label>
                                <Col sm="8"><Form.Control plaintext readOnly value={props.data.address.state} /></Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group as={Row} controlId="formZip">
                                <Form.Label column sm="4" className="field">Zip:</Form.Label>
                                <Col sm="8"><Form.Control plaintext readOnly value={props.data.address.zip} /></Col>
                            </Form.Group>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Form>
            }  
        </div>
    );
}




