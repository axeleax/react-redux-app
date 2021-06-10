export const type = 'DEMOGRAPHIC_FIND_PATIENT_SUCCESS';

const demographicFindPatientSuccess = (data) => ({
    type,
    payload: data,
});

export default demographicFindPatientSuccess;
