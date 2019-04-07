import request from '../utils/request';
import { get } from 'https';

export function query(payload) {
  return request('http://localhost:4000/user',{
    method: 'post',
    headers: {
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: JSON.stringify(payload),
  });
}
export function queryUser(payload) {
  return request('http://localhost:4000/user/person', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
export function addUser(payload) {
  console.log(payload)
  return request('http://localhost:4000/user/adduser', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
}
export function equipMentD(payload) {
  return request('http://localhost:4000/equipment', {
    method: 'get'
  })
}
