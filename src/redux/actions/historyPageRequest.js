export const type = 'HISTORY_PAGE_REQUEST';

const historyPageRequest = (params) => ({
    type,
    payload: params,
});

export default historyPageRequest;
