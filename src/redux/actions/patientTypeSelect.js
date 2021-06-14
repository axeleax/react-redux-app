export const type = 'PATIENT_TYPE_SELECT';

const patientTypeSelect = (patientType) => ({
    type,
    payload: patientType,
});

export default patientTypeSelect;

