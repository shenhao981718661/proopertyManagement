import {query, 
  queryUser, 
  addUser,
  equipMentD, 
  addE, 
  securitY, 
  owneR, 
  addowner, 
  housinG, 
  addhousing,
  complainT,
  addcomplaint,
  repaiR,
  addrepair,
  reporT,
} from '../services/example.js'
import {message} from 'antd'
import security from '../components/security/security.js';
export default {

  namespace: 'example',

  state: {
    data: '',
    type: 0,
    userList: [],
    equipmentSource: [],
    securitySource: [],
    ownerSource: [],
    housingSource: [],
    complaintSource: [],
    repairSource: [],
    reportSource: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *login({payload: {data}}, {call, put}) {
      const cb = yield call(query, data)
      console.log(cb.data.success)
      if(cb && cb.data){
        if(cb.data.success){
          yield put({type: 'changType', data: cb.data.type})
          window.location.hash = 'index'
        }else{
          message.error('用户名或密码错误')
        }
      }
    },
    *queryUser({payload: {data}}, {call, put}) {
      const cb = yield call(queryUser, {data})
      console.log(cb)
      if(cb){
        yield put({type: 'changeUserList', data: cb.data})
      }
    },
    *addUser({payload: {data}}, {call, put}){
      console.log(data)
      const cb = yield call(addUser, data)
      if(cb){
        console.log("成功")
      }
    },
    *equipment(payload,{call,put}){
      const cb = yield call(equipMentD)
      if(cb){
        yield put({type: 'equipmentSource', data: cb.data})
      }
    },
    *addEquipment({payload: {data}}, {call, pull}){
      console.log(data)
      const cb = yield call(addE, data)
      if(cb){
        message.success("添加成功")
      }
    },
    *security(payload, {call, put}){
      const cb = yield call(securitY)
      console.log(cb)
      if(cb){
        yield put({type: 'securitySource', data: cb.data})
      }
    },
    *owner(payload, {call, put}){
      const cb = yield call(owneR)
      if(cb){
        yield put({type: 'ownerSource', data: cb.data})
      }
    },
    *addOwner({payload: {data}}, {call, put}){
      const cb = yield call(addowner, data)
      if(cb){
        message.success("添加成功")
      }
    },
    *housing(payload, {call, put}){
      const cb = yield call(housinG)
      if(cb){
        yield put({type: 'housingSource', data: cb.data})
      }
    },
    *addHousing({payload: {data}}, {call, put}){
      const cb = yield call(addhousing, data)
      if(cb){
        message.success("添加成功")
      }
    },
    *complaint(payload, {call, put}){
      const cb = yield call(complainT)
      if(cb){
        yield put({type: 'complaintSource', data: cb.data})
      }
    },
    *addComplaint({payload: {data}}, {call, put}){
      const cb = yield call(addcomplaint, data)
      if(cb){
        message.success("添加成功")
      }
    },
    *repair(payload, {call, put}){
      const cb = yield call(repaiR)
      if(cb){
        yield put({type: 'repairSource', data: cb.data})
      }
    },
    *addRepair({payload: {data}}, {call, put}){
      const cb = yield call(addrepair, data)
      if(cb){
        message.success("添加成功")
      }
    },
    *report(payload, {call, put}){
      const cb = yield call(reporT)
      if(cb){
        yield put({type: 'reportSource', data: cb.data})
      }
    },

  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    addData(state, {payload}){
      return {...state, ...payload}
    },
    changType(state, {data}) {
      return {...state, type: data}
    },
    changeUserList(state, {data}){
      return {...state, userList:data}
    },
    equipmentSource(state, {data}){
      return {...state, equipmentSource: data}
    },
    securitySource(state, {data}){
      console.log(data)
      return {...state, securitySource: data}
    },
    ownerSource(state, {data}){
      return {...state, ownerSource: data}
    },
    housingSource(state, {data}){
      return {...state, housingSource: data}
    },
    complaintSource(state, {data}){
      return {...state, complaintSource: data}
    },
    repairSource(state, {data}){
      return {...state, repairSource: data}
    },
    reportSource(state, {data}){
      return {...state, reportSource: data}
    },
  },

};
