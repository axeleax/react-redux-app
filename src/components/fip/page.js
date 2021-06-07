import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import './style.css';

export default function Page(props) {
    return (
        <RenderFIPDetail data={props.fip} error={props.error}/>               
    );
}

function RenderFIPDetail(props) {
    const { 
        data,
        error,
    } = props;

    const showError = (error !== undefined && error.code !== '');

    return (
        showError ?
            <AlertMessage error={error}/>
        :
            <Form className="form">
                <Form.Group as={Row} controlId="formId">
                    <Form.Label column sm="5" className="field">Id:</Form.Label>
                    <Col sm="5"><Form.Control plaintext readOnly defaultValue={data.id} /></Col>
                </Form.Group>
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
                <Form.Group as={Row} controlId="formEmail">
                    <Form.Label column sm="5" className="field">E-mail:</Form.Label>
                    <Col sm="7"><Form.Control plaintext readOnly defaultValue={data.email} /></Col>
                </Form.Group>

                <div className="table-title"><h5>Phone numbers</h5></div>   
                <RenderPhoneTable data={data.phones}/>

                <div className="table-title"><h5>Adresses</h5></div>   
                <RenderAddressTable data={data.addresses}/>
            </Form>
    );
}

function AlertMessage(props) {
    return (
        <Alert variant={props.error.type} transition={true} className="not-found-alert">
        <Alert.Heading><h3>{props.error.code}</h3>{props.error.title}</Alert.Heading>
            <p>
                {props.error.message}
            </p>
        </Alert>
    );
}

function RenderAddressTable(props) {
    return (
        <Table bordered responsive size="sm">
            <thead>
                <tr>
                    <th>Address 1</th>
                    <th>Address 2</th>
                    <th>Zip</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                <RenderAddresRows data={props.data}/>
            </tbody>
        </Table>
    );
}
function RenderAddresRows(props) {
    return props.data.map((item,index) => {
        const { address1, address2, zip, city, state, type} = item;
        return (
            <tr key={index}>
                <td>{address1}</td>
                <td>{address2}</td>
                <td>{zip}</td>
                <td>{city}</td>
                <td>{state}</td>
                <td>{type}</td>
            </tr>
        )
    })
}

function RenderPhoneTable(props) {
    return (
        <Table bordered responsive size="sm">
            <thead>
                <tr>
                    <th>Number</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                <RenderPhoneRows data={props.data}/>
            </tbody>
        </Table>
    );
}
function RenderPhoneRows(props) {
    return props.data.map((item,index) => {
        const { number, type} = item;
        return (
            <tr key={index}>
                <td>{number}</td>
                <td>{type}</td>
            </tr>
        )
    })
}


 