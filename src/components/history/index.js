import { React, Component} from 'react';
import { connect } from 'react-redux';
import SEGMENT_TYPE from '../../enum/segmentType';
import Page from './page';

class History extends Component {

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
                transactions:[]
            },
            isReset:'',
            transactionSelected:{
                number:'',
                type:'',
                autorization:'',
                date:'',
                company:'',
                additionalFees:'',
                totalPaid:''
            },
            error:{
                title:'', 
                code:'', 
                message:'',
                type:''
            },
        };

        this.doSelectTransaction = this.doSelectTransaction.bind(this);
    }

    doSelectTransaction(drug) {
        const {
            rxProfileDrugSelect,
        } = this.props;

        this.setState({drugSelected: drug});
        rxProfileDrugSelect(drug);
    }

    render() {
        
        const {
            history,
            search,
            patient,
        } =  this.props;

        return (
            <Page 
                loading={history.loading}
                data={history.data}
                patSeqno={search.patient.id}
                drugSelected={history.transactionSelected}
                isReset={history.isReset}
                activePatientTab={patient.activePatientTab}
                doSelectTransaction={this.doSelectTransaction}
                error={history.error}
            />
        );
    }
}

const mapStateToProps = state => ({
    history:state.history,
    patient: state.patient,
    search: state.search,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(History);

