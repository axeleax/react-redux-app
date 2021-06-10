export const type = 'SEARCH_QS1_PATIENT_ERROR';

const searchQS1PatientError = (error) => ({
    type,
    payload: error,
});

export default searchQS1PatientError;
