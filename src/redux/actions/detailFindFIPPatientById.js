export const type = 'DETAIL_FIND_FIP_PATIENT_BY_ID';

const detailFindFIPPatientById = (id) => ({
    type,
    payload: id,
});

export default detailFindFIPPatientById;
