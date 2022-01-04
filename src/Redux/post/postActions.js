import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  POST_POSTS_REQUEST,
  POST_POSTS_SUCCESS,
} from "./postTypes";

export const fetchPostsRequset = (id) => {
  return { type: FETCH_POSTS_REQUEST, payload: id };
};

export const fetchPostsSuccess = (post) => {
  return { type: FETCH_POSTS_SUCCESS, payload: post };
};

export const fetchPostsFailure = (error) => {
  return { type: FETCH_POSTS_FAILURE, payload: error };
};

export const postPostsRequset = (post) => {
  return { type: POST_POSTS_REQUEST, payload: post };
};

export const postPostsSuccess = (post) => {
  return { type: POST_POSTS_SUCCESS, payload: post };
};

export const postPostsFailure = (error) => {
  return { type: POST_POSTS_REQUEST, payload: error };
};
