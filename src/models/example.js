import {query, 
  queryuser, 
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
  paY,
  addpay,
  caR,
  addcar,
  messagE,
  editcar,
  editequipment,
  removecar,
  removeequipment,
  editperson,
  removeperson,
  addsecurity,
  editsecurity,
  removesecurity,
  removeowner,
  editowner,
  edithousing,
  removehousing,
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
    paySource: [],
    carSource: [],
    messageSource: [],
    showEdit: false,
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
    *queryUser(payload, {call, put}) {
      console.log("123")
      const cb = yield call(queryuser)
      if(cb){
        yield put({type: 'changeUserList', data: cb.data})
      }
    },
    *addUser({payload: {data}}, {call, put}){
      const cb = yield call(addUser, data)
      if(cb){
        message.success("添加成功")
        yield put({type: 'queryUser'})
      }
    },
    *editPerson({payload: {data}}, {call, put}){
      const cb = yield call(editperson, data)
      if(cb){
          message.success("修改成功")
          yield put({type: 'changeEdit',payload:{data: false} })
          yield put({type: 'queryUser'})
      }
    },
    *removePerson({payload: {data}}, {call, put}){
      const cb = yield call(removeperson, data)
      if(cb){
          message.success("删除成功")
          yield put({type: 'queryUser'})
        }
    },
    *equipment(payload,{call,put}){
      const cb = yield call(equipMentD)
      if(cb){
        yield put({type: 'equipmentSource', data: cb.data})
      }
    },
    *addEquipment({payload: {data}}, {call, put}){
      console.log(data)
      const cb = yield call(addE, data)
      if(cb){
        message.success("添加成功")
        yield put({type: 'equipment'})
      }
    },
    *editEquipment({payload: {data}}, {call, put}){
      const cb = yield call(editequipment,data)
      if(cb){
        message.success("修改成功")
        yield put({type: 'changeEdit',payload:{data: false} })
        yield put({type: 'equipment'})
      }
    },
    *removeEquipment({payload: {data}},{call, put}){
      const cb = yield call(removeequipment,data)
      if(cb){
        message.success("删除成功")
        yield put({type: 'equipment'})
      }
    },
    *security(payload, {call, put}){
      const cb = yield call(securitY)
      console.log(cb)
      if(cb){
        yield put({type: 'securitySource', data: cb.data})
      }
    },
    *addSecurity({payload: {data}}, {call, put}){
      const cb = yield call(addsecurity, data)
      if(cb){
        yield put({type: 'security'})
        message.success("添加成功")
      }
    },
    *editSecurity({payload: {data}}, {call, put}){
      const cb = yield call(editsecurity, data)
      if(cb){
        yield put({type: 'security'})
        yield put({type: 'changeEdit',payload:{data: false} })
        message.success("修改成功")
      }
    },
    *removeSecurity({payload: {data}}, {call, put}){
      const cb = yield call(removesecurity, data)
      if(cb){
        yield put({type: 'security'})
        message.success("修改成功")
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
        yield put({type: 'owner'})
        message.success("添加成功")
      }
    },
    *removeOwner({payload: {data}}, {call, put}){
      const cb = yield call(removeowner, data)
      if(cb){
        message.success("删除成功")
        yield put({type: 'owner'})
      }
    },
    *editOwner({payload: {data}}, {call, put}){
      const cb = yield call(editowner, data)
      if(cb){
        yield put({type: 'owner'})
        yield put({type: 'changeEdit',payload:{data: false} })
        message.success("修改成功")
      }
    },

    //住户管理模块
    *housing(payload, {call, put}){
      const cb = yield call(housinG)
      if(cb){
        yield put({type: 'housingSource', data: cb.data})
      }
    },
    *addHousing({payload: {data}}, {call, put}){
      const cb = yield call(addhousing, data)
      if(cb){
        yield put({type: 'housing'})
        message.success("添加成功")
      }
    },
    *editHousing({payload: {data}}, {call, put}){
      const cb = yield call(edithousing,data)
      if(cb){
        message.success("修改成功")
        yield put({type: 'changeEdit',payload:{data: false} })
        yield put({type: 'housing'})
      }
    },
    *removeHousing({payload: {data}},{call, put}){
      const cb = yield call(removehousing,data)
      if(cb){
        message.success("删除成功")
        yield put({type: 'housing'})
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
    *pay(payload, {call, put}){
      const cb = yield call(paY)
      if(cb){
        yield put({type: 'paySource', data: cb.data})
      }
    },
    *addPay({payload: {data}}, {call, put}){
      const cb = yield call(addpay, data)
      if(cb){
        message.success("添加成功")
      }
    },
    *car(payload, {call, put}){
      const cb = yield call(caR)
      if(cb){
        yield put({type: 'carSource', data: cb.data})
      }
    },
    *addCar({payload: {data}}, {call, put}){
      const cb = yield call(addcar, data)
      if(cb){
        message.success("添加成功")
      }
    },

    //停车位管理
    *editCar({payload: {data}}, {call, put}){
      const cb = yield call(editcar, data)
      if(cb){
        message.success("修改成功")
        yield put({type: 'changeEdit',payload:{data: false} })
        yield put({type: 'car'})
      }
    },
    *removeCar({payload: {data}},{call, put}){
      const cb = yield call(removecar, data)
      if(cb){
        message.success("删除成功")
        yield put({type: 'car'})
      }
    },
    *message(payload, {call, put}){
      const cb = yield call(messagE)
      if(cb){
        yield put({type: 'messageSource', data: cb.data})
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
    paySource(state, {data}){
      return {...state, paySource: data}
    },
    carSource(state, {data}){
      return {...state, carSource: data}
    },
    messageSource(state, {data}){
      return {...state, messageSource: data}
    },
    changeEdit(state, {payload: {data}}){
      return {...state, showEdit: data}
    }
  },

};
