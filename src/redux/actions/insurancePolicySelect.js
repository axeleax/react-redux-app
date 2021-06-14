export const type = 'ISURANCE_POLICY_SELECT';

const insurancePolicySelect = (policy) => ({
    type,
    payload: policy,
});

export default insurancePolicySelect;

