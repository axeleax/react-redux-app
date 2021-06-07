import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';

class Fip extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
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
    }
    
    render() {
        
        const {detail} =  this.props;

        return (
            <Page
                fip={detail.fip}
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
    connect(mapStateToProps, mapDispatchToProps)(Fip);
