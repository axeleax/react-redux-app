export const type = 'LOGIN_ERROR';

const loginError = (error) => ({
    type,
    payload: error,
});

export default loginError;
