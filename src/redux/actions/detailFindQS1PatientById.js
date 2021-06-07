export const type = 'DETAIL_FIND_QS1_PATIENT_BY_ID';

const detailFindQS1PatientById = (id) => ({
    type,
    payload: id,
});

export default detailFindQS1PatientById;
