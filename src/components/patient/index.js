import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TAP_TYPE from './../../enum/tapType';
import Page from './page';
import demographicFindPatientRequest from '../../redux/actions/demographicFindPatientRequest';

class Patient extends Component {
    constructor(props) {
        super(props);

        const {
            search,
        } = this.props;
        
        this.state = {
            activeTab:TAP_TYPE.FD,
            error:{
                title:'', 
                code:'', 
                message:'',
                type:''
            },
        };

        if(search.patient.id === ""){
            this.props.history.push(`/search`);
        }

        this.onSelectTab = this.onSelectTab.bind(this);
        this.goTo = this.goTo.bind(this);
    }

    onSelectTab(activeTab,patSeqno) {
        const {
            demographicFindPatientRequest,
        } = this.props;

        this.setState({activeTab:activeTab});

        demographicFindPatientRequest({id:patSeqno,type:activeTab});
    }

    goTo(path) {
        this.props.history.push(path);
    }

    render() {
        const {
            search,
            demographic,
        } = this.props;

        const {
            activeTab,
        } = this.state;

        return (
            <Page
                loading = {demographic.loading}
                activeTab={activeTab}
                patSeqno={search.patient.id}
                onSelectTab={this.onSelectTab}
                goTo={this.goTo}
            />
        );
    }
}

const mapStateToProps = state => ({
    search: state.search,
    demographic:state.demographic
});

const mapDispatchToProps = {
    demographicFindPatientRequest,
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Patient)
);
