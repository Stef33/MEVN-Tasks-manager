<template>
    <div>
        <h1>Edit Task</h1>
        <form class="custom-form" @submit.prevent="onSubmit">
            <div class="form-group">
                <label for="title">Title</label>
                <input v-model="task.title" type="text" class="form-control" id="title" placeholder="Title" name="title">
            </div>
            <div class="form-group">
                <label for="password">Body</label>
                <textarea v-model="task.body" class="form-control" name="body" id="body" cols="30" rows="10" placeholder="Task body"></textarea>
            </div>
            <div class="form-group">
                <label for="due-date">Due Date</label>
                <input v-model="task.dueDate" type="date" class="form-control" id="due-date" placeholder="Due Date">
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-secondary">Save changes</button>
            </div>
        </form>
    </div>
</template>

<script>
import * as taskService from '../../services/TaskService'
import moment from 'moment'

export default {
    name: 'tasks-edit',
    data: function() {
        return {
            task: {
                title: '',
                body: '',
                dueDate: ''
            }
        }
    },
    beforeRouteEnter(to, from, next) {
        taskService.getTaskById(to.params.id)
        .then(response => {
            if (!response) {
                next('/tasks')
            } else {
                next(vm => {
                    const task = response.data.task
                    task.dueDate = moment(task.dueDate).format('YYYY-MM-DD')
                    vm.task = task
                })
            }
        })
    },
    methods: {
        onSubmit: async function() {
            const request = {
                task: this.task
            }
            console.log(request);
            
            await taskService.updateTask(request)
            this.$router.push({ name: 'tasks-all' })
        }
    }
}
</script>