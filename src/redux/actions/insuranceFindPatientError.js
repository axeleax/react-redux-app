export const type = 'INSURANCE_FIND_PATIENT_ERROR';

const insuranceFindPatientError = (error) => ({
    type,
    payload: error,
});

export default insuranceFindPatientError;
