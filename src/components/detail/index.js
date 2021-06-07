import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TAP_TYPE from './../../enum/tapType';
import Page from './page';
import detailFindFIPPatientById from '../../redux/actions/detailFindFIPPatientById';
import detailFindPersonPatientById from '../../redux/actions/detailFindPersonPatientById';
import detailFindQS1PatientById from '../../redux/actions/detailFindQS1PatientById';
import searchRefresh from '../../redux/actions/searchRefresh';
import detailReload from '../../redux/actions/detailReload';

class Detail extends Component {
    constructor(props) {
        super(props);

        const {
            search,
        } = this.props;
        
        this.state = {
            activeTab:'FIP',
            isReloading:false,
            fip:{
                id:'',
                personId:'',
                firstName:'',
                lastName:'',
                gender:'',
                birthday:'',
                email:'',
                addresses:[],
                phones:[],
                link:'',
            },
            person:{
                id:'',
                firstName:'',
                lastName:'',
                gender:'',
                birthday:'',
                emails:[],
                addresses:[],
                phones:[],
                link:'',
            },
            qs1:{
                id:'',
                firstName:'',
                lastName:'',
                gender:'',
                birthday:'',
                ssn:'',
                emails:[],
                addresses:[],
                phones:[],
                link:'',
            },
            error:{
                title:'', 
                code:'', 
                message:'',
                type:''
            },
        };

        if(search.fip.id === ""){
            this.props.history.push(`/search`);
        }

        this.onReload = this.onReload.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.goTo = this.goTo.bind(this);
    }

    onReload(patient) {
        const {
            detailFindFIPPatientById,
            detailFindPersonPatientById,
            detailFindQS1PatientById,
            detailReload,
        } = this.props;

        detailReload(true);

        const selft = this;
        setTimeout(function(){ 
            switch(selft.state.activeTab){
                case TAP_TYPE.FIP:
                    detailFindFIPPatientById(patient.fip);
                    break;
                case TAP_TYPE.PERRSON:
                    detailFindPersonPatientById(patient.fip);
                    break;
                case TAP_TYPE.QS1:
                    detailFindQS1PatientById(patient.fip);
                    break;
                default:
                    break;
            }
         }, 3000);
    }

    onSelect(activeTab,patient) {
        const {
            detailFindFIPPatientById,
            detailFindPersonPatientById,
            detailFindQS1PatientById,
        } = this.props;
       
        this.setState({activeTab:activeTab})

        switch(activeTab){
            case TAP_TYPE.FIP:
                detailFindFIPPatientById(patient.fip);
                break;
            case TAP_TYPE.PERRSON:
                detailFindPersonPatientById(patient.fip);
                break;
            case TAP_TYPE.QS1:
                detailFindQS1PatientById(patient.fip);
                break;
            default:
                break;
        }
    }

    goTo(path) {
        const {
            searchRefresh,
        } = this.props;

        searchRefresh();
        this.props.history.push(path);
    }

    render() {
        
        const {detail} =  this.props;
       
        return (
            <Page
                patient={detail}
                onReload={this.onReload}
                onSelect={this.onSelect}
                goTo={this.goTo}
            />
        );
    }
}



const mapStateToProps = state => ({
    search: state.search,
    detail: state.detail,
});

const mapDispatchToProps = {
    detailFindFIPPatientById,
    detailFindPersonPatientById,
    detailFindQS1PatientById,
    searchRefresh,
    detailReload,
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Detail)
);
