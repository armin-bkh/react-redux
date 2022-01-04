import { FETCH_POST_REQUEST, FETCH_POST_SUCCESS } from "./postTypes";

export const fetchPostRequset = (id) => {
  return { type: FETCH_POST_REQUEST, payload: id };
};

export const fetchPostSuccess = (post) => {
  return { type: FETCH_POST_SUCCESS, payload: post };
};

export const fetchPostFailure = (error) => {
  return { type: FETCH_POST_REQUEST, payload: error };
};
