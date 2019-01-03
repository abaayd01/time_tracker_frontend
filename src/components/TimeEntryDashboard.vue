<template>
    <b-container id="app" class="bv-example-row">
        <b-row>
            <b-col>
                <add-time-entry-form :addTimeEntry="addTimeEntry"/>
            </b-col>
            <b-col>
                <time-entries :timeEntries="timeEntries" :deleteTimeEntry="deleteTimeEntry"/>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import TimeEntries from "./TimeEntries";
import AddTimeEntryForm from "./AddTimeEntryForm";

export default {
    data: function() {
        return {
            timeEntries: []
        };
    },
    methods: {
        async fetchTimeEntries() {
            const url = "http://localhost:8000/api/time-entries";
            const settings = {
                method: "GET"
            };

            const response = await fetch(url, settings);
            const responseJson = await response.json();
            this.timeEntries = responseJson.data.items;
        },
        addTimeEntry(entry) {
            this.timeEntries.push(entry);
        },
        async deleteTimeEntry(entry) {
            try {
                const time_entry_id = entry.id;

                const url = `http://localhost:8000/api/time-entries/${time_entry_id}`;
                const settings = {
                    method: "DELETE"
                };

                const response = await fetch(url, settings);
                const responseJson = await response.json();

                if (!responseJson.success) {
                    throw responseJson;
                }

                this.timeEntries = this.timeEntries.filter(
                    timeEntry => timeEntry.id !== entry.id
                );
            } catch (error) {
                alert(error);
            }
        }
    },
    components: {
        TimeEntries,
        AddTimeEntryForm
    },
    mounted() {
        this.fetchTimeEntries();
    }
};
</script>

<style scoped>
</style>