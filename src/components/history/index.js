import { React, Component} from 'react';
import { connect } from 'react-redux';
import historyTransactionSelect from '../../redux/actions/historyTransactionSelect';
import historyPageRequest from '../../redux/actions/historyPageRequest';
import Page from './page';

class History extends Component {

    constructor(props) {
        super(props);

        this.doSelectTransaction = this.doSelectTransaction.bind(this);
        this.doSelectPage = this.doSelectPage.bind(this);
    }

    doSelectTransaction(drug) {
        const {
            historyTransactionSelect,
        } = this.props;

        historyTransactionSelect(drug);
    }

    doSelectPage(page) {
        const {
            search,
            patient,
            rxProfile,
            historyPageRequest,
        } = this.props;

        historyPageRequest({id:search.patient.id,patientType:patient.activePatientTab,drugSelected:rxProfile.drugSelected,page:page});
    }

    render() {
        
        const {
            history,
        } =  this.props;

        return (
            <Page 
                loading={history.loading}
                loadingTable={history.loadingTable}
                data={history.data}
                transactionSelected={history.transactionSelected}
                activePage={history.activePage}
                isReset={history.isReset}
                doSelectTransaction={this.doSelectTransaction}
                doSelectPage={this.doSelectPage}
                tableError={history.tableError}
                error={history.error}
            />
        );
    }
}

const mapStateToProps = state => ({
    history:state.history,
    patient: state.patient,
    search: state.search,
    rxProfile:state.rxProfile,
});

const mapDispatchToProps = {
    historyPageRequest,
    historyTransactionSelect,
};

export default connect(mapStateToProps, mapDispatchToProps)(History);

