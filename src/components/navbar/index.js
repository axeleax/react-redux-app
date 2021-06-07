import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';

class NavBar extends Component {
    render() {
        return (
            <Page   
            />
        );
    }
}

const mapStateToProps = state => ({
   
});

const mapDispatchToProps = {
    
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(NavBar)
);
