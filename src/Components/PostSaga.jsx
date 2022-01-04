import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostRequset, fetchPostSuccess } from "../Redux/post/postActions";

const PostSaga = () => {
  const [postId, setPostId] = useState("");
  const { post, loading, error } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const sumbitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchPostRequset(postId || 1));
  };

  return (
    <div>
      <h1>redux-sag middleware</h1>
      <form onSubmit={sumbitHandler}>
        <input
          type="text"
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
        />
        <button>get post</button>
      </form>
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : post && post.title ? (
        <>
          <div>{post.title}</div>
          <div>{post.body}</div>
        </>
      ) : (
        <p>fetch some post</p>
      )}
    </div>
  );
};

export default PostSaga;
