import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Alert from '../alert';
import Pagination from 'react-bootstrap/Pagination';
import './style.css';

export default function Page(props) {

    const { 
        loading,
        data,
        transactionSelected,
        isReset,
        loadingTable,
        activePage,
        doSelectTransaction,
        doSelectPage,
        tableError,
        error
    } = props;

    const showError = ((error !== undefined && error.code !== ''));
    const showErrorTable = ((tableError !== undefined && tableError.code !== ''));
    const showoOptionDetail = ((transactionSelected !== undefined && transactionSelected.transaction !== ''));

    return (
        <div>
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
                        { showErrorTable ? <Alert isVisible={showErrorTable} data={tableError}/>
                        :
                                loadingTable ? 
                                    <div className={'loading-text'}><h4>Loading...</h4></div>
                                :
                                <Row>
                                    <Col> 
                                        <TransactionHistoryTable data={data.transactions} doSelectTransaction={doSelectTransaction} 
                                        transactionSelected={transactionSelected} isReset={isReset} loading={loading}/>
                                         <RenderPaginator count={data.count} active={activePage} doSelectPage={doSelectPage}/>
                                    </Col>
                                </Row>   
                        }
                        {!showErrorTable && <div className="divider"/>}
                        <TransactionDetail data={transactionSelected} isVisible={showoOptionDetail}/>
                    </Form>
            }  
        </div>      
    );
}


function TransactionDetail(props) {
    const {
        isVisible, 
        data
    } = props;

    return(
        isVisible &&
        <div>
            <Row className={'option-detail'}>
                <Col> 
                    <Form.Group as={Row} controlId="formTransaction">
                        <Form.Label column sm="5" className="field">Transaction:</Form.Label>
                        <Col sm="5"><Form.Control plaintext readOnly value={data.transaction} /></Col>
                    </Form.Group>  
                </Col>
                <Col> 
                </Col>
            </Row>
            <Row className={'option-detail'}>
                <Col> 
                    <Form.Group as={Row} controlId="formPricePlan">
                        <Form.Label column sm="5" className="field">Price Plan:</Form.Label>
                        <Col sm="7"><Form.Control plaintext readOnly value={data.pricePlan} /></Col>
                    </Form.Group>  
                </Col>
                <Col> 
                    <Form.Group as={Row} controlId="formPriceType">
                        <Form.Label column sm="5" className="field">Price Type:</Form.Label>
                        <Col sm="7"><Form.Control plaintext readOnly value={data.priceType} /></Col>
                    </Form.Group>
                </Col>
            </Row>
            <Row className={'option-detail'}>
                <Col> 
                    <Form.Group as={Row} controlId="formAuthirization">
                        <Form.Label column sm="5" className="field">Authirization:</Form.Label>
                        <Col sm="7"><Form.Control plaintext readOnly value={data.authirization} /></Col>
                    </Form.Group>
                </Col>
                <Col> 
                    <Form.Group as={Row} controlId="formCopay">
                        <Form.Label column sm="5" className="field">Copay:</Form.Label>
                        <Col sm="7"><Form.Control plaintext readOnly value={data.copay} /></Col>
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

function TransactionHistoryTable(props) {
    return (
        <Table bordered responsive size="sm">
            <thead>
                <tr>
                    <th></th>
                    <th>Transaction</th>
                    <th>Date</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Price Plan</th>
                </tr>
            </thead>
            <tbody>
                <RenderRows data={props.data} doSelectTransaction={props.doSelectTransaction} 
                transactionSelected={props.transactionSelected} isReset={props.isReset}/>
            </tbody>
        </Table>
    );
}

function RenderRows(props) {
    return props.data.map((item) => {
        const isChecked = (!props.isReset && item.transaction === props.transactionSelected.transaction);
        const {  transaction, date, quantity,price,pricePlan} = item;
        return (
            <tr key={transaction}>
                <td>
                    <div><Form.Check type="radio" label="" name="policies" checked={isChecked} id={transaction} onChange={ ()=> {
                                                                                                props.doSelectTransaction(item);
                                                                                            }}/></div>
                </td>
                <td>{transaction}</td>
                <td>{date}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{pricePlan}</td>
            </tr>
        )
    })   
}

function RenderPaginator(props) {
    const {
        active, 
        count,
        doSelectPage
    } = props;

    const pages = Math.ceil(count / 5);
    let items = [];
    for (let number = 1; number <= pages; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={ ()=> {doSelectPage(number);}}>
              {number}
            </Pagination.Item>,
          );
    };

    return (
        pages > 1 &&
            <div className="pagination-row">
            <Pagination size="sm">{items}</Pagination>
            </div>
    );
}

