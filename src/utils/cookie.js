import Cookie from 'js-cookie';

//Token
export const getToken = () => {
    return Cookie.get('token');
};
export const setToken = (value) => {
    Cookie.set('token', value);
};

//clearToken
export const clearToken = () => {
    Cookie.remove('token');
};