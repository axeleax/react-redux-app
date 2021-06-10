import { type as demographicFindPatientRequestType} from '../actions/demographicFindPatientRequest';
import { type as demographicFindPatientSuccessType} from '../actions/demographicFindPatientSuccess';
import { type as demographicFindPatientErrorType} from '../actions/demographicFindPatientError';

const defaultState = {
    loading:'',
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
        type:'',
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


        case  demographicFindPatientRequestType:
            return {...state, loading:true};

        case  demographicFindPatientSuccessType:
            return {...state, data:action.data, error:defaultState.error, loading:false};

        case demographicFindPatientErrorType:

            const error =  {
                title:'Patient`s demographic not found', 
                code:'404 - Hoops!', 
                message:'We can`t found a Patient`s demographic with, please tray again !!',
                type:'warning'
            }

            return  {...state, demographic:defaultState.demographic ,error : error, loading:false};

        default:
            return state;
        
    }
}

export default reducer;
