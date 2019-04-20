import {message} from 'antd'
import {
    changepassword,
} from '../services/userQuest'

export default {
    namespace: 'user',
    state: {
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
        *changePassword({payload: {data}}, {call, put}){
            const cb = yield call(changepassword, data);
            if(cb){
                message.success("修改成功")
                yield put({type: 'isShowEdit', payload: {data: false}})
            }
        },
    },
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
          },
        isShowEdit(state, {payload: {data}}) {
            return {...state, showEdit: data}
        },
    },
}