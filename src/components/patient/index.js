import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';
import demographicFindPatientRequest from '../../redux/actions/demographicFindPatientRequest';
import insuranceFindPatientRequest from '../../redux/actions/insuranceFindPatientRequest';
import rxProfileFindPatientRequest from '../../redux/actions/rxProfileFindPatientRequest';
import searchReset from '../../redux/actions/searchReset';
import patientTypeSelect from '../../redux/actions/patientTypeSelect';
import SEGMENT_TYPE from '../../enum/segmentType';

class Patient extends Component {
    constructor(props) {
        super(props);

        const {
            search,
        } = this.props;
        
        if(search.patient.id === ""){
            this.props.history.push(`/search`);
        }

        this.onSelectTab = this.onSelectTab.bind(this);
        this.onBack = this.onBack.bind(this);
    }

    onBack(path) {
        const {
            searchReset,
        } = this.props;

        searchReset();
        this.props.history.push(path);
    }


    onSelectTab(activePatientTab) {
        const {
            search,
            patient,
            demographicFindPatientRequest,
            insuranceFindPatientRequest,
            rxProfileFindPatientRequest,
            patientTypeSelect,
        } = this.props;

        patientTypeSelect(activePatientTab);
        
        switch(patient.activeSegmentTab){
            case SEGMENT_TYPE.DEMOGRAPHIC:
                demographicFindPatientRequest({id:search.patient.id,patientType:activePatientTab});    
            break;
            case SEGMENT_TYPE.INSURANCE:
                insuranceFindPatientRequest({id:search.patient.id,patientType:activePatientTab});
            break;
            case SEGMENT_TYPE.RX_PROFILE:
                rxProfileFindPatientRequest({id:search.patient.id,patientType:activePatientTab});
            break;
            default:
                break;
        }
    }

    render() {
        const {
            demographic,
            patient,
            insurance,
            rxProfile,
        } = this.props;

        const isLoading = (demographic.loading || insurance.loading || rxProfile.loading);
        
        return (
            <Page
                loading = {isLoading}
                activePatientTab={patient.activePatientTab}
                onSelectTab={this.onSelectTab}
                onBack={this.onBack}
            />
        );
    }
}

const mapStateToProps = state => ({
    search: state.search,
    patient: state.patient,
    demographic:state.demographic,
    insurance:state.insurance,
    rxProfile:state.rxProfile,
});

const mapDispatchToProps = {
    demographicFindPatientRequest,
    insuranceFindPatientRequest,
    rxProfileFindPatientRequest,
    searchReset,
    patientTypeSelect,
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Patient)
);
