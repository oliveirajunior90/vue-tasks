<template>
  <div>
    <div class="row">
      <div class="col-sm-10">
        <h1 class="font-weight-light">Lista de tarefas</h1>
      </div>
      <div class="col-sm-2">
        <button class="btn btn-primary float-right" @click="showTaskForm">
          <i class="fa fa-plus mr-2"></i>
          <span>create</span>
        </button>
      </div>
    </div>

    <h3 class="font-weight-light mt-4">A fazer ({{ countToDo }})</h3>

    <ul class="list-group" v-if="countToDo > 0">
      <TaskListItem
        v-for="task in toDo"
        :key="task.id"
        :task="task"
        @edit="selectTaskToEdit"
      />
    </ul>

    <h3 class="font-weight-light mt-4">Concluidas ({{ countConcluded }})</h3>

    <ul class="list-group" v-if="countConcluded > 0">
      <TaskListItem
        v-for="task in concluded"
        :key="task.id"
        :task="task"
        @edit="selectTaskToEdit"
      />
    </ul>

    <p v-else>Nenhuma tarefa criada.</p>

    <TaskForm v-if="showForm" :task="selectedTask" @save="saveTask" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TaskForm from "./task-form.vue";
import TaskListItem from "./task-list-item.vue";

export default {
  components: {
    TaskForm,
    TaskListItem,
  },
  mounted() {
    this.$store.dispatch("tasks/fetchAll");
  },
  data() {
    return {
      showForm: false,
      selectedTask: undefined,
    };
  },
  computed: {
    ...mapGetters("tasks", [
      "toDo",
      "concluded",
      "countConcluded",
      "countToDo",
      "findById",
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
        ? this.$store.dispatch("tasks/create", task)
        : this.$store.dispatch("tasks/update", task);
      this.reset();
    },
  },
};
</script>
