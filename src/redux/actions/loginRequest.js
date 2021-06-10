export const type = 'LOGIN_REQUEST';

const loginRequest = (credentials) => ({
    type,
    payload: credentials,
});

export default loginRequest;
