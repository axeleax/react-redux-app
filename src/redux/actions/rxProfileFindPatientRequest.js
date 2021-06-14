export const type = 'RX_PROFILE_FIND_PATIENT_REQUEST';

const rxProfileFindPatientRequest = (params) => ({
    type,
    payload: params,
});

export default rxProfileFindPatientRequest;
