export const type = 'SEARCH_PATIENT_BY_ID';

const searchPatientById = (id) => ({
    type,
    payload: id,
});

export default searchPatientById;
