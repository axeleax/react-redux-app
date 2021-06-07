import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Fip from '../fip'
import Person from '../person'
import Qs1 from '../qs1'
import NavBar from './../navbar'
import TAP_TYPE from './../../enum/tapType';
import { BiCloudDownload } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import './style.css';

export default function Page(props) {

    const { 
        patient,
        onReload,
        onSelect,
        goTo,
    } = props;

    return (
        <Container>
        <Row>
            <Col><NavBar/></Col>
        </Row>
        <Row>
            <Col>
                <Container>
                    <Row>
                        <Col xs={{ offset: 7 }} sm={{ offset: 9 }} md={{ offset: 9 }}>
                            <Button variant="secondary" size="sm" onClick={() => {
                                                                    onReload(patient);
                                                                }}>
                                { patient.isReloading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="load-spinner"/>:<BiCloudDownload className='btn-icon-2' /> }
                                { patient.isReloading ? 'Reloading ...' : 'Reload'} 
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Tabs defaultActiveKey="FIP" id="patient-tab" onSelect={(activeTab) => {
                                                                            onSelect(activeTab,patient);
                                                                        }}>
                                <Tab eventKey={TAP_TYPE.FIP} title="Freedom">
                                    <Fip fip={patient.fip} error={patient.error}/>
                                </Tab>       
                                <Tab eventKey={TAP_TYPE.PERRSON} title="Person">
                                    <Person fip={patient.person} error={patient.error} />
                                </Tab>
                                <Tab eventKey={TAP_TYPE.QS1} title="QS1">
                                    <Qs1 fip={patient.qs1}  error={patient.error}/>
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
        <Row>
            <Col>
            <Button variant="secondary" size="md" onClick={() => {
                                                    goTo('/search')
                                                }}>
            <BiLogOut className='btn-icon'/>Back
            </Button>
            </Col>
        </Row>
    </Container>
    );
}



 