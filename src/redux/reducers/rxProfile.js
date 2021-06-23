import { type as rxProfileFindPatientRequestType} from '../actions/rxProfileFindPatientRequest';
import { type as rxProfileFindPatientSuccessType} from '../actions/rxProfileFindPatientSuccess';
import { type as rxProfileFindPatientErrorType} from '../actions/rxProfileFindPatientError';
import { type as rxProfileResetType} from '../actions/rxProfileReset';
import { type as rxProfileDrugSelectType} from '../actions/rxProfileDrugSelect';
import { type as rxProfilePageRequestType} from '../actions/rxProfilePageRequest';
import { type as rxProfilePageSuccessType} from '../actions/rxProfilePageSuccess';
import { type as rxProfilePageErrorType} from '../actions/rxProfilePageError';

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
        
        case rxProfileFindPatientRequestType:
            return {...state, data:defaultState.data, drugSelected:defaultState.drugSelected, error:defaultState.error,tableError:defaultState.tableError, isReset:true, loading:true};

        case rxProfileFindPatientSuccessType:
            return {...state, data:action.data, error:defaultState.error,tableError:defaultState.tableError, loading:false};

        case rxProfileFindPatientErrorType:

            const error =  {
                title:'Patient`s RX profile not found', 
                code:'404 - Hoops!', 
                message:'We can`t found a Patient`s RX profile, please tray again !!',
                type:'warning'
            }

            return  {...state,  date:defaultState.data, error : error,tableError:defaultState.tableError, loading:false};

        case rxProfileDrugSelectType:
            return {...state, drugSelected:action.payload , isReset: false}   

        case rxProfilePageRequestType:
            return {...state, activePage:action.payload.page, drugSelected:defaultState.drugSelected, isReset:defaultState.isReset, loadingTable:true}

        case rxProfilePageSuccessType:
            state.data.drugs = action.drugs;
            return {...state, loadingTable:false}

        case rxProfilePageErrorType:
            
            const tableError =  {
                title:'Patient`s drugs not found', 
                code:'404 - Hoops!', 
                message:'We can`t found a Patient`s drugs, please tray again !!',
                type:'warning'
            }

            return  {...state, date:defaultState.data, error:defaultState.error, tableError:tableError, loading:false, loadingTable:false};
    
        
        case rxProfileResetType:
            return defaultState;

        default:
            return state;
        
    }
}

export default reducer;
