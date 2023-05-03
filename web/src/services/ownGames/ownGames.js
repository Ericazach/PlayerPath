import http from "../base-api/base-api";

const list = () => {
  return http.get("/owngames");
};

const detail = (id) => http.get(`/owngames/${id}`);

const create = (ownGame) => http.post("/owngames/create", ownGame);

export default {
  list,
  detail,
  create,
};
