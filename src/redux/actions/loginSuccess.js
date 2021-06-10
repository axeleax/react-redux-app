export const type = 'LOGIN_SUCCESS';

const loginSuccess = (credentials) => ({
    type,
    payload: credentials,
});

export default loginSuccess;
