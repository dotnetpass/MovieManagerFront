import {
    createForum,
    dislikeForum,
    getForum,
    getForumList,
    likeForum,
    listDiscussion,
    listLikedForum,
    postDiscussion
} from '../services/network';
import router from 'umi/router';

export default {
    namespace: 'forum',

    state: {
        data: {},
        discussions: [],
        loading: false,
        pageSize: 12,
        page: 1,
        totalPage: 1,
        count: 0,
        list: []
    },

    effects: {
        * like({payload}, {call, put, select}) {
            yield put({
                type: 'changeLoading',
                payload: true,
            });
            if (payload.like)
                yield call(dislikeForum, {id: payload.id});
            else
                yield call(likeForum, {id: payload.id});
            const {id} = yield select(state => state.forum.data);
            if (payload.refreshLike)
                yield put({type: 'fetchLiked'});
            else
                yield put({type: 'fetch', payload: {id}});
            yield put({
                type: 'changeLoading',
                payload: false,
            });
        },
        * post({payload}, {call, put, select}) {
            yield put({
                type: 'changeLoading',
                payload: true,
            });
            const result = yield call(postDiscussion, payload);
            yield put({type: 'fetchDiscussion'});
            yield put({
                type: 'changeLoading',
                payload: false,
            });
        },
        * fetch({payload}, {call, put, select}) {
            yield put({
                type: 'changeLoading',
                payload: true,
            });
            const result = yield call(getForum, payload);
            yield put({
                type: 'query',
                payload: {...result, ...payload, id: payload.id},
            });
            yield put({type: 'fetchDiscussion', payload: {page: 1, pageSize: 12, forum_id: payload.id}});
            yield put({
                type: 'changeLoading',
                payload: false,
            });
        },
        * fetchLiked({payload}, {call, put, select}) {
            yield put({
                type: 'changeLoading',
                payload: true,
            });
            const result = yield call(listLikedForum, payload);
            yield put({
                type: 'queryList',
                payload: Array.isArray(result.data) ? result.data : []
            });
            yield put({
                type: 'changeLoading',
                payload: false,
            });
        },
        * fetchList({payload}, {call, put, select}) {
            yield put({
                type: 'changeLoading',
                payload: true,
            });
            const data = yield call(getForumList, payload);
            yield put({
                type: 'queryList',
                payload: Array.isArray(data) ? data : []
            });
            yield put({
                type: 'changeLoading',
                payload: false,
            });
        },


        * create({payload}, {call, put, select}) {
            yield put({
                type: 'changeLoading',
                payload: true,
            });
            const result = yield call(createForum, payload);
            if (result)
                router.push('/forum/' + result)
            yield put({
                type: 'changeLoading',
                payload: false,
            });
        },
        * fetchDiscussion({payload}, {call, put, select}) {
            yield put({
                type: 'changeLoading',
                payload: true,
            });
            const {pageSize, page, data} = yield select(state => state.forum);
            const result = yield call(listDiscussion, {
                pageSize: payload && payload.pageSize ? payload.pageSize : pageSize,
                page: payload && payload.page ? payload.page : page,
                forum_id: payload && payload.forum_id ? payload.forum_id : data.id,
            });
            yield put({
                type: 'queryDiscussion',
                payload: result,
            });
            yield put({
                type: 'changeLoading',
                payload: false,
            });
        },
    },

    reducers: {
        query(state, action) {
            return {
                ...state,
                data: action.payload,
            }
        },
        queryDiscussion(state, action) {
            return {
                ...state,
                ...action.payload,
                data: state.data,
                discussions: action.payload.data,
            }
        },
        queryList(state, action) {
            return {
                ...state,
                list: action.payload,
            };
        },
        changeLoading(state, action) {
            return {
                ...state,
                loading: action.payload,
            };
        },
    },
};
