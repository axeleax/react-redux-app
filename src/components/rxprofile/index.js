import { React, Component} from 'react';
import { connect } from 'react-redux';
import rxProfileFindPatientRequest from '../../redux/actions/rxProfileFindPatientRequest';
import rxProfileDrugSelect from '../../redux/actions/rxProfileDrugSelect';
import rxProfilePageRequest from '../../redux/actions/rxProfilePageRequest';
import historyFindPatientRequest from '../../redux/actions/historyFindPatientRequest';
import Page from './page';

class RxProfile extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isModalOpen:false,
        };

        this.doReload = this.doReload.bind(this);
        this.doSelectDrug = this.doSelectDrug.bind(this);
        this.doModalShow = this.doModalShow.bind(this);
        this.doSelectPage = this.doSelectPage.bind(this);
    }

    doReload() {
        const {
            search,
            patient,
            rxProfileFindPatientRequest,
        } = this.props;

        rxProfileFindPatientRequest({id:search.patient.id,patientType:patient.activePatientTab});
    }

    doSelectDrug(drug) {
        const {
            rxProfileDrugSelect,
        } = this.props;
        
        rxProfileDrugSelect(drug);
    }

    doSelectPage(page) {
        const {
            search,
            patient,
            rxProfile,
            rxProfilePageRequest,
        } = this.props;
        
        rxProfilePageRequest({id:search.patient.id,patientType:patient.activePatientTab,page:page,drugSelected:rxProfile.drugSelected});
    }

    doModalShow(open){
        const {
            search,
            patient,
            rxProfile,
            historyFindPatientRequest,
        } = this.props;

        historyFindPatientRequest({id:search.patient.id,patientType:patient.activePatientTab,drugSelected:rxProfile.drugSelected});
        this.setState({isModalOpen: open});
    }

    render() {
        
        const {
            rxProfile,
        } =  this.props;

        return (
            <Page 
                loading={rxProfile.loading}
                loadingTable={rxProfile.loadingTable}
                data={rxProfile.data}
                drugSelected={rxProfile.drugSelected}
                isReset={rxProfile.isReset}
                activePage={rxProfile.activePage}
                isModalOpen={this.state.isModalOpen}
                doReload={this.doReload}
                doSelectDrug={this.doSelectDrug}
                doModalShow={this.doModalShow}
                doSelectPage={this.doSelectPage}
                tableError={rxProfile.tableError}
                error={rxProfile.error}
            />
        );
    }
}

const mapStateToProps = state => ({
    rxProfile:state.rxProfile,
    search: state.search,
    patient: state.patient,
});

const mapDispatchToProps = {
    rxProfileFindPatientRequest,
    rxProfileDrugSelect,
    rxProfilePageRequest,
    historyFindPatientRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(RxProfile);

