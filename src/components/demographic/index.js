import { React, Component} from 'react';
import { connect } from 'react-redux';
import SEGMENT_TYPE from '../../enum/segmentType';
import demographicFindPatientRequest from '../../redux/actions/demographicFindPatientRequest';
import Page from './page';

class Demographic extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            patSeqno:'',
            activePatientTab:'',
            activeSegmentTab:SEGMENT_TYPE.DEMOGRAPHIC,
            data:{
                id:'',
                firstName:'',
                lastName:'',
                gender:'',
                birthday:'',
                ssn:'',
                email:'',
                address:{
                    address1:'', 
                    address2:'',
                    city:'',
                    state:'',
                    zip:''
                },
                phone:'',
                type:'',
            },
            error:{
                title:'', 
                code:'', 
                message:'',
                type:''
            },
        };

        this.doReload = this.doReload.bind(this);
    }

    doReload(activePatientTab,patSeqno) {
        const {
            demographicFindPatientRequest,
        } = this.props;

        this.setState({activePatientTab:activePatientTab,patSeqno:patSeqno});
        demographicFindPatientRequest({id:patSeqno,patientType:activePatientTab});
    }

    render() {
        
        const {
            search,
            demographic,
            activePatientTab,
        } = this.props;

        return (
            <Page 
                loading={demographic.loading}
                data={demographic.data}
                patSeqno={search.patient.id}
                activePatientTab={activePatientTab}
                doReload={this.doReload}
                error={demographic.error}
            />
        );
    }
}

const mapStateToProps = state => ({
    demographic:state.demographic,
    search: state.search,
});

const mapDispatchToProps = {
    demographicFindPatientRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Demographic);

