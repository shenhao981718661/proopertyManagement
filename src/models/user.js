import {message} from 'antd'
import {
    changepassword,
    questinfobyroom,
    querypay,
    userreport,
    addreport,
    usercar,
    usermessage,
} from '../services/userQuest'

export default {
    namespace: 'user',
    state: {
        showEdit: false,
        userinfo: {},
        paySource: [],
        reportSource: [],
        carSource: [],
        messageSource: [],
    },
    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },
    effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
            yield put({ type: 'save' });
        },
        *changePassword({payload: {data}}, {call, put}){
            const cb = yield call(changepassword, data);
            if(cb){
                message.success("修改成功")
                yield put({type: 'isShowEdit', payload: {data: false}})
            }
        },
        *questInfoByRoom({payload: {data}}, {call, put}){
            const cb = yield call(questinfobyroom, data);
            if(cb){
                yield put({type: 'userinfo', data: cb.data})
            }
        },
        *queryPay({payload: {data}}, {call, put}){
            const cb = yield call(querypay, data);
            if(cb){
                yield put({type: 'paySource', data: cb.data})
            }
        },
        *userReport({payload: {data}}, {call, put}){
            const cb = yield call(userreport, data);
            if(cb){
                yield put({type: 'reportSource', data: cb.data})
            }
        },
        *addReport({payload: {data}}, {call, put}){
            const cb = yield call(addreport, data);
            if(cb){
                yield put({type: 'userReport',payload:{data: {room: cb.data.room}}})
            }
        },
        *userCar({payload: {data}}, {call, put}){
            const cb = yield call(usercar, data)
            if(cb){
                yield put({type: 'carSource', data: cb.data})
            }
        },
        *userMessage({payload: {data}}, {call, put}){
            const cb = yield call(usermessage, data)
            if(cb){
                yield put({type: 'messageSource', data: cb.data})
            }
        }
    },
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
          },
        isShowEdit(state, {payload: {data}}) {
            return {...state, showEdit: data}
        },
        userinfo(state, {data}) {
            return {...state, userinfo: data}
        },
        paySource(state, {data}){
            return {...state, paySource: data}
        },
        reportSource(state, {data}){
            return {...state, reportSource: data}
        },
        carSource(state, {data}){
            return {...state, carSource: data}
        },
        messageSource(state, {data}){
            return {...state, messageSource: data}
        }
    },
}