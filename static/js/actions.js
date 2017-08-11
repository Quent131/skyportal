export const RECEIVE_SOURCES = 'skyportal/RECEIVE_SOURCES';
export const RECEIVE_LOADED_SOURCE = 'skyportal/RECEIVE_LOADED_SOURCE';
export const RECEIVE_LOADED_SOURCE_FAIL = 'skyportal/RECEIVE_LOADED_SOURCE_FAIL';
export const RECEIVE_SOURCE_PLOT = 'skyportal/RECEIVE_SOURCE_PLOT';
export const RECEIVE_SOURCE_PLOT_FAIL = 'skyportal/RECEIVE_SOURCE_PLOT_FAIL';
export const RECEIVE_GROUPS = 'skyportal/RECEIVE_GROUPS';
export const RECEIVE_GROUP = 'skyportal/RECEIVE_GROUP';
export const RECEIVE_GROUP_FAIL = 'skyportal/RECEIVE_GROUP_FAIL';
export const ADD_COMMENT = 'skyportal/ADD_COMMENT';
export const FETCH_COMMENTS = 'skyportal/FETCH_COMMENTS';
export const RECEIVE_COMMENTS = 'skyportal/RECEIVE_COMMENTS';
export const RECEIVE_COMMENTS_FAIL = 'skyportal/RECEIVE_COMMENTS_FAIL';
export const RECEIVE_USER_PROFILE = 'skyportal/RECEIVE_USER_PROFILE';


import * as API from './API';


export function fetchSource(id) {
  return API.GET(`/api/sources/${id}`, RECEIVE_LOADED_SOURCE);
}

export function fetchSources() {
  return API.GET('/api/sources', RECEIVE_SOURCES);
}

export function fetchGroup(id) {
  return API.GET(`/api/groups/${id}`, RECEIVE_GROUP);
}

export function fetchGroups() {
  return API.GET('/api/groups', RECEIVE_GROUPS);
}

export function fetchComments(source) {
  return API.GET(`/api/sources/${source}/comments`, RECEIVE_COMMENTS);
}

export function fetchUserProfile() {
  return API.GET('/api/profile', RECEIVE_USER_PROFILE);
}

export function hydrate() {
  return (dispatch) => {
    dispatch(fetchUserProfile());
    dispatch(fetchSources());
    dispatch(fetchGroups());
  };
}

export function addComment(source_id, text) {
  return API.POST(`/api/comment`, ADD_COMMENT, {source_id, text});
}
