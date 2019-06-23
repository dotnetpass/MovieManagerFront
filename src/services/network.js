import request from '../utils/request';

import {apiUrl, newApiUrl} from './config';

export async function flogin(params) {
    return request(`${newApiUrl}/user/login`, {
        method: 'POST',
        body: params,
    });
}

export async function fregister(params) {
    return request(`${newApiUrl}/user/create`, {
        method: 'POST',
        body: params,
    });
}

export async function flogout(params) {
    return request(`${newApiUrl}/user/logout`, {});
}

export async function getMovie(query) {
    return request(`${newApiUrl}/moviedetail/get/${query.id}`, {});
}

export async function listMovie(query) {
    return request(`${newApiUrl}/movie/get/${query.type}/${query.query}/${query.sort_by}/${query.page}/${query.pageSize}`, {});
}

export async function listLikedMovie(query) {
    return request(`${apiUrl}/movie/like`, {
        query,
    });
}

export async function likeMovie(params) {
    return request(`${apiUrl}/movie/like`, {
        method: 'POST',
        body: params,
    });
}

export async function listComment(query) {
    return request(`${apiUrl}/comment`, {
        query,
    });
}

export async function postComment(params) {
    return request(`${apiUrl}/comment`, {
        method: 'POST',
        body: params,
    });
}

export async function getForum(query) {
    return request(`${newApiUrl}/forum/get/id/${query.id}`, {});
}

export async function getForumList(query) {
    return request(`${newApiUrl}/forum/get/name/${query.query}`, {});
}

export async function getIndex() {
    return request(`${apiUrl}/index`, {});
}

export async function listLikedForum(query) {
    return request(`${apiUrl}/forum/like`, {
        query,
    });
}

export async function likeForum(params) {
    return request(`${apiUrl}/forum/like`, {
        method: 'POST',
        body: params,
    });
}

export async function createForum(params) {
    return request(`${apiUrl}/forum`, {
        method: 'POST',
        body: params,
    });
}

export async function updateForum(params) {
    return request(`${apiUrl}/forum`, {
        method: 'PUT',
        body: params,
    });
}

export async function listDiscussion(query) {
    return request(`${apiUrl}/discussion`, {
        query,
    });
}

export async function postDiscussion(params) {
    return request(`${apiUrl}/discussion`, {
        method: 'POST',
        body: params,
    });
}

