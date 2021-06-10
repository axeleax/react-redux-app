export const type = 'DEMOGRAPHIC_FIND_PATIENT_REQUEST';

const demographicFindPatientRequest = (params) => ({
    type,
    payload: params,
});

export default demographicFindPatientRequest;
