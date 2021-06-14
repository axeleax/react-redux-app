import React, { Component } from 'react';
import { connect } from 'react-redux';
import PATIENT_TYPE from '../../enum/patientType';
import SEGMENT_TYPE from '../../enum/segmentType';
import demographicFindPatientRequest from '../../redux/actions/demographicFindPatientRequest';
import insuranceFindPatientRequest from '../../redux/actions/insuranceFindPatientRequest';
import rxProfileFindPatientRequest from '../../redux/actions/rxProfileFindPatientRequest';
import patientSegmentSelect from '../../redux/actions/patientSegmentSelect';
import Page from './page';

class FD extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activePatientTab:PATIENT_TYPE.FD,
            activeSegmentTab:'',
        };

        this.onSelectTab = this.onSelectTab.bind(this);
    }

    onSelectTab(activeSegmentTab,patSeqno) {
        const {
            demographicFindPatientRequest,
            insuranceFindPatientRequest,
            rxProfileFindPatientRequest,
            patientSegmentSelect,
        } = this.props;

        this.setState({activeSegmentTab:activeSegmentTab,patSeqno:patSeqno});

        patientSegmentSelect(activeSegmentTab);
    
        switch(activeSegmentTab){
            case SEGMENT_TYPE.DEMOGRAPHIC:
                demographicFindPatientRequest({id:patSeqno,patientType:PATIENT_TYPE.FD});    
            break;
            case SEGMENT_TYPE.INSURANCE:
                insuranceFindPatientRequest({id:patSeqno,patientType:PATIENT_TYPE.FD});
            break;
            case SEGMENT_TYPE.RX_PROFILE:
                rxProfileFindPatientRequest({id:patSeqno,patientType:PATIENT_TYPE.FD});
            break;
            default:
                break;
        }
    }

    render() {
        
        const {
            search,
            patient,
        } =  this.props;

        const activeSegment = (patient.activePatientTab === PATIENT_TYPE.FD) ? patient.activeSegmentTab : SEGMENT_TYPE.DEMOGRAPHIC;

        return (
            <Page
                patSeqno={search.patient.id}
                activeSegment={activeSegment}
                onSelectTab={this.onSelectTab}
            />
        );
    }
}

const mapStateToProps = state => ({
    search: state.search,
    patient: state.patient,
});

const mapDispatchToProps = {
    demographicFindPatientRequest,
    insuranceFindPatientRequest,
    rxProfileFindPatientRequest,
    patientSegmentSelect,
};

export default 
    connect(mapStateToProps, mapDispatchToProps)(FD);
