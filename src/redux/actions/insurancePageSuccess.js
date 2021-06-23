export const type = 'ISURANCE_PAGE_SUCCESS';

const insurancePageSuccess = (policies) => ({
    type,
    payload: policies,
});

export default insurancePageSuccess;
