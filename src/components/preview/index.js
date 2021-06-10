import { React, Component} from 'react';
import Page from './page';

class Preview extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isVisible:false,
            data:{
                id:'',
                firstName:'',
                lastName:'',
                gender:'',
                birthday:'',
                ssn:'',
                email:'',
                address:{
                    address1:'', 
                    address2:'',
                    city:'',
                    state:'',
                    zip:''
                },
                phone:'',
                link:'',
            },
            goTo:''
        };
    }

    render() {

        const {
            isVisible,
            data,
            goTo,
        } = this.props;

        return (
            <Page 
                isVisible={isVisible}
                data={data}
                goTo={goTo}
            />
        );
    }
}

export default Preview;
