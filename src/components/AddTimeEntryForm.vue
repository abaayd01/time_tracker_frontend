<template>
    <div>
        <b-form @submit="onSubmit">
            <b-form-group id="projectDropdown" label="Project" label-for="project">
                <b-form-select
                    id="projectDropdown"
                    :options="projectNames"
                    required
                    v-model="form.projectId"
                    @change="fetchTasksForProject"
                ></b-form-select>
            </b-form-group>
            <b-form-group id="taskDropdown" label="Task" label-for="task">
                <b-form-select
                    id="taskDropdown"
                    :options="taskNames"
                    required
                    v-model="form.taskId"
                ></b-form-select>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
    </div>
</template>

<script>
export default {
    props: {
        addTimeEntry: Function
    },
    data: function() {
        return {
            form: {
                projectId: null,
                taskId: null
            },
            projects: [],
            tasks: []
        };
    },
    methods: {
        async onSubmit(evt) {
            try {
                evt.preventDefault();

                const data = {
                    project_id: this.form.projectId,
                    task_id: this.form.taskId,
                    date: this._convertToSeconds(Date.now()),
                    time_start: this._convertToSeconds(Date.now()),
                    time_stop: this._convertToSeconds(Date.now())
                };

                const url = "http://localhost:8000/api/time-entries";

                const settings = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                };

                const response = await fetch(url, settings);
                const responseJson = await response.json();
                this.addTimeEntry(responseJson.data);
                this.reset();
            } catch (error) {
                alert(error);
            }
        },
        reset() {
            /* Reset our form values */
            this.form.projectId = null;
            this.form.taskId = null;
        },
        async fetchProjects() {
            const url = "http://localhost:8000/api/projects";
            const settings = {
                method: "GET"
            };

            const response = await fetch(url, settings);
            const responseJson = await response.json();
            this.projects = responseJson.data.projects;
        },
        async fetchTasksForProject(projectId) {
            const url = `http://localhost:8000/api/projects/${projectId}/tasks`;
            const settings = {
                method: "GET"
            };

            const response = await fetch(url, settings);
            const responseJson = await response.json();
            this.tasks = responseJson.data.tasks;
        },
        _convertToSeconds(milliseconds) {
            return Math.floor(milliseconds / 1000);
        }
    },
    computed: {
        projectNames() {
            return this.projects.map(project => ({
                text: project.name,
                value: project.id
            }));
        },
        taskNames() {
            return this.tasks.map(task => ({
                text: task.name,
                value: task.id
            }));
        }
    },
    mounted() {
        this.fetchProjects();
    }
};
</script>

<style scoped>
</style>