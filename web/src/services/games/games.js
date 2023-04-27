import http from "../base-api/base-api";

const list = (query) =>
  http.get("/games", { params: query }).then((res) => res.data);

const detail = (id) => http.get(`/games/${id}`).then((res) => res.data);

export default {
  list,
  detail,
};
