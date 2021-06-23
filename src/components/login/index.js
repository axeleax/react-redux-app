import { React, Component} from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import loginRequest from '../../redux/actions/loginRequest';
import loginChange from '../../redux/actions/loginChange';
import ACCESS_TYPE from '../../enum/accessType';
import Page from './page';

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            lanId:'',
            password:'',
        };

        this.doLogin = this.doLogin.bind(this);
        this.onChangeUser = this.onChangeUser.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    }

    onChangeUser(event) {
        const {
            loginChange,
        } = this.props; 

        this.setState({lanId:event.target.value});
        loginChange();
    }

    onChangePassword(event) {
        const {
            loginChange,
        } = this.props; 

        this.setState({password:event.target.value});
        loginChange();
    }

    doLogin() {
        const {
            loginRequest,
        } = this.props; 

        if (this.state.lanId && this.state.password) {
            loginRequest({id:this.state.lanId.trim(), password:this.state.password.trim()});
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
                lanId={login.lanId}
                password={login.password}
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
    loginRequest,
    loginChange
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Login)
);
