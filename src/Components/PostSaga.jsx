import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePostsRequest,
  fetchPostsRequset,
} from "../Redux/post/postActions";
import PostForm from "./PostForm";

const PostSaga = () => {
  const { posts, loading, error } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsRequset());
  }, []);

  const deletePostHandler = (id) => {
    console.log(id);
    dispatch(deletePostsRequest(id));
  };
  return (
    <div>
      <h1>redux-sag middleware</h1>
      <PostForm />
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : posts && posts.length ? (
        posts.map((post) => (
          <div
            style={{
              marginBottom: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            key={post.id}
          >
            <div>
              <div style={{ marginBottom: "2px" }}>{post.title}</div>
              <div>{post.body}</div>
            </div>
            <button onClick={() => deletePostHandler(post.id)}>delete</button>
          </div>
        ))
      ) : (
        <p>fetch some post</p>
      )}
    </div>
  );
};

export default PostSaga;
