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
export function addE(payload) {
  console.log(JSON.stringify(payload))
  return request("http://localhost:4000/equipment/add",{
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
}
export function securitY(payload) {
  return request("http://localhost:4000/security",{
    method: 'get'
  })
}
export function owneR(payload) {
  return request("http://localhost:4000/owner",{
    method: 'get'
  })
}
export function addowner(payload) {
  return request("http://localhost:4000/owner/add",{
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
}
export function housinG(payload) {
  return request("http://localhost:4000/housing",{
    method: 'get'
  })
}
export function addhousing(payload) {
  return request("http://localhost:4000/housing/add",{
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
}
export function complainT(payload) {
  return request("http://localhost:4000/complaint",{
    method: 'get'
  })
}
export function addcomplaint(payload) {
  return request("http://localhost:4000/complaint/add",{
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
}
export function repaiR(payload) {
  return request("http://localhost:4000/repair",{
    method: 'get'
  })
}
export function addrepair(payload) {
  return request("http://localhost:4000/repair/add",{
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
}
export function reporT(payload) {
  return request("http://localhost:4000/report",{
    method: 'get'
  })
}