export const type = 'HISTORY_FIND_PATIENT_ERROR';

const historyFindPatientError = (error) => ({
    type,
    payload: error,
});

export default historyFindPatientError;
