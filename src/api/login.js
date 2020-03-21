import service from '@/utils/request.js';
import sha from 'js-sha1';
/* 
    登录
*/
export function login(data) {
    return service.request({
        method: 'POST',
        url: '/login',
        data: {
            username: data.username,
            password: sha(data.password)
        }
    });
}
/* 
    注册
*/
export function register(data) {
    return service.request({
        method: 'POST',
        url: '/register',
        data: {
            username: data.username,
            password: sha(data.password)
        }
    });
}