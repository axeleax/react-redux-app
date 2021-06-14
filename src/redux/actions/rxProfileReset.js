export const type = 'RX_PROFILE_RESET';

const rxProfileReset = (params) => ({
    type,
    payload: params,
});

export default rxProfileReset;

