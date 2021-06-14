export const type = 'RX_PROFILE_FIND_PATIENT_ERROR';

const rxProfileFindPatientError = (error) => ({
    type,
    payload: error,
});

export default rxProfileFindPatientError;
