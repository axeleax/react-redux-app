export const type = 'SEARCH_QS1_PATIENT_SUCCESS';

const searchQS1PatientSuccess = (patient) => ({
    type,
    payload: patient,
});

export default searchQS1PatientSuccess;
