export const type = 'INSURANCE_PAGE_REQUEST';

const insurancePageRequest = (params) => ({
    type,
    payload: params,
});

export default insurancePageRequest;
