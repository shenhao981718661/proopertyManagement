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