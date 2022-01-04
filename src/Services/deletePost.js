import http from "./httpServices";

const deletePost = (id) => http.delete(`/posts/${id}`);

export default deletePost;
