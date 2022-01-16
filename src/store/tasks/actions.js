import axios from "@/lib/axios";

const fetchAll = async ({ commit }) => {
  const { data } = await axios.get("/tasks");
  commit("tasks", data);
};

const create = async ({ commit }, payload) => {
  const { data } = await axios.post("/tasks", {
    ...payload,
    concluded: false,
  });
  commit("create", data);
};

const update = async ({ commit }, payload) => {
  const { data } = await axios.put(`/tasks/${payload.id}`, payload);
  commit("update", data);
};

export default {
  fetchAll,
  create,
  update,
};
