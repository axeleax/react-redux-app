import { type as searchQS1PatientRequestType} from '../actions/searchQS1PatientRequest';
import { type as searchQS1PatientSuccesType} from '../actions/searchQS1PatientSuccess';
import { type as searchQS1PatientErrorType} from '../actions/searchQS1PatientError';
import { type as searchResetType} from '../actions/searchReset';

const defaultState = {
    loading:'',
    patient:{
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
    error:{
        title:'', 
        code:'', 
        message:'',
        type:''
    },
};

function reducer(state = defaultState, action) {

    switch (action.type) {
    
        case searchQS1PatientRequestType:
            return {...state, loading:true};

        case searchQS1PatientSuccesType:
            return {...state, patient:action.patient, error:defaultState.error, loading:false};

        case searchQS1PatientErrorType:

            const error =  {
                title:'Patient not found', 
                code:'404 - Hoops!', 
                message:'We can`t found a Patient with the id ('+ action.payload +'), please tray again !!',
                type:'warning'
            }

            return  {...state, patient:defaultState.patient ,error : error, loading:false};
        case searchResetType:
            return defaultState;  
            
        default:
            return state;
        
    }
}

export default reducer;
