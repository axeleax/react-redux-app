export const type = 'SEARCH_RESET';

const searchReset = (params) => ({
    type,
    payload: params,
});

export default searchReset;
