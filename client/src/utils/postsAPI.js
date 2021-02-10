import axios from "axios";

export default {
  getPosts: function () {
    return axios.get("/postsapi/posts");
  },
  getPost: function (id) {
    return axios.get("/postsapi/posts/" + id);
  },
  deletePost: function (id) {
    return axios.delete("/postsapi/posts/" + id);
  },
  savePost: function (postData) {
    return axios.post("/postsapi/posts", postData);
  },
};
