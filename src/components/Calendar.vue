<template>
    <div class="calendar-view">
        <div class="client-sidebar">
            <client-card id="a"/>
            <client-card id="b"/>
            <client-card id="c"/>
        </div>
        <div class="main">
            <div id="headings-container">
                <table class="headings">
                    <tbody>
                        <tr>
                            <td class="time-col-spacer"></td>
                            <td>Mon</td>
                            <td>Tue</td>
                            <td>Wed</td>
                            <td>Thu</td>
                            <td>Fri</td>
                            <td>Sat</td>
                            <td>Sun</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="hours-container">
                <table class="hours">
                    <tbody>
                        <row v-for="hour in 24" :key="hour" :hour="hour"/>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Scrollbar from "smooth-scrollbar";

import Row from "./Row";
import SpacerRow from "./SpacerRow";
import ClientCard from "./ClientCard";

export default {
    components: {
        Row,
        SpacerRow,
        ClientCard
    },
    mounted() {
        Scrollbar.init(document.querySelector("#headings-container"));
        const hoursScrollbar = Scrollbar.init(
            document.querySelector("#hours-container")
        );
        hoursScrollbar.scrollTop = 290;
    }
};
</script>

<style scoped>
.calendar-view {
    display: grid;
    grid-template-columns: 1fr 4fr;
    height: 100vh;
}

.main {
    padding: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.client-sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.01);
    box-shadow: 0 0 20px 5px rgba(0,0,0,0.03);
}

#headings-container {
    padding: 0 2px;
}

#hours-container {
    height: 600px;
    overflow-y: scroll;
    padding: 5px 2px;
}

table.headings td {
    text-align: center;
    width: 8vw;
    height: 30px;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    border-left: 1px solid grey;
    border-right: 1px solid grey;
}

table.headings td.time-col-spacer {
    border: none;
    width: 75px;
}

</style>