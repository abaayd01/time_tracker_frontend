<template>
    <td
        :data-row="row"
        :data-col="col"
        ref="cell"
        :class="{'active': isActive}"
        @mouseenter="mouseEnter()"
        @mouseleave="mouseLeave()"
    ></td>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
    props: {
        row: Number,
        col: Number
    },
    data: () => ({
        isActive: false
    }),
    computed: {
        ...mapState({
            allowHighlighting: state => {
                // return true;
                return state.calendar.mode === "dragging";
            }
        })
    },
    methods: {
        ...mapMutations({
            setTargetLoction: "calendar/setTargetLocation",
            setTargetCell: "calendar/setTargetCell"
        }),
        mouseEnter() {
            if (this.allowHighlighting) {
                this.isActive = true;
                const { top, left } = this.$refs[
                    "cell"
                ].getBoundingClientRect();

                const row = this.$refs["cell"].getAttribute("data-row");
                const col = this.$refs["cell"].getAttribute("data-col");

                this.setTargetLoction({ top, left });
                this.setTargetCell({ row, col });
            }
        },
        mouseLeave() {
            this.isActive = false;
        }
    }
};
</script>

<style scoped>
.active {
    background-color: lightgray;
}
</style>