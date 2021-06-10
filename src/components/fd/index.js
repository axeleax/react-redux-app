import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';

class FD extends Component {
    
    render() {
        
        const {demographic} =  this.props;
        
        return (
            <Page
                data={demographic.fd}
                error={demographic.error}
            />
        );
    }
}

const mapStateToProps = state => ({
    demographic: state.demographic,
});

const mapDispatchToProps = {
    
};

export default 
    connect(mapStateToProps, mapDispatchToProps)(FD);
