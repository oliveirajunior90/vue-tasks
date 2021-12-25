<template>
  <div>
    <div class="row">
      <div class="col-sm-10">
        <h1 class="font-weight-light">Lista de tarefas</h1>
      </div>
      <div class="col-sm-2">
        <button
          class="btn btn-primary float-right"
          @click="showTaskForm"
        >
          <i class="fa fa-plus mr-2"></i>
          <span>create</span>
        </button>
      </div>
    </div>

    <h3 class="font-weight-light mt-4">A fazer ({{ countToDoTasks }})</h3>

    <ul class="list-group" v-if="countToDoTasks > 0">
      <TaskListItem
        v-for="task in toDoTasks"
        :key="task.id"
        :task="task"
        @edit="selectTaskToEdit"
      />
    </ul>

    <h3 class="font-weight-light mt-4">
      Concluidas ({{ countConcludedTasks }})
    </h3>

    <ul class="list-group" v-if="countConcludedTasks > 0">
      <TaskListItem
        v-for="task in concludedTasks"
        :key="task.id"
        :task="task"
        @edit="selectTaskToEdit"
      />
    </ul>

    <p v-else>Nenhuma tarefa criada.</p>

    <TaskForm
      v-if="showForm"
      :task="selectedTask"
      @save="saveTask"
    />
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import TaskForm from "./task-form.vue";
import TaskListItem from "./task-list-item.vue";

export default {
  components: {
    TaskForm,
    TaskListItem,
  },
  data() {
    return {
      showForm: false,
      selectedTask: undefined,
    };
  },
  computed: {
    ...mapState(["tasks"]),
    ...mapGetters([
      "toDoTasks",
      "concludedTasks",
      "countConcludedTasks",
      "countToDoTasks",
      "findTaskById",
    ]),
  },
  methods: {
    showTaskForm() {
      if (this.selectedTask) {
        this.selectedTask = undefined;
        return;
      }
      this.showForm = !this.showForm;
    },
    selectTaskToEdit(task) {
      this.showForm = true;
      this.selectedTask = task;
    },
    reset() {
      this.showForm = false;
      this.selectedTask = undefined;
    },
    saveTask({ task, operation }) {
      operation === "create"
        ? this.$store.commit("createTask", task)
        : this.$store.commit("updateTask", task);
      this.reset()
    },
  },
};
</script>
