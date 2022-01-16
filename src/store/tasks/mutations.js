const create = ({ tasks }, payload) => {
  tasks.push({
    id: tasks.length + 1,
    title: payload.title,
    concluded: false,
  });
};

const update = ({ tasks }, payload) => {
  const index = tasks.findIndex((data) => data.id === payload.id);
  tasks.splice(index, 1, payload);
};

const tasks = (state, tasks) => {
  state.tasks = tasks;
};

export default {
  create,
  update,
  tasks,
};
