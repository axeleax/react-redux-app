import { type as detailFindFIPPatientByIdType} from '../actions/detailFindFIPPatientById';
import { type as detailFindPersonPatientByIdType} from '../actions/detailFindPersonPatientById';
import { type as detailFindQS1PatientByIdType} from '../actions/detailFindQS1PatientById';
import { type as detailReloadType} from '../actions/detailReload';

import fipPatients from '../../data/fipPatientList';
import personPatients from '../../data/personPatientList';
import qs1Patients from '../../data/qs1PatientList';

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
    person:{
        id:'',
        firstName:'',
        lastName:'',
        gender:'',
        birthday:'',
        ssn:'',
        emails:[],
        addresses:[],
        phones:[],
        link:'',
    },
    qs1:{
        id:'',
        firstName:'',
        lastName:'',
        gender:'',
        birthday:'',
        ssn:'',
        emails:[],
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

        case  detailFindFIPPatientByIdType:

            let fip = fipPatients.filter(n =>n.id === payload.id);
            if(fip.length === 0){
                return {
                    fip:state.fip,
                    person:state.person,
                    qs1:state.qs1,
                    error:{
                        title:'Patient not found', 
                        code:'404 - Hoops!', 
                        message:'We can`t found a Patient with the id ('+ payload.id +'), please tray again !!',
                        type:'warning'
                    }
                }
            }

            return { 
                fip:{
                    id:fip[0].id,
                    personId:fip[0].personId,
                    qs1Id:fip[0].qs1Id,
                    firstName:fip[0].firstName,
                    lastName:fip[0].lastName,
                    gender:fip[0].gender,
                    birthday:fip[0].birthday,
                    email:fip[0].email,
                    addresses:fip[0].addresses,
                    phones:fip[0].phones,
                },
                person:defaultState.person,
                qs1:defaultState.qs1,
                error:defaultState.error
            }

        case  detailFindPersonPatientByIdType:
            
            let person = personPatients.filter(n =>n.id === payload.personId);
            if(person.length === 0){
                return {
                    fip:state.fip,
                    person:state.person,
                    qs1:state.qs1,
                    error:{
                        title:'Patient not found', 
                        code:'404 - Hoops!', 
                        message:'We can`t found the Person related to the Patient id ('+ payload.id +'), This patient hasn`t been related with any Person yet !!',
                        type:'warning'
                    }
                }
            }

            return { 
                fip:state.fip,
                person:{
                    id:person[0].id,
                    firstName:person[0].firstName,
                    lastName:person[0].lastName,
                    gender:person[0].gender,
                    birthday:person[0].birthday,
                    emails:person[0].emails,
                    addresses:person[0].addresses,
                    phones:person[0].phones,
                },
                qs1:state.qs1,
                error:state.error
            }

        case  detailFindQS1PatientByIdType:

            let qs1 = qs1Patients.filter(n =>n.id === payload.qs1Id);
            if(qs1.length === 0){
                return {
                    fip:state.fip,
                    person:state.person,
                    qs1:state.qs1,
                    error:{
                        title:'Patient not found', 
                        code:'404 - Hoops!', 
                        message:'We can`t found the QS1 Patient related to the Patient id ('+ payload.id +'), This patient hasn`t been related with any QS1 Patient yet !!',
                        type:'warning'
                    }
                }
            }

            return { 
                fip:state.fip,
                person:state.person,
                qs1:{
                    id:qs1[0].id,
                    firstName:qs1[0].firstName,
                    lastName:qs1[0].lastName,
                    gender:qs1[0].gender,
                    birthday:qs1[0].birthday,
                    ssn:qs1[0].ssn,
                    emails:qs1[0].emails,
                    addresses:qs1[0].addresses,
                    phones:qs1[0].phones,
                },
                error:state.error
            }

        case detailReloadType :
            
            return {
                fip:state.fip,
                person:state.person,
                qs1:state.qs1,
                error:state.error,
                isReloading: payload
            } 

        default:
            return state;
        
    }
}

export default reducer;
