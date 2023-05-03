import http from "../base-api/base-api";

const list = () => http.get("/owngames");

const detail = (id) => http.get(`/owngames/${id}`);

const create = (ownGame) => http.post("/owngames/create", ownGame);

const edit = (id, game) => http.patch(`/owngames/${id}`, game);

export default {
  list,
  detail,
  create,
  edit,
};
