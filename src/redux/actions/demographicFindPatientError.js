export const type = 'DEMOGRAPHIC_FIND_PATIENT_ERROR';

const demographicFindPatientError = (error) => ({
    type,
    payload: error,
});

export default demographicFindPatientError;
