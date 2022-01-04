import { useState } from "react";

const PostSaga = () => {
  const [postId, setPostId] = useState("");

  const sumbitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={sumbitHandler}>
      <h1>redux-sag middleware</h1>
      <input
        type="text"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
      />
      <button>get post</button>
    </form>
  );
};

export default PostSaga;
