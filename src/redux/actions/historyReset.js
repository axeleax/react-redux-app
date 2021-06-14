export const type = 'HISTORY_RESET';

const historyReset = (params) => ({
    type,
    payload: params,
});

export default historyReset;

