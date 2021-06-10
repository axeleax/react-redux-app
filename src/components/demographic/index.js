import { React, Component} from 'react';
import { connect } from 'react-redux';
import demographicFindPatientRequest from '../../redux/actions/demographicFindPatientRequest';
import Page from './page';

class Demographic extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            activeTab:'',
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

    doReload(activeTab,demographic) {
        const {
            demographicFindPatientRequest,
        } = this.props;

        this.setState({activeTab:activeTab});
        demographicFindPatientRequest({id:demographic.id,type:activeTab});
    }

    render() {
        
        const {
            demographic,
            activeTab,
        } = this.props;

        return (
            <Page 
                loading={demographic.loading}
                data={demographic.data}
                activeTab={activeTab}
                doReload={this.doReload}
            />
        );
    }
}

const mapStateToProps = state => ({
    demographic:state.demographic
});

const mapDispatchToProps = {
    demographicFindPatientRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Demographic);

