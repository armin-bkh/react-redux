import http from "./httpServices";

const getPost = (id) => http.get(`/posts/${id}`);

export default getPost;
