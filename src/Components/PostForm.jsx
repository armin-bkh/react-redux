import { useState } from "react";
import { useDispatch } from "react-redux";
import { postPostsRequset } from "../Redux/post/postActions";

const PostForm = () => {
  const [formValue, setFormValue] = useState({
    title: "",
    body: "",
  });
  const dispatch = useDispatch();

  const changeHandler = (e) =>
    setFormValue({ ...formValue, [e.target.name]: e.target.value });

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(postPostsRequset(formValue));
  };

  return (
    <form onSubmit={submitHandler}>
      <input name="title" type="text" value={postId} onChange={changeHandler} />
      <input name="body" type="text" value={postId} onChange={changeHandler} />
      <button>get post</button>
    </form>
  );
};

export default PostForm;
