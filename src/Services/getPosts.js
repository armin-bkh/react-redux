import http from "./httpServices";

const getPosts = () => http.get("/posts");

export default getPosts;
