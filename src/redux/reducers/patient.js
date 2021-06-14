import { type as patientTypeSelectType} from '../actions/patientTypeSelect';
import { type as patientSegmentSelectType} from '../actions/patientSegmentSelect';

const defaultState = {
    activePatientTab:'',
    activeSegmentTab:'',
};

function reducer(state = defaultState, action) {

    switch (action.type) {
    
        case patientTypeSelectType:
           
            return {...state, activePatientTab:action.payload};

        case patientSegmentSelectType:
            return {...state, activeSegmentTab:action.payload};

        default:
            return state;
        
    }
}

export default reducer;
