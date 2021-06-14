export const type = 'HISTORY_TRANSACTION_SELECT';

const historyTransactionSelect = (params) => ({
    type,
    payload: params,
});

export default historyTransactionSelect;

