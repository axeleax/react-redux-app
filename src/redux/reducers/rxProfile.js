import { type as rxProfileFindPatientRequestType} from '../actions/rxProfileFindPatientRequest';
import { type as rxProfileFindPatientSuccessType} from '../actions/rxProfileFindPatientSuccess';
import { type as rxProfileFindPatientErrorType} from '../actions/rxProfileFindPatientError';
import { type as rxProfileResetType} from '../actions/rxProfileReset';
import { type as rxProfileDrugsResetType} from '../actions/rxProfileDrugsReset';
import { type as rxProfileDrugSelectType} from '../actions/rxProfileDrugSelect';

const defaultState = {
    loading:'',
    data:{
        id:'',
        firstName:'',
        lastName:'',
        drugs:[]
    },
    isReset:'',
    drugSelected:{
        rxNumber:'',
        drug:'',
        generic:'',
        quantity:'',
        date:'',
        authirized:'',
        dispensed:'',
        refillsRemaining:'',
        patLastPaid:''
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
        
        case rxProfileFindPatientRequestType:
            return {...state, data:defaultState.data, drugSelected:defaultState.drugSelected, error:defaultState.error, isReset:true, loading:true};

        case rxProfileFindPatientSuccessType:
            return {...state, data:action.data, error:defaultState.error, loading:false};

        case rxProfileFindPatientErrorType:

            const error =  {
                title:'Patient`s RX profile not found', 
                code:'404 - Hoops!', 
                message:'We can`t found a Patient`s RX profile, please tray again !!',
                type:'warning'
            }

            return  {...state,  date:defaultState.data, error : error, loading:false};

        case rxProfileDrugSelectType:
            return {...state, drugSelected:action.payload , isReset: false}   

        case rxProfileDrugsResetType:
            return {...state, drugSelected:defaultState.drugSelected, isReset:defaultState.isReset}
        
        case rxProfileResetType:
            return defaultState;

        default:
            return state;
        
    }
}

export default reducer;
