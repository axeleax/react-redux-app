import { React, Component} from 'react';
import { connect } from 'react-redux';
import SEGMENT_TYPE from '../../enum/segmentType';
import insuranceFindPatientRequest from '../../redux/actions/insuranceFindPatientRequest';
import insurancePolicySelect from '../../redux/actions/insurancePolicySelect';
import Page from './page';

class Insurance extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            patSeqno:'',
            activePatientTab:'',
            activeSegmentTab:SEGMENT_TYPE.INSURANCE,
            data:{
                id:'',
                firstName:'',
                lastName:'',
                policies:[]
            },
            isReset:'',
            policySelected:{
                paymetPlan:'',
                policyNumber:'',
                groupNumber:''
            },
            error:{
                title:'', 
                code:'', 
                message:'',
                type:''
            },
        };

        this.doReload = this.doReload.bind(this);
        this.doSelectPolicy = this.doSelectPolicy.bind(this);
    }

    doReload(activePatientTab,patSeqno) {
        const {
            insuranceFindPatientRequest,
        } = this.props;

        this.setState({activePatientTab:activePatientTab,patSeqno:patSeqno});
        insuranceFindPatientRequest({id:patSeqno,patientType:activePatientTab});
    }

    doSelectPolicy(policy) {
        const {
            insurancePolicySelect,
        } = this.props;
        this.setState({policySelected: policy});
        insurancePolicySelect(policy);
    }

    render() {
        
        const {
            search,
            insurance,
            activePatientTab,
        } =  this.props;

        return (
            <Page 
                loading={insurance.loading}
                data={insurance.data}
                patSeqno={search.patient.id}
                policySelected={insurance.policySelected}
                isReset={insurance.isReset}
                activePatientTab={activePatientTab}
                doReload={this.doReload}
                doSelectPolicy={this.doSelectPolicy}
                error={insurance.error}
            />
        );
    }
}

const mapStateToProps = state => ({
    insurance:state.insurance,
    search: state.search,
});

const mapDispatchToProps = {
    insuranceFindPatientRequest,
    insurancePolicySelect,
};

export default connect(mapStateToProps, mapDispatchToProps)(Insurance);

