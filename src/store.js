import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      { id: 1, title: "Aprender Vue", concluded: true },
      { id: 2, title: "Aprender Vue Router", concluded: true },
      { id: 3, title: "Aprender Vuex", concluded: false },
    ],
  },
  getters: {
    toDoTasks: (store) =>
      store.tasks.filter((task) => task.concluded === false),
    countToDoTasks: (state, getters) => getters.toDoTasks.length,
    concludedTasks: (store) =>
      store.tasks.filter((task) => task.concluded),
    countConcludedTasks: (state, getters) =>
      getters.concludedTasks.length,
    findTaskById: (state) => (id) =>
      state.tasks.find((task) => task.id === id),
  },
  mutations: {
    createTask: ({ tasks }, payload) => {
      tasks.push({
        id: tasks.length + 1,
        title: payload.title,
        concluded: false,
      });
    },
    updateTask: ({ tasks }, payload) => {
      const index = tasks.findIndex(data => data.id === payload.id)
      tasks.splice(index, 1, payload);
    },
  },
});
