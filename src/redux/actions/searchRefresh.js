export const type = 'SEARCH_REFRESH';

const searchRefresh = (id) => ({
    type,
    payload: id,
});

export default searchRefresh;
