import { type as insuranceFindPatientRequestType} from '../actions/insuranceFindPatientRequest';
import { type as insuranceFindPatientSuccessType} from '../actions/insuranceFindPatientSuccess';
import { type as insuranceFindPatientErrorType} from '../actions/insuranceFindPatientError';
import { type as insuranceResetType} from '../actions/insuranceReset';
import { type as insurancePolicySelectType} from '../actions/insurancePolicySelect';
import { type as insurancePageRequestType} from '../actions/insurancePageRequest';
import { type as insurancePageSuccessType} from '../actions/insurancePageSuccess';
import { type as insurancePageErrorType} from '../actions/insurancePageError';

const defaultState = {
    loading:false,
    loadingTable:false,
    activePage: 1,
    data:{
        id:'',
        firstName:'',
        lastName:'',
        policies:[],
        policiesCount:0
    },
    isReset:true,
    policySelected:{
        paymetPlan:'',
        policyNumber:'',
        groupNumber:''
    },
    tableError:{
        title:'', 
        code:'', 
        message:'',
        type:''
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
            return {...state, data:defaultState.data, policySelected:defaultState.policySelected, error:defaultState.error,tableError:defaultState.tableError, isReset:true, loading:true, loadingTable:true};

        case insuranceFindPatientSuccessType:
            return {...state, data:action.data, error:defaultState.error, tableError:defaultState.tableError,loading:false, loadingTable:true};

        case insuranceFindPatientErrorType:

            const error =  {
                title:'Patient`s insurace not found', 
                code:'404 - Hoops!', 
                message:'We can`t found a Patient`s insurance, please tray again !!',
                type:'warning'
            }

            return  {...state, date:defaultState.data, error:error, tableError:defaultState.tableError,loading:false};
        case insurancePolicySelectType:
            return {...state, policySelected:action.payload , isReset: false}   
    
        case insuranceResetType:
            return defaultState;

        case insurancePageRequestType:
            return {...state, activePage:action.payload.page, policySelected:defaultState.policySelected, isReset:defaultState.isReset, loadingTable:true}

        case insurancePageSuccessType:
            state.data.policies = action.policies;
            return {...state, loadingTable:false}

        case insurancePageErrorType:
            
            const tableError =  {
                title:'Patient`s policies not found', 
                code:'404 - Hoops!', 
                message:'We can`t found a Patient`s policies, please tray again !!',
                type:'warning'
            }

            return  {...state, date:defaultState.data, error:defaultState.error, tableError:tableError, loading:false, loadingTable:false};

        default:
            return state;
        
    }
}

export default reducer;
