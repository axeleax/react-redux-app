import { React, Component} from 'react';
import { connect } from 'react-redux';
import demographicFindPatientRequest from '../../redux/actions/demographicFindPatientRequest';
import Page from './page';

class Demographic extends Component {

    constructor(props) {
        super(props);

        this.doReload = this.doReload.bind(this);
    }

    doReload() {
        const {
            search,
            patient,
            demographicFindPatientRequest,
        } = this.props;

        demographicFindPatientRequest({id:search.patient.id,patientType:patient.activePatientTab});
    }

    render() {
        
        const {
            demographic,
            activePatientTab,
        } = this.props;

        return (
            <Page 
                loading={demographic.loading}
                data={demographic.data}
                activePatientTab={activePatientTab}
                doReload={this.doReload}
                error={demographic.error}
            />
        );
    }
}

const mapStateToProps = state => ({
    demographic:state.demographic,
    patient:state.patient,
    search: state.search,
});

const mapDispatchToProps = {
    demographicFindPatientRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Demographic);

