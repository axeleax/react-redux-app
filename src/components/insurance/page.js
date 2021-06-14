import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { BiCloudDownload } from "react-icons/bi";
import Spinner from 'react-bootstrap/Spinner';
import Alert from '../alert';
import './style.css';

export default function Page(props) {

    const { 
        loading,
        data,
        patSeqno,
        policySelected,
        activePatientTab,
        isReset,
        doReload,
        doSelectPolicy,
        error
    } = props;

    const showError = ((error !== undefined && error.code !== ''));
    const showoOptionDetail = ((policySelected !== undefined && policySelected.policyNumber !== ''));
    const isEmpty = (data.policies.length === 0);
    
    return (
        <div>
                <div className="reload-icon-div">
                { loading && <Spinner as="span" animation="border" size="md" role="status" aria-hidden="true" className="load-spinner"/>}
                <BiCloudDownload className={loading && 'icon-loading'} onClick={() => {doReload(activePatientTab,patSeqno)}} disabled={loading}/> 
            </div>
            { showError ? <Alert isVisible={showError} data={error}/>
            :
                loading ? 
                    <div className={'loading-text'}><h4>Loading...</h4></div>
                :
                    <Form className="form">
                        <Row>
                            <Col> 
                                <Form.Group as={Row} controlId="formFirstName">
                                    <Form.Label column sm="5" className="field">Fisrt Name:</Form.Label>
                                    <Col sm="7"><Form.Control plaintext readOnly value={data.firstName} /></Col>
                                </Form.Group>  
                            </Col>
                            <Col> 
                                <Form.Group as={Row} controlId="formLastName">
                                    <Form.Label column sm="5" className="field">Last Name:</Form.Label>
                                    <Col sm="7"><Form.Control plaintext readOnly value={data.lastName} /></Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col> 
                                <InsuranceTable data={data.policies} doSelectPolicy={doSelectPolicy} 
                                policySelected={policySelected} isReset={isReset} isEmpty={isEmpty} loading={loading}/>
                            </Col>
                        </Row>
                        <div className="divider"/>
                        <PolicyDetail data={policySelected} isVisible={showoOptionDetail}/>
                    </Form>
                }
        </div>
    );
}

function PolicyDetail(props) {
    const {
        isVisible, 
        data,
    } = props;

    return(
        isVisible &&
        <div>
            <Row className={'option-detail'}>
                <Col> 
                    <Form.Group as={Row} controlId="formPolicyNumber">
                        <Form.Label column sm="5" className="field">Policy Number:</Form.Label>
                        <Col sm="7"><Form.Control plaintext readOnly value={data.policyNumber} /></Col>
                    </Form.Group>
                </Col>
                <Col> 
                </Col>
            </Row>
            <Row className={'option-detail'}>
                <Col> 
                    <Form.Group as={Row} controlId="formPaymetPlan">
                        <Form.Label column sm="5" className="field">Payment Plan:</Form.Label>
                        <Col sm="7"><Form.Control plaintext readOnly value={data.paymetPlan} /></Col>
                    </Form.Group>  
                </Col>
                <Col> 
                    <Form.Group as={Row} controlId="formGroupNumber">
                        <Form.Label column sm="5" className="field">Group Number:</Form.Label>
                        <Col sm="7"><Form.Control plaintext readOnly value={data.groupNumber} /></Col>
                    </Form.Group>
                </Col>
            </Row>
            <Row className={'option-detail'}>
                <Col> 
                    <h5>More details ...</h5>
                </Col>
            </Row>
        </div>
    );
}

function InsuranceTable(props) {
    if(props.isEmpty){
        return <div className={'drugs-not-found'}><h5>Polices not found !!</h5></div>
    }else{
        return (
            <Table bordered responsive size="sm">
                <thead>
                    <tr>
                        <th></th>
                        <th>Payment Plan</th>
                        <th>Policy Number</th>
                        <th>Group Number</th>
                    </tr>
                </thead>
                <tbody>
                    <RenderRows data={props.data} doSelectPolicy={props.doSelectPolicy} 
                    policySelected={props.policySelected} isReset={props.isReset}/>
                </tbody>
            </Table>
        );
    }
}

function RenderRows(props) {
    return props.data.map((item) => {
        const isChecked = (!props.isReset && item.policyNumber === props.policySelected.policyNumber);
        const {  paymetPlan, policyNumber, groupNumber} = item;
        return (
            <tr key={policyNumber}>
                <td>
                    <div><Form.Check type="radio" label="" name="policies" checked={isChecked} id={policyNumber} onChange={ ()=> {
                                                                                                props.doSelectPolicy(item);
                                                                                            }}/></div>
                </td>
                <td>{paymetPlan}</td>
                <td>{policyNumber}</td>
                <td>{groupNumber}</td>
            </tr>
        )
    })
}


