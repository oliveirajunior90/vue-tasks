<template>
    <li class="list-group-item d-flex">
        <span>{{ task.title }}</span>
        <span class="espace"></span>
        <button 
            class="btn btn-sm mr-4" 
            :class="cssClass" 
            :title="textConcludedButton">
                <i class="fa fa-check"></i>
        </button>
        <button 
            class="btn btn-primary btn-sm mr-1" 
            title="Ediar"
            @click="$emit('edit', task)">
                <i class="fa fa-pencil-alt"></i>
        </button>
        <button 
            class="btn btn-danger btn-sm" 
            title="Deletar">
                <i class="fa fa-trash"></i>
        </button>
    </li>
</template>

<script>
export default {
    props: {
        task: {
            type: Object,
            required: true
        }
    },
    computed: {
        cssClass() {
            return {
                'btn-secondary': !this.task.concluded,
                'btn-success': this.task.concluded
            }
        },
        textConcludedButton() {
            return this.task.concluded
                ? 'Refazer tarefa'
                : 'Concluir tarefa'
        }
    }
}
</script>

<style scoped>

    .espace {
        flex: 1 1 auto;
    }

</style>
