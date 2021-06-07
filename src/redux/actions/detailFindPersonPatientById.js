export const type = 'DETAIL_FIND_PERSON_PATIENT_BY_ID';

const detailFindPersonPatientById = (id) => ({
    type,
    payload: id,
});

export default detailFindPersonPatientById;
