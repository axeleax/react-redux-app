export const type = 'ISURANCE_PAGE_ERROR';

const insurancePageError = (error) => ({
    type,
    payload: error,
});

export default insurancePageError;
