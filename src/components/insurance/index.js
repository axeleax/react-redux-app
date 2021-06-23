import { React, Component} from 'react';
import { connect } from 'react-redux';
import insuranceFindPatientRequest from '../../redux/actions/insuranceFindPatientRequest';
import insurancePolicySelect from '../../redux/actions/insurancePolicySelect';
import insurancePageRequest from '../../redux/actions/insurancePageRequest';
import Page from './page';

class Insurance extends Component {

    constructor(props) {
        super(props);
        
        this.doReload = this.doReload.bind(this);
        this.doSelectPolicy = this.doSelectPolicy.bind(this);
        this.doSelectPage = this.doSelectPage.bind(this);
    }

    doReload() {
        const {
            search,
            patient,
            insuranceFindPatientRequest,
        } = this.props;
        
        insuranceFindPatientRequest({id:search.patient.id,patientType:patient.activePatientTab});
    }

    doSelectPolicy(policy) {
        const {
            insurancePolicySelect,
        } = this.props;

        insurancePolicySelect(policy);
    }

    doSelectPage(page) {
        const {
            search,
            patient,
            insurancePageRequest,
        } = this.props;
        
        insurancePageRequest({id:search.patient.id,patientType:patient.activePatientTab,page:page});
    }

    render() {
        
        const {
            insurance,
        } =  this.props;

        return (
            <Page 
                loading={insurance.loading}
                loadingTable={insurance.loadingTable}
                data={insurance.data}
                policySelected={insurance.policySelected}
                isReset={insurance.isReset}
                activePage={insurance.activePage}
                doReload={this.doReload}
                doSelectPolicy={this.doSelectPolicy}
                doSelectPage={this.doSelectPage}
                tableError={insurance.tableError}
                error={insurance.error}
            />
        );
    }
}

const mapStateToProps = state => ({
    insurance:state.insurance,
    search: state.search,
    patient:state.patient
});

const mapDispatchToProps = {
    insuranceFindPatientRequest,
    insurancePolicySelect,
    insurancePageRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Insurance);

