<template>
    <div class="container">
        <div class="time-entry" v-for="timeEntry in timeEntries" :key="timeEntry.id">
            <time-entry :timeEntry="timeEntry" :deleteTimeEntry="deleteTimeEntry"/>
        </div>
    </div>
</template>

<script>
import TimeEntry from "./TimeEntry";

export default {
    props: {
        timeEntries: Array,
        deleteTimeEntry: Function
    },
    components: {
        TimeEntry
    }
};
</script>

<style scoped>
.container {
    max-height: 100vh;
    overflow: scroll;
}
</style>