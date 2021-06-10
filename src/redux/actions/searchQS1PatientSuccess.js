export const type = 'SEARCH_QS1_PATIENT_SUCCESS';

const searchQS1PatientSuccess = (demographic) => ({
    type,
    payload: demographic,
});

export default searchQS1PatientSuccess;
