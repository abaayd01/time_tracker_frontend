<template>
    <td
        ref="cell"
        :class="{'active': isActive}"
        @mouseenter="mouseEnter()"
        @mouseleave="mouseLeave()"
    ></td>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
    data: () => ({
        isActive: false
    }),
    computed: {
        ...mapState({
            allowHighlighting: state => {
                return state.calendar.mode === "dragging";
            }
        })
    },
    methods: {
        ...mapMutations({
            setTargetLoction: "calendar/setTargetLocation"
        }),
        mouseEnter() {
            if (this.allowHighlighting) {
                this.isActive = true;
                const { top, left } = this.$refs["cell"].getBoundingClientRect();
                this.setTargetLoction({top, left});
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