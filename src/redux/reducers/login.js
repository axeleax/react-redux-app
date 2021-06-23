import { type as loginRequestType} from '../actions/loginRequest';
import { type as loginSuccessType} from '../actions/loginSuccess';
import { type as loginErrorType} from '../actions/loginError';
import { type as loginChangeType} from '../actions/loginChange';

const defaultState = {
    loading:'',
    credentials:{
        access:'',
        redirect:''
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

        case loginRequestType:
            return  {...state, loading:true}

        case loginSuccessType:
            return  {...state, credentials:action.credentials, error:defaultState.error, loading:false}

        case loginErrorType:

            const error =  {
                title:'Invalid user credentials', 
                code:'404 - Hoops!', 
                message:'The user or password are incorrect, please tray again !!',
                type:'warning'
            }

            return  {...state, credentials:defaultState.credentials, error : error, loading:false}

        case loginChangeType:
            return {...state ,error:defaultState.error}

        default:
            return state;
        
    }
}

export default reducer;
