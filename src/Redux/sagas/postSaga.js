import { call, put, takeEvery } from "@redux-saga/core/effects";
import getPosts from "../../Services/getPosts";
import { fetchPostsFailure, fetchPostsSuccess } from "../post/postActions";
import { FETCH_POSTS_REQUEST } from "../post/postTypes";

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
