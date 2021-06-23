export const type = 'HISTORY_PAGE_ERROR';

const historyPageError = (error) => ({
    type,
    payload: error,
});

export default historyPageError;
