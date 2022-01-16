import Vue from "vue";
import Vuex from "vuex";
import tasks from "./tasks";

Vue.use(Vuex);

const store = {
  modules: {
    tasks,
  },
  strict: true,
};

export default new Vuex.Store(store);
