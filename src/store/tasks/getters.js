export default {
  toDo: (store) => store.tasks.filter((task) => task.concluded === false),
  countToDo: (state, getters) => getters.toDo.length,
  concluded: (store) => store.tasks.filter((task) => task.concluded),
  countConcluded: (state, getters) => getters.concluded.length,
  findTaskId: (state) => (id) => state.tasks.find((task) => task.id === id),
};
