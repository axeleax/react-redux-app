export const type = 'RX_PROFILE_FIND_PATIENT_SUCCESS';

const rxProfileFindPatientSuccess = (data) => ({
    type,
    payload: data,
});

export default rxProfileFindPatientSuccess;
