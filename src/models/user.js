import {flogin, fregister, flogout} from '../services/network';
import router from 'umi/router';

export default {
    namespace: 'user',

    state: {
        id: localStorage.getItem('id') ? +localStorage.getItem('id') : null,
        nick: localStorage.getItem('nick') || '',
        avatar_url: localStorage.getItem('avatar_url') || ''
    },

    effects: {
        * login({payload}, {call, put}) {
            yield put({
                type: 'changeLoading',
                payload: true,
            });
            let result = JSON.parse(yield call(flogin, payload));
            yield put({
                type: 'queryCurrent',
                payload: result,
            });
            yield put({
                type: 'changeLoading',
                payload: false,
            });
            localStorage.setItem("id", result.id)
            localStorage.setItem("nick", result.nick)
            localStorage.setItem("avatar_url", result.avatar_url)

            router.push('/')
        },

        * register({payload}, {call, put}) {
            yield put({
                type: 'changeLoading',
                payload: true,
            });
            let result = JSON.parse(yield call(fregister, payload));
            yield put({
                type: 'queryCurrent',
                payload: result,
            });
            yield put({
                type: 'changeLoading',
                payload: false,
            });
            localStorage.setItem("id", result.id)
            localStorage.setItem("nick", result.nick)
            localStorage.setItem("avatar_url", result.avatar_url)
            router.push('/')
        },
        * logout({payload}, {call, put}) {
            yield put({
                type: 'queryCurrent',
                payload: {id:null,nick:'',avatar_url: ''},
            });
            localStorage.removeItem("id")
            localStorage.removeItem("nick")
            localStorage.removeItem("avatar_url")
            yield call(flogout)
            router.push('/')

        },

    },

    reducers: {
        queryCurrent(state, action) {
            return {
                ...state,
                ...action.payload,
            };
        },
    },
};
