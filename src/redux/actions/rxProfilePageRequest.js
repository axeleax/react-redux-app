export const type = 'RX_PROFILE_PAGE_REQUEST';

const rxProfilePageRequest = (params) => ({
    type,
    payload: params,
});

export default rxProfilePageRequest;
