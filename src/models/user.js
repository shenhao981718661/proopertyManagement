import {message} from 'antd'
import {
    changepassword,
    questinfobyroom,
    querypay,
} from '../services/userQuest'

export default {
    namespace: 'user',
    state: {
        showEdit: false,
        userinfo: {},
        paySource: [],
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
        }
    },
}