export const type = 'HISTORY_FIND_PATIENT_SUCCESS';

const historyFindPatientSuccess = (data) => ({
    type,
    payload: data,
});

export default historyFindPatientSuccess;
