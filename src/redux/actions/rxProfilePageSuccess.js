export const type = 'RX_PROFILE_PAGE_SUCCESS';

const rxProfilePageSuccess = (drugs) => ({
    type,
    payload: drugs,
});

export default rxProfilePageSuccess;
