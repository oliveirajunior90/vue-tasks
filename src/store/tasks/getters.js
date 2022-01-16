export default {
  toDoTasks: (store) => store.tasks.filter((task) => task.concluded === false),
  countToDoTasks: (state, getters) => getters.toDoTasks.length,
  concludedTasks: (store) => store.tasks.filter((task) => task.concluded),
  countConcludedTasks: (state, getters) => getters.concludedTasks.length,
  findTaskById: (state) => (id) => state.tasks.find((task) => task.id === id),
};
