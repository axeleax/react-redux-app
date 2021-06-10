import { React, Component} from 'react';
import Page from './page';

class Alert extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isVisible:false,
            data:{
                title:'', 
                code:'', 
                message:'',
                type:''
            },
        };
    }

    render() {

        const {
            isVisible,
            data,
        } = this.props;

        return (
            <Page 
                isVisible={isVisible}
                data={data}
            />
        );
    }
}

export default Alert;
