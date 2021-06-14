export const type = 'INSURANCE_FIND_PATIENT_REQUEST';

const insuranceFindPatientRequest = (params) => ({
    type,
    payload: params,
});

export default insuranceFindPatientRequest;
