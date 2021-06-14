import { type as historyFindPatientRequestType} from '../actions/historyFindPatientRequest';
import { type as historyFindPatientSuccessType} from '../actions/historyFindPatientSuccess';
import { type as historyFindPatientErrorType} from '../actions/historyFindPatientError';
import { type as historyTransactionSelectType} from '../actions/historyTransactionSelect';
import { type as historyTransactionsResetType} from '../actions/historyTransactionsReset';
import { type as historyResetType} from '../actions/historyReset';

const defaultState = {
    loading:'',
    data:{
        id:'',
        firstName:'',
        lastName:'',
        transactions:[]
    },
    isReset:'',
    transactionSelected:{
        number:'',
        type:'',
        autorization:'',
        date:'',
        company:'',
        additionalFees:'',
        totalPaid:''
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
        
        case historyFindPatientRequestType:
            return {...state, data:defaultState.data, transactionSelected:defaultState.transactionSelected, error:defaultState.error, isReset:true, loading:true};

        case historyFindPatientSuccessType:
            return {...state, data:action.data, error:defaultState.error, loading:false};

        case historyFindPatientErrorType:

            const error =  {
                title:'Patient`s Transactions not found', 
                code:'404 - Hoops!', 
                message:'We can`t found Transactions for the patient profile, please tray again !!',
                type:'warning'
            }

            return  {...state,  date:defaultState.data, error : error, loading:false};

        case historyTransactionSelectType:
            return {...state, transactionSelected:action.payload , isReset: false}   

        case historyTransactionsResetType:
            return {...state, transactionSelected:defaultState.transactionSelected, isReset:defaultState.isReset}
        
        case historyResetType:
            return defaultState;

        default:
            return state;
        
    }
}

export default reducer;
