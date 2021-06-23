export const type = 'RX_PROFILE_PAGE_ERROR';

const rxProfilePageError = (error) => ({
    type,
    payload: error,
});

export default rxProfilePageError;
