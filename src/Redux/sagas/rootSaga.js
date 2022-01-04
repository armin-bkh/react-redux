import { all } from "@redux-saga/core/effects";
import { FETCH_POST_REQUEST } from "../post/postTypes";
import { watchDeletePost, watchFetchPost, watchPostPost } from "./postSaga";

export function* rootSaga() {
  yield all([watchFetchPost(), watchPostPost(), watchDeletePost()]);
}
