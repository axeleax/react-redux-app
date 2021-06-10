import { React, Component} from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import loginRequest from '../../redux/actions/loginRequest';
import ACCESS_TYPE from '../../enum/accessType';
import Page from './page';

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            lanId:'',
            password:'',
            credentials:{
                access: ACCESS_TYPE.DENIED,
                redirect:''
            },
            error:'',
        };

        this.doLogin = this.doLogin.bind(this);
        this.onChangeUser = this.onChangeUser.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    }

    onChangeUser(event) {
        this.setState({lanId:event.target.value});
    }

    onChangePassword(event) {
        this.setState({password:event.target.value});
    }

    doLogin() {
        const {
            loginRequest,
        } = this.props; 

        const {
            lanId,
            password,
        } = this.state; 

        if (lanId && password) {
            loginRequest({lanId:lanId, password:password});
        }
    }

    render() {

        const {
            login
        } = this.props;

        if(login.credentials.access === ACCESS_TYPE.GRANTED){
            return <Redirect to={login.credentials.redirect} />
        }

        return (
            <Page 
                loading={login.loading}
                error={login.error}
                doLogin={this.doLogin}
                onChangeUser={this.onChangeUser}
                onChangePassword={this.onChangePassword}
            />
        );
    }
}

const mapStateToProps = state => ({
    login: state.login,
});

const mapDispatchToProps = {
    loginRequest
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Login)
);
