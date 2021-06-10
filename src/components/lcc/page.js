import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Alert from '../alert';
import Demographic from '../demographic';
import TAP_TYPE from '../../enum/tapType';
import './style.css';

export default function Page(props) {
    return (
        <RenderFDDetail data={props.data} error={props.error}/>               
    );
}

function RenderFDDetail(props) {
    const { 
        data,
        error,
    } = props;

    const showError = (error !== undefined && error.code !== '');

    return (
        showError ?
            <Alert isVisible={true} data={error}/> 
        :
            <Container>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="profile" title="Demographic">
                    <Demographic data={data} activeTab={TAP_TYPE.LCC}/>
                </Tab>
                <Tab eventKey="insurance" title="Insurance">
                Insurance
                </Tab>
                <Tab eventKey="rxprofile" title="RX Profile">
                RX Profile
                </Tab>
            </Tabs>
            </Container>                
    );
}