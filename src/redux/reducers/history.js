import { type as historyFindPatientRequestType} from '../actions/historyFindPatientRequest';
import { type as historyFindPatientSuccessType} from '../actions/historyFindPatientSuccess';
import { type as historyFindPatientErrorType} from '../actions/historyFindPatientError';
import { type as historyTransactionSelectType} from '../actions/historyTransactionSelect';
import { type as historyPageRequestType} from '../actions/historyPageRequest';
import { type as historyPageSuccessType} from '../actions/historyPageSuccess';
import { type as historyPageErrorType} from '../actions/historyPageError';
import { type as historyResetType} from '../actions/historyReset';

const defaultState = {
    loading:false,
    loadingTable:false,
    activePage: 1,
    data:{
        id:'',
        firstName:'',
        lastName:'',
        transactions:[]
    },
    isReset:'',
    transactionSelected:{
        transaction:'',
        pricePlan:'',
        priceType:'',
        price:'',
        autorization:'',
        date:'',
        copay:'',
        quantity:'',
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
        
        case historyFindPatientRequestType:
            return {...state, data:defaultState.data, transactionSelected:defaultState.transactionSelected, error:defaultState.error,tableError:defaultState.tableError, isReset:true, loading:true};

        case historyFindPatientSuccessType:
            return {...state, data:action.data, error:defaultState.error,tableError:defaultState.tableError, loading:false};

        case historyFindPatientErrorType:

            const error =  {
                title:'Patient`s history not found', 
                code:'404 - Hoops!', 
                message:'We can`t found history for the patient profile, please tray again !!',
                type:'warning'
            }

            return  {...state,  date:defaultState.data, error : error, tableError:defaultState.tableError, loading:false};

        case historyTransactionSelectType:
            return {...state, transactionSelected:action.payload , isReset: false}   
        
        case historyResetType:
            return defaultState;

        case historyPageRequestType:
            return {...state, activePage:action.payload.page, transactionSelected:defaultState.transactionSelected, isReset:defaultState.isReset, loadingTable:true}

        case historyPageSuccessType:
            state.data.transactions = action.transactions;
            return {...state, loadingTable:false}

        case historyPageErrorType:
            
            const tableError =  {
                title:'Patient`s transactions not found', 
                code:'404 - Hoops!', 
                message:'We can`t found a Patient`s transactions, please tray again !!',
                type:'warning'
            }

            return  {...state, date:defaultState.data,error:defaultState.error, tableError:tableError, loading:false, loadingTable:false};

        default:
            return state;
        
    }
}

export default reducer;
