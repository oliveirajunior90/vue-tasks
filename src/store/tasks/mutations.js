const createTask = ({ tasks }, payload) => {
  tasks.push({
    id: tasks.length + 1,
    title: payload.title,
    concluded: false,
  });
};

const updateTask = ({ tasks }, payload) => {
  const index = tasks.findIndex((data) => data.id === payload.id);
  tasks.splice(index, 1, payload);
};

export default {
  createTask,
  updateTask,
};
