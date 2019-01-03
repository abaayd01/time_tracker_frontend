<template>
    <tr>
        <td class="time-col">{{ hour }}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</template>

<script>
export default {
    props: {
        hour: Number
    },
    computed: {
    }
};
</script>

<style scoped>
td.time-col {
    border: none;
    height: 5px;
    width: 40px;
    vertical-align: top;
}

td {
    height: 5px;
    width: 200px;
}
</style>