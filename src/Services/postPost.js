import http from "./httpServices";

const postPost = (post) => http.post("/posts", post);

export default postPost;
