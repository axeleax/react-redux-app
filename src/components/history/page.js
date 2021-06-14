import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import { BiCloudDownload } from "react-icons/bi";
import Spinner from 'react-bootstrap/Spinner';
import Alert from '../alert';
import { IoClose } from "react-icons/io5";
import { BiHistory } from "react-icons/bi";
import './style.css';

export default function Page(props) {

    const { 
        loading,
        data,
        patSeqno,
        drugSelected,
        activePatientTab,
        isReset,
        isModalOpen,
        doReload,
        doSelectDrug,
        doModalShow, 
        error
    } = props;

    const showError = ((error !== undefined && error.code !== ''));
    const showoOptionDetail = ((drugSelected !== undefined && drugSelected.rxNumber !== ''));
    const isEmpty = (data.drugs.length === 0);

    return (
        <div>
            <div className="reload-icon-div">
                { loading && <Spinner as="span" animation="border" size="md" role="status" aria-hidden="true" className="load-spinner"/>}
                <BiCloudDownload className={loading && 'icon-loading'} onClick={() => {doReload(activePatientTab,patSeqno)}} disabled={loading}/> 
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
                                <RxProfileTable data={data.drugs} doSelectDrug={doSelectDrug} 
                                drugSelected={drugSelected} isReset={isReset} isEmpty={isEmpty} loading={loading}/>
                            </Col>
                        </Row>
                        {!isEmpty && <div className="divider"/>}
                        <DrugDetail data={drugSelected} isVisible={showoOptionDetail}  isModalOpen={isModalOpen} doModalShow={doModalShow}/>
                    </Form>
            }  
        </div>      
    );
}


function DrugDetail(props) {
    const {
        isVisible, 
        data,
        isModalOpen,
        doModalShow,
    } = props;

    return(
        isVisible &&
        <div>
            <Row className={'option-detail'}>
                <Col> 
                    <Form.Group as={Row} controlId="formRxNumber">
                        <Form.Label column sm="5" className="field">RxNumber:</Form.Label>
                        <Col sm="5"><Form.Control plaintext readOnly value={data.rxNumber} /></Col>
                    </Form.Group>  
                </Col>
                <Col> 
                </Col>
            </Row>
            <Row className={'option-detail'}>
                <Col> 
                    <Form.Group as={Row} controlId="formDrug">
                        <Form.Label column sm="5" className="field">Drug:</Form.Label>
                        <Col sm="7"><Form.Control plaintext readOnly value={data.drug} /></Col>
                    </Form.Group>  
                </Col>
                <Col> 
                    <Form.Group as={Row} controlId="formGeneric">
                        <Form.Label column sm="5" className="field">Generic:</Form.Label>
                        <Col sm="7"><Form.Control plaintext readOnly value={data.generic} /></Col>
                    </Form.Group>
                </Col>
            </Row>
            <Row className={'option-detail'}>
                <Col> 
                    <Form.Group as={Row} controlId="formAuthirized">
                        <Form.Label column sm="5" className="field">Authirized:</Form.Label>
                        <Col sm="7"><Form.Control plaintext readOnly value={data.authirized} /></Col>
                    </Form.Group>
                </Col>
                <Col> 
                    <Form.Group as={Row} controlId="formDispensed">
                        <Form.Label column sm="5" className="field">Dispensed:</Form.Label>
                        <Col sm="7"><Form.Control plaintext readOnly value={data.dispensed} /></Col>
                    </Form.Group>
                </Col>
            </Row>
            <Row className={'option-detail'}>
                <Col> 
                    <Form.Group as={Row} controlId="formQuantity">
                        <Form.Label column sm="5" className="field">Quantity:</Form.Label>
                        <Col sm="7"><Form.Control plaintext readOnly value={data.quantity} /></Col>
                    </Form.Group>
                </Col>
                <Col> 
                    <Form.Group as={Row} controlId="formDate">
                        <Form.Label column sm="5" className="field">Date:</Form.Label>
                        <Col sm="7"><Form.Control plaintext readOnly value={data.date} /></Col>
                    </Form.Group>
                </Col>
            </Row>
            <Row className={'option-detail'}>
                <Col> 
                    <Form.Group as={Row} controlId="formRefillsRemaining">
                        <Form.Label column sm="5" className="field">Refills Remaining:</Form.Label>
                        <Col sm="7"><Form.Control plaintext readOnly value={data.refillsRemaining} /></Col>
                    </Form.Group>
                </Col>
                <Col> 
                </Col>
            </Row>
            <Row className={'option-detail'}>
                <Col> 
                    <Form.Group as={Row} controlId="formPatLastPaid">
                        <Form.Label column sm="5" className="field">Pat Last Paid:</Form.Label>
                        <Col sm="7"><Form.Control plaintext readOnly value={data.patLastPaid} /></Col>
                    </Form.Group>
                </Col>
                <Col> 
                    <Button variant="secondary" size="md" onClick={() => doModalShow(true)} >
                        <BiHistory className='btn-icon'/> Transaction History
                    </Button>

                    <TransactionalHistory show={isModalOpen} onHide={() => doModalShow(false)} />p
                </Col>
            </Row>
        </div>
    );
}

function TransactionalHistory(props) {
    return (
      <Modal {...props} centered={true}  aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Transaction History
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
          </Container>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
            <IoClose className='btn-icon'/>Close
        </Button>
        </Modal.Footer>
      </Modal>
    );
  }
  

function RxProfileTable(props) {
    if(props.isEmpty){
            return <div className={'drugs-not-found'}><h5>Drugs not found !!</h5></div>
    }else{
        return (
            <Table bordered responsive size="sm">
                <thead>
                    <tr>
                        <th></th>
                        <th>RxNumber</th>
                        <th>Drug</th>
                        <th>Quantity</th>
                        <th>Last Date</th>
                    </tr>
                </thead>
                <tbody>
                    <RenderRows data={props.data} doSelectDrug={props.doSelectDrug} 
                    drugSelected={props.drugSelected} isReset={props.isReset}/>
                </tbody>
            </Table>
        );
    }
}

function RenderRows(props) {
    return props.data.map((item) => {
        const isChecked = (!props.isReset && item.rxNumber === props.drugSelected.rxNumber);
        const {  rxNumber, drug, quantity,date} = item;
        return (
            <tr key={rxNumber}>
                <td>
                    <div><Form.Check type="radio" label="" name="policies" checked={isChecked} id={rxNumber} onChange={ ()=> {
                                                                                                props.doSelectDrug(item);
                                                                                            }}/></div>
                </td>
                <td>{rxNumber}</td>
                <td>{drug}</td>
                <td>{quantity}</td>
                <td>{date}</td>
            </tr>
        )
    })   
}


