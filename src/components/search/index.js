import { React, Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';
import searchQS1PatientRequest from '../../redux/actions/searchQS1PatientRequest';
import demographicFindPatientRequest from '../../redux/actions/demographicFindPatientRequest';
import history from '../../history';
import TAP_TYPE from '../../enum/tapType';

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
        let patSeqnoTmp = event.target.value;
        this.setState({patSeqno:patSeqnoTmp});
    }

    goTo(path) {
        const {
            demographicFindPatientRequest,
        } = this.props;

        demographicFindPatientRequest({id:this.state.patSeqno,type:TAP_TYPE.FD});
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
    demographicFindPatientRequest,
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Search)
);
