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
    return request(`${newApiUrl}/usermovie/get/favorite`, {
        query,
    });
}

export async function likeMovie(params) {
    return request(`${newApiUrl}/usermovie/add/${params.id}`, {});
}

export async function dislikeMovie(params) {
    return request(`${newApiUrl}/usermovie/delete/${params.id}`, {method: 'DELETE'});
}

export async function listComment(query) {
    return request(`${newApiUrl}/comment/get/movie/${query.movie_id}/${query.page}/${query.pageSize}`, {});
}

export async function postComment(params) {
    return request(`${newApiUrl}/comment/create`, {
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
    return request(`${newApiUrl}/index`, {});
}

export async function listLikedForum(query) {
    return request(`${newApiUrl}/userforum/get/all`, {
        query,
    });
}

export async function likeForum(params) {
    return request(`${newApiUrl}/userforum/add/${params.id}`, {});
}

export async function dislikeForum(params) {
    return request(`${newApiUrl}/userforum/delete/${params.id}`, {method: 'DELETE'});
}

export async function createForum(params) {
    return request(`${newApiUrl}/forum/create`, {
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
    return request(`${newApiUrl}/discussion/get/forum/${query.forum_id}/${query.page}/${query.pageSize}`, {});
}

export async function postDiscussion(params) {
    return request(`${newApiUrl}/discussion/create`, {
        method: 'POST',
        body: params,
    });
}

