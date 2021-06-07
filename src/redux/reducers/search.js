import { type as searchPatientByIdType} from '../actions/searchPatientById';
import { type as searchRefreshType} from '../actions/searchRefresh';

import fipPatients from '../../data/fipPatientList';

const defaultState = {
    fip:{
        id:'',
        personId:'',
        qs1Id:'',
        firstName:'',
        lastName:'',
        gender:'',
        birthday:'',
        ssn:'',
        email:'',
        addresses:[],
        phones:[],
        link:'',
    },
    error:{
        title:'', 
        code:'', 
        message:'',
        type:''
    },
};

function reducer(state = defaultState, { type, payload }) {

    switch (type) {
    
        case searchPatientByIdType:
            
            let patient = fipPatients.filter(n =>n.id === payload);
            if(patient.length === 0){
                return {
                    fip:defaultState.fip,
                    error:{
                        title:'Patient not found', 
                        code:'404 - Hoops!', 
                        message:'We can`t found a Patient with the id ('+ payload +'), please tray again !!',
                        type:'warning'
                    }
                }
            }

            return { 
                fip:{
                    id:patient[0].id,
                    personId:patient[0].personId,
                    qs1Id:patient[0].qs1Id,
                    firstName:patient[0].firstName,
                    lastName:patient[0].lastName,
                    gender:patient[0].gender,
                    birthday:patient[0].birthday,
                    ssn:patient[0].ssn,
                    email:patient[0].email,
                    addresses:patient[0].addresses,
                    phones:patient[0].phones,
                    link: `/patient/${patient[0].id}`
                },
                error:defaultState.error
            }

        case  searchRefreshType:
            if(payload === ""){
                return defaultState;
            }
            return {
                fip:defaultState.fip,
                error:defaultState.error
            };
            
        default:
            return state;
        
    }
}

export default reducer;
