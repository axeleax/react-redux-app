export const type = 'HISTORY_FIND_PATIENT_REQUEST';

const historyFindPatientRequest = (params) => ({
    type,
    payload: params,
});

export default historyFindPatientRequest;
