<template>
    <tr>
        <td class="time-col">
            <span class="time">
                {{ formattedHour }}
            </span>
        </td>
        <cell />
        <cell />
        <cell />
        <cell />
        <cell />
        <cell />
        <cell />
    </tr>
</template>

<script>
import Cell from './Cell';

export default {
    components: {
        Cell
    },
    props: {
        isFirst: Boolean,
        hour: Number
    },
    methods: {
        testFunc() {
            console.log('Mouseenter')
        }
    },
    computed: {
        formattedHour() {
            const hour = this.hour;

            if (hour / 12 > 1 && hour / 12 != 2) {
                return `${hour % 12} pm`;
            } else if ( hour / 12 == 1 ) {
                return `12 pm`;
            } else if ( hour / 12 == 2 ) {
                return `12 am`;
            }


            return `${hour} am`;
        }
    }
};
</script>

<style scoped>
td.time-col {
    border: none;
    height: 50px;
    width: 75px;
    vertical-align: top;
    position: relative;
}

span.time {
    font-size: 12px;
    position: absolute;
    top: -7px;
    right: 10px;
}

td {
    height: 50px;
    width: 8vw;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    border-left: 1px solid grey;
    border-right: 1px solid grey;
}
</style>