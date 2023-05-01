import http from "../base-api/base-api";

const list = (query) =>
  http.get("/games", { params: query })

const detail = (id) => http.get(`/games/${id}`)

export default {
  list,
  detail,
};
