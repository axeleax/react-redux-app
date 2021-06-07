import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';

class Qs1 extends Component {
   
    constructor(props) {
        super(props);
        
        this.state = {
            qs1:{
                id:'',
                firstName:'',
                lastName:'',
                gender:'',
                birthday:'',
                ssn:'',
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
                qs1={detail.qs1}
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
    connect(mapStateToProps, mapDispatchToProps)(Qs1);
