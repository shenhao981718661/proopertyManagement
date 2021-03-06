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
export function queryuser(payload) {
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
export function editperson(payload) {
  console.log(payload)
  return request('http://localhost:4000/user/edit', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
}
export function removeperson(payload) {
  console.log(payload)
  return request('http://localhost:4000/user/remove', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
}

//设备管理
export function equipMentD(payload) {
  return request('http://localhost:4000/equipment', {
    method: 'get'
  })
}
export function addE(payload) {
  return request("http://localhost:4000/equipment/add",{
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
}
export function editequipment(payload) {
  return request("http://localhost:4000/equipment/edit",{
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
}
export function removeequipment(payload) {
  return request("http://localhost:4000/equipment/remove",{
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
export function addsecurity(payload) {
  return request("http://localhost:4000/security/add",{
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
}
export function editsecurity(payload) {
  return request("http://localhost:4000/security/edit",{
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
}
export function removesecurity(payload) {
  return request("http://localhost:4000/security/remove",{
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
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
export function removeowner(payload) {
  return request("http://localhost:4000/owner/remove",{
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
}
export function editowner(payload) {
  return request("http://localhost:4000/owner/edit",{
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
}
//住户管理模块
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
export function removehousing(payload) {
  return request("http://localhost:4000/housing/remove",{
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
}
export function edithousing(payload) {
  return request("http://localhost:4000/housing/edit",{
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
}

//投诉模块
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
export function removecomplaint(payload) {
  return request("http://localhost:4000/complaint/remove",{
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
}
export function editcomplaint(payload) {
  return request("http://localhost:4000/complaint/edit",{
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
}

//维修模块
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
export function removerepair(payload) {
  return request("http://localhost:4000/repair/remove",{
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
}
export function editrepair(payload) {
  return request("http://localhost:4000/repair/edit",{
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
export function removereport(payload) {
  return request("http://localhost:4000/report/remove",{
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
}
export function editreport(payload) {
  return request("http://localhost:4000/report/edit",{
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
}
export function paY(payload) {
  return request("http://localhost:4000/pay",{
    method: 'get'
  })
}
export function addpay(payload) {
  return request("http://localhost:4000/pay/add",{
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
}
export function editpay(payload) {
  return request("http://localhost:4000/pay/edit",{
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
}
export function removepay(payload) {
  console.log(payload)
  return request("http://localhost:4000/pay/remove",{
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
}
export function caR(payload) {
  return request("http://localhost:4000/car",{
    method: 'get'
  })
}
export function addcar(payload) {
  return request("http://localhost:4000/car/add",{
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
}
export function editcar(payload) {
  return request("http://localhost:4000/car/edit",{
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
}
export function removecar(payload) {
  console.log(payload)
  return request("http://localhost:4000/car/remove",{
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
}


export function messagE(payload) {
  return request("http://localhost:4000/message",{
    method: 'get'
  })
}

export function addmessage(payload) {
  return request("http://localhost:4000/message/add",{
    method: 'post',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
export function editmessage(payload) {
  return request("http://localhost:4000/message/edit",{
    method: 'post',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
export function removemessage(payload) {
  return request("http://localhost:4000/message/remove",{
    method: 'post',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
export function searchRoom(payload) {
  return request('http://localhost:4000/room',{
    method: 'get'
  })
}