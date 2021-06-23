import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Demographic from '../demographic';
import Insurance from '../insurance';
import RxProfile from '../rxprofile';
import PATIENT_TYPE from '../../enum/patientType';
import SEGMENT_TYPE from '../../enum/segmentType';
import './style.css';

export default function Page(props) {
    const { 
        patSeqno,
        activeSegment,
        onSelectTab,
    } = props;

    return (
        <RenderFDDetail patSeqno={patSeqno} onSelectTab={onSelectTab} activeSegment={activeSegment}/>               
    );
}

function RenderFDDetail(props) {
    const { 
        activeSegment,
        onSelectTab,
    } = props;

    return (
        <Container>
            <Tabs activeKey={activeSegment} id="uncontrolled-tab-example" onSelect={(activeSegmentTab ) => {onSelectTab(activeSegmentTab);}}>  
                <Tab eventKey={SEGMENT_TYPE.DEMOGRAPHIC} title="Demographic">
                    <Demographic activePatientTab={PATIENT_TYPE.LCC}/>
                </Tab>
                <Tab eventKey={SEGMENT_TYPE.INSURANCE} title="Insurance">
                    <Insurance activePatientTab={PATIENT_TYPE.LCC}/>
                </Tab>
                <Tab eventKey={SEGMENT_TYPE.RX_PROFILE} title="RX Profile">
                    <RxProfile activePatientTab={PATIENT_TYPE.LCC}/>
                </Tab>
            </Tabs>
        </Container>                
    );
}