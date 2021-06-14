import { type as insuranceFindPatientRequestType} from '../actions/insuranceFindPatientRequest';
import { type as insuranceFindPatientSuccessType} from '../actions/insuranceFindPatientSuccess';
import { type as insuranceFindPatientErrorType} from '../actions/insuranceFindPatientError';
import { type as insuranceResetType} from '../actions/insuranceReset';
import { type as insurancePoliciesResetType} from '../actions/insurancePoliciesReset';
import { type as insurancePolicySelectType} from '../actions/insurancePolicySelect';

const defaultState = {
    loading:false,
    data:{
        id:'',
        firstName:'',
        lastName:'',
        policies:[]
    },
    isReset:true,
    policySelected:{
        paymetPlan:'',
        policyNumber:'',
        groupNumber:''
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


        case insuranceFindPatientRequestType:
            return {...state, data:defaultState.data, policySelected:defaultState.policySelected, error:defaultState.error, isReset:true, loading:true};

        case insuranceFindPatientSuccessType:
            return {...state, data:action.data, error:defaultState.error, loading:false};

        case insuranceFindPatientErrorType:

            const error =  {
                title:'Patient`s insurace not found', 
                code:'404 - Hoops!', 
                message:'We can`t found a Patient`s insurance, please tray again !!',
                type:'warning'
            }

            return  {...state, date:defaultState.data, error:error, loading:false};
        case insurancePolicySelectType:
            return {...state, policySelected:action.payload , isReset: false}   

        case insurancePoliciesResetType:
            return {...state, policySelected:defaultState.policySelected, isReset:defaultState.isReset}
       
        case insuranceResetType:
            return defaultState;

        default:
            return state;
        
    }
}

export default reducer;
