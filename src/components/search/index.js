import { React, Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';
import searchPatientById from '../../redux/actions/searchPatientById';
import searchRefresh from '../../redux/actions/searchRefresh';
import detailFindFIPPatientById from '../../redux/actions/detailFindFIPPatientById';

class Search extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id:'',
            fip:{
                id:'',
                personId:'',
                qs1Id:'',
                firstName:'',
                lastName:'',
                gender:'',
                birthday:'',
                ssn:'',
                email:'',
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
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.goTo = this.goTo.bind(this);
    }

    onClick() {
        const {
            searchPatientById,
        } = this.props;

        if(this.state.id){
            searchPatientById(this.state.id.trim());
        }
    }

    onChange(id) {
        const {
            searchRefresh,
        } = this.props;

        let pId = id.trim();
        this.setState({id:pId});
        searchRefresh(pId);
    }

    goTo(path) {
        const {
            detailFindFIPPatientById,
        } = this.props;

        detailFindFIPPatientById({id:this.state.id});
        this.props.history.push(path);
    }

    render() {

        const {search} = this.props;
        
        return (
            <Page 
                id={search.id}
                patient={search.fip}
                error={search.error}
                onClick={this.onClick}
                onChange={this.onChange}
                goTo={this.goTo}
            />
        );
    }
}

const mapStateToProps = state => ({
    search: state.search,
});

const mapDispatchToProps = {
    searchPatientById,
    searchRefresh,
    detailFindFIPPatientById
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Search)
);
