import { call, put, takeEvery } from "@redux-saga/core/effects";
import deletePost from "../../Services/deletePost";
import getPosts from "../../Services/getPosts";
import postPost from "../../Services/postPost";
import {
  deletePostsFailure,
  deletePostsSuccess,
  fetchPostsFailure,
  fetchPostsSuccess,
  postPostsFailure,
  postPostsSuccess,
} from "../post/postActions";
import {
  DELETE_POSTS_REQUEST,
  FETCH_POSTS_REQUEST,
  POST_POSTS_REQUEST,
} from "../post/postTypes";

function* fetchPosts() {
  try {
    const { data } = yield call(() => getPosts());
    yield put(fetchPostsSuccess(data));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

export function* watchFetchPost() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPosts);
}

function* postPosts({ payload }) {
  try {
    const { data } = yield call(() => postPost(payload));
    yield put(postPostsSuccess(data));
  } catch (error) {
    yield put(postPostsFailure(error.message));
  }
}

export function* watchPostPost() {
  yield takeEvery(POST_POSTS_REQUEST, postPosts);
}

function* deletePosts({ payload }) {
  try {
    const { data } = yield call(() => deletePost(payload));
    yield put(deletePostsSuccess(payload));
  } catch (error) {
    yield put(deletePostsFailure(error.message));
  }
}

export function* watchDeletePost() {
  yield takeEvery(DELETE_POSTS_REQUEST, deletePosts);
}
