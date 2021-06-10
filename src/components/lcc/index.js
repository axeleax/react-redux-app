import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';

class LCC extends Component {

    render() {
        
        const {demographic} =  this.props;

        return (
            <Page
                data={demographic.lcc}
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
    connect(mapStateToProps, mapDispatchToProps)(LCC);
