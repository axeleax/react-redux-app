export const type = 'SEARCH_QS1_PATIENT_REQUEST';

const searchQS1PatientRequest = (patSeqno) => ({
    type,
    payload: patSeqno,
});

export default searchQS1PatientRequest;
