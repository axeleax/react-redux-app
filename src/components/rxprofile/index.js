import { React, Component} from 'react';
import { connect } from 'react-redux';
import SEGMENT_TYPE from '../../enum/segmentType';
import rxProfileFindPatientRequest from '../../redux/actions/rxProfileFindPatientRequest';
import rxProfileDrugSelect from '../../redux/actions/rxProfileDrugSelect';
import Page from './page';

class RxProfile extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            patSeqno:'',
            activePatientTab:'',
            activeSegmentTab:SEGMENT_TYPE.RX_PROFILE,
            data:{
                id:'',
                firstName:'',
                lastName:'',
                drugs:[]
            },
            isReset:'',
            isModalOpen:false,
            drugSelected:{
                rxNumber:'',
                drug:'',
                generic:'',
                quantity:'',
                date:'',
                authirized:'',
                dispensed:'',
                refillsRemaining:'',
                patLastPaid:''
            },
            error:{
                title:'', 
                code:'', 
                message:'',
                type:''
            },
        };

        this.doReload = this.doReload.bind(this);
        this.doSelectDrug = this.doSelectDrug.bind(this);
        this.doModalShow = this.doModalShow.bind(this);
    }

    doReload(activePatientTab,patSeqno) {
        const {
            rxProfileFindPatientRequest,
        } = this.props;

        this.setState({activePatientTab:activePatientTab,patSeqno:patSeqno});
        rxProfileFindPatientRequest({id:patSeqno,patientType:activePatientTab});
    }

    doSelectDrug(drug) {
        const {
            rxProfileDrugSelect,
        } = this.props;
        
        this.setState({drugSelected: drug});
        rxProfileDrugSelect(drug);
    }

    doModalShow(open){
        this.setState({isModalOpen: open});
    }

    render() {
        
        const {
            search,
            rxProfile,
            activePatientTab,
        } =  this.props;

        return (
            <Page 
                loading={rxProfile.loading}
                data={rxProfile.data}
                patSeqno={search.patient.id}
                drugSelected={rxProfile.drugSelected}
                isReset={rxProfile.isReset}
                isModalOpen={this.state.isModalOpen}
                activePatientTab={activePatientTab}
                doReload={this.doReload}
                doSelectDrug={this.doSelectDrug}
                doModalShow={this.doModalShow}
                error={rxProfile.error}
            />
        );
    }
}

const mapStateToProps = state => ({
    rxProfile:state.rxProfile,
    search: state.search,
});

const mapDispatchToProps = {
    rxProfileFindPatientRequest,
    rxProfileDrugSelect,
};

export default connect(mapStateToProps, mapDispatchToProps)(RxProfile);

