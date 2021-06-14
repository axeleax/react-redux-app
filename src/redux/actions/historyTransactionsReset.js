export const type = 'HISTORY_TRANSACTIONS_RESET';

const historyTransactionsReset = (params) => ({
    type,
    payload: params,
});

export default historyTransactionsReset;

