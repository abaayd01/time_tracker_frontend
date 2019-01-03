<template>
    <b-container class="container">
        <b-row align-v="center">
            <b-col>
                <h3>Project ID: {{ timeEntry.project_id }}</h3>
                <h3>Task ID: {{ timeEntry.task_id }}</h3>
                <h4>{{ timeEntry.date }}</h4>
                <h4>{{ timeEntry.time_start }}</h4>
                <h4>{{ timeEntry.time_stop }}</h4>
            </b-col>
            <b-col>
                <b-button @click="deleteTimeEntry(timeEntry)" variant="danger">Delete</b-button>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    props: {
        timeEntry: Object,
        deleteTimeEntry: Function
    }
};
</script>

<style scoped>
.container {
    background-color: aliceblue;
    width: 100%;
    margin: 10px auto;
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>