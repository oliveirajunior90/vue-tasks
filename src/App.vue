<template>
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Lista de Filmes</h1>
        <p class="lead">Treinando comunicação entre Components no Vue</p>
      </div>
    </div>

    <div class="container">
      <TaskList />
    </div>
  </div>
</template>

<script>
// import SlotsExample from './components/SlotsExample'
// import WatchExample from "./components/WatchExample"
// import ComputedExample from "./components/ComputadedExample";
import TaskList from "./components/task/task-list.vue"

export default {
  components: { TaskList },
};
</script>
