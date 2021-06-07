import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';

class Person extends Component {
   
    constructor(props) {
        super(props);
        
        this.state = {
            person:{
                id:'',
                firstName:'',
                lastName:'',
                gender:'',
                birthday:'',
                emails:[],
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
    }

    render() {
    
        const {detail} =  this.props;

        return (
            <Page
                person={detail.person}
                error={detail.error}
            />
        );
    }
}

const mapStateToProps = state => ({
    detail: state.detail,
});

const mapDispatchToProps = {
    
};

export default 
    connect(mapStateToProps, mapDispatchToProps)(Person);
