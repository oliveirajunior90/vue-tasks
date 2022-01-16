import Vue from "vue";
import Vuex from "vuex";
import tasks from "./tasks";

Vue.use(Vuex);

const store = {
  modules: {
    tasks,
  },
};

export default new Vuex.Store(store);
