import { React, Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';
import searchQS1PatientRequest from '../../redux/actions/searchQS1PatientRequest';
import searchReset from '../../redux/actions/searchReset';
import demographicFindPatientRequest from '../../redux/actions/demographicFindPatientRequest';
import patientTypeSelect from '../../redux/actions/patientTypeSelect';
import patientSegmentSelect from '../../redux/actions/patientSegmentSelect';
import history from '../../history';
import PATIENT_TYPE from '../../enum/patientType';
import SEGMENT_TYPE from '../../enum/segmentType';

class Search extends Component {

    constructor(props) {
        super(props)

        this.state = {
            patSeqno:'',
            patient:{
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
        this.doSearch = this.doSearch.bind(this);
        this.onChangePatSeqno = this.onChangePatSeqno.bind(this);
        this.goTo = this.goTo.bind(this);
    }

    doSearch() {
        const {
            searchQS1PatientRequest,
        } = this.props;

        if(this.state.patSeqno){
            searchQS1PatientRequest(this.state.patSeqno);  
        }
    }

    onChangePatSeqno(event) {
        const {
            searchReset,
        } = this.props;

        let patSeqnoTmp = event.target.value;
        this.setState({patSeqno:patSeqnoTmp});
        if(patSeqnoTmp.trim()===''){
            searchReset();
        }
    }

    goTo(path) {
        const {
            demographicFindPatientRequest,
            patientTypeSelect,
            patientSegmentSelect,
        } = this.props;

        patientTypeSelect(PATIENT_TYPE.FD);
        patientSegmentSelect(SEGMENT_TYPE.DEMOGRAPHIC);
        demographicFindPatientRequest({id:this.state.patSeqno,patientType:PATIENT_TYPE.FD});

        history.push(path);
    }

    render() {

        const {search} = this.props;
        
        return (
            <Page 
                loading={search.loading}
                patient={search.patient}
                error={search.error}
                doSearch={this.doSearch}
                onChangePatSeqno={this.onChangePatSeqno}
                goTo={this.goTo}
            />
        );
    }
}

const mapStateToProps = state => ({
    search: state.search,
});

const mapDispatchToProps = {
    searchQS1PatientRequest,
    searchReset,
    demographicFindPatientRequest,
    patientTypeSelect,
    patientSegmentSelect,
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Search)
);
