export const type = 'HISTORY_PAGE_SUCCESS';

const historyPageSuccess = (data) => ({
    type,
    payload: data,
});

export default historyPageSuccess;
