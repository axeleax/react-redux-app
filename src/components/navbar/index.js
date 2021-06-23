import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';

class NavBar extends Component {
    render() {
        return (
            <Page  
                user={this.props.login.credentials} 
            />
        );
    }
}

const mapStateToProps = state => ({
    login: state.login,
});

const mapDispatchToProps = {
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(NavBar)
);
