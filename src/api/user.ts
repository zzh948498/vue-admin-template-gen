import request from 'axios';
import { hex_md5 as hexMd5 } from 'react-native-md5';
export interface LoginApiInput {
    username: string;
    password: string;
}
export function loginApi(data: LoginApiInput) {
    console.log(hexMd5('1'));
    return request({
        url: '/mocks/user/login',
        method: 'get',
        params: data,
    }).then(data => data.data);
}

export function getInfo(token: string) {
    return request({
        url: '/mocks/user/info',
        method: 'get',
        params: { token },
    }).then(data => data.data);
}

export function logout(token: string) {
    return request({
        url: '/mocks/user/logout',
        method: 'get',
        params: { token },
    }).then(data => data.data);
}
