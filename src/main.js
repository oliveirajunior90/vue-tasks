import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

export const eventBus = new Vue({
  methods: {
    selectMovie(selectedMovie) {
      this.$emit("selectMovie", selectedMovie);
    },
    updateMovie(updatedMovie) {
      this.$emit("updateMovie", updatedMovie);
    },
  },
});

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
