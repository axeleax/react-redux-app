export const type = 'PATIENT_SEGMENT_SELECT';

const patientSegmentSelect = (segment) => ({
    type,
    payload: segment,
});

export default patientSegmentSelect;

