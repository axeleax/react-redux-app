import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import FD from '../fd'
import LCC from '../lcc'
import NavBar from '../navbar'
import PATIENT_TYPE from '../../enum/patientType';

import { BiLogOut } from "react-icons/bi";
import './style.css';

export default function Page(props) {

    const { 
        loading,
        activePatientTab,
        onSelectTab,
        onBack,
    } = props;

    return (
        <Container>
        <Row>
            <Col><NavBar/></Col>
        </Row>
        <Row>
            <Col className="mt-3">
                    <Row>
                        <Col sm={{ span: 4, offset: 5 }}>
                            <h3 className={"form-title actve-tab-"+activePatientTab}>{activePatientTab} Patient Profile</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Tab.Container id="left-tabs" defaultActiveKey={PATIENT_TYPE.FD} onSelect={(activePatientTab) => {
                                                                                                onSelectTab(activePatientTab);
                                                                                            }}>
                                <Row>
                                    <Col sm={2} className={"pr-0"}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item className={'fd-nav-item'}>
                                        <Nav.Link eventKey={PATIENT_TYPE.FD} disabled={loading} >FD</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className={'lcc-nav-item'}>
                                        <Nav.Link eventKey={PATIENT_TYPE.LCC} disabled={loading}>LCC</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    </Col>
                                    <Col sm={10}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey={PATIENT_TYPE.FD} className='fd-tab'>
                                            <FD />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey={PATIENT_TYPE.LCC} className='lcc-tab'>
                                            <LCC />
                                        </Tab.Pane>
                                    </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Col>
                    </Row>
            
            </Col>
        </Row>
        <Row>
            <Col className="mt-3">
            <Button variant="secondary" size="md" onClick={() => {onBack('/search')}}>
            <BiLogOut className='btn-icon'/>Back
            </Button>
            </Col>
        </Row>
    </Container>
    );
}



 