export const type = 'INSURANCE_FIND_PATIENT_SUCCESS';

const insuranceFindPatientSuccess = (data) => ({
    type,
    payload: data,
});

export default insuranceFindPatientSuccess;
