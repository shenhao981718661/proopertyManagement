import request from '../utils/request';

export function changepassword(payload){
    return request('http://localhost:4000/user/changepassword',{
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(payload),
    })
}
export function questinfobyroom(payload){
    return request('http://localhost:4000/owner/queryUserInfo',{
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(payload),
    })
}
export function querypay(payload){
    return request('http://localhost:4000/pay/queryPay',{
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(payload),
    })
}