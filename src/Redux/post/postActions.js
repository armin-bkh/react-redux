import {
  FETCH_POST_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  POST_POST_REQUEST,
  POST_POST_SUCCESS,
} from "./postTypes";

export const fetchPostRequset = (id) => {
  return { type: FETCH_POST_REQUEST, payload: id };
};

export const fetchPostSuccess = (post) => {
  return { type: FETCH_POST_SUCCESS, payload: post };
};

export const fetchPostFailure = (error) => {
  return { type: FETCH_POST_FAILURE, payload: error };
};

export const postPostRequset = (post) => {
  return { type: POST_POST_REQUEST, payload: post };
};

export const postPostSuccess = (post) => {
  return { type: POST_POST_SUCCESS, payload: post };
};

export const postPostFailure = (error) => {
  return { type: POST_POST_REQUEST, payload: error };
};
