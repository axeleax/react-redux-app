import React, { Component } from 'react';
import { connect } from 'react-redux';
import PATIENT_TYPE from '../../enum/patientType';
import SEGMENT_TYPE from '../../enum/segmentType';
import demographicFindPatientRequest from '../../redux/actions/demographicFindPatientRequest';
import insuranceFindPatientRequest from '../../redux/actions/insuranceFindPatientRequest';
import rxProfileFindPatientRequest from '../../redux/actions/rxProfileFindPatientRequest';
import patientSegmentSelect from '../../redux/actions/patientSegmentSelect';
import Page from './page';

class LCC extends Component {

    constructor(props) {
        super(props);
        this.onSelectTab = this.onSelectTab.bind(this);
    }

    onSelectTab(activeSegmentTab) {
        const {
            search,
            demographicFindPatientRequest,
            insuranceFindPatientRequest,
            rxProfileFindPatientRequest,
            patientSegmentSelect,
        } = this.props;

        patientSegmentSelect(activeSegmentTab);

        switch(activeSegmentTab){
            case SEGMENT_TYPE.DEMOGRAPHIC:
                demographicFindPatientRequest({id:search.patient.id,patientType:PATIENT_TYPE.LCC});
            break;
            case SEGMENT_TYPE.INSURANCE:
                insuranceFindPatientRequest({id:search.patient.id,patientType:PATIENT_TYPE.LCC});
            break;
            case SEGMENT_TYPE.RX_PROFILE:
                rxProfileFindPatientRequest({id:search.patient.id,patientType:PATIENT_TYPE.LCC}); 
            break;
            default:
                break;
        }
    }

    render() {
        
        const {
            patient,
        } =  this.props;

        const activeSegment = (patient.activePatientTab === PATIENT_TYPE.LCC) ? patient.activeSegmentTab : SEGMENT_TYPE.DEMOGRAPHIC;

        return (
            <Page
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
    connect(mapStateToProps, mapDispatchToProps)(LCC);
