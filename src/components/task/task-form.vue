<template>
  <div class="mt-4">
    <hr />
    <h2 class="font-weight-light">save task</h2>
    <form @submit.prevent="save">
      <div class="row">
        <div :class="columnClass">
          <div class="form-group">
            <label>Título</label>
            <input
              type="text"
              class="form-control"
              placeholder="Título da task"
              :value="task && task.title"
              @input="
                selectedTask = {
                  property: 'title',
                  value: $event.target.value,
                }
              "
            />
          </div>
        </div>
        <div class="col-sm-2" v-if="task">
          <div class="form-group">
            <label>task concluída?</label>
            <button
              type="button"
              class="btn btn-sm d-block"
              :class="buttonClass"
            >
              <i class="fa fa-check"></i>
            </button>
          </div>
        </div>
      </div>

      <button type="submit" class="btn btn-primary">
        save
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      default: undefined,
    },
  },
  data() {
    return {
      localTask: this.task,
    };
  },
  computed: {
    columnClass() {
      return this.task ? "col-sm-10" : "col-sm-12";
    },
    buttonClass() {
      return this.task && this.task.concluded
        ? "btn-success"
        : "btn-secondary";
    },
    selectedTask: {
      set(data) {
        this.localTask = {...this.localTask, [data.property]: data.value}
      },
      get() {
        return this.localTask;
      },
    },
  },
  methods: {
    save() {
      const operation = !this.task ? "create" : "edit";
      this.$emit("save", { operation, task: this.selectedTask });

    },
  },
};
</script>
