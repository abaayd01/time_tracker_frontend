<template>
    <interactable
        :class="[clientCardClass, isInteracting && interactingClass]"
        :onDragStart="onDragStart"
        :onDragStop="onDragStop"
        :onResizeStart="onResizeStart"
        :onResizeStop="onResizeStop"
    ></interactable>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Interactable from "./Interactable";

export default {
    components: {
        Interactable
    },
    data: () => ({
        isActive: false,
        isInteracting: false,
        clientCardClass: 'client-card',
        interactingClass: 'interacting'
    }),
    computed: {
        ...mapState({
            isTargetCellSet: state => {
                return (
                    state.calendar.targetCell.row !== null &&
                    state.calendar.targetCell.col !== null
                );
            },
            targetCell: state => state.calendar.targetCell
        })
    },
    props: ["id"],
    methods: {
        ...mapMutations({
            setMode: "calendar/setMode",
            addTimeEntryToCalendar: "calendar/addTimeEntryToCalendar"
        }),
        mouseEnter() {
            this.isActive = true;
        },
        mouseLeave() {
            if (this.isDragging == false) {
                this.isActive = false;
            }
        },
        onDragStart() {
            this.isInteracting = true;
            this.setMode('dragging');
        },
        onDragStop() {
            this.isInteracting = false;
            this.setMode('viewing');
        },
        onResizeStart() {
            this.isInteracting = true;
        },
        onResizeStop() {
            this.isInteracting = false;
        }
    },
    mounted() {}
};
</script>

<style scoped>
.client-card {
    z-index: 99;
    background-color: peachpuff;
    height: 100px;
    width: 154px;
    border-radius: 10px;
}

.client-card:hover{
    cursor: grab;
}

.active {
    filter: brightness(0.8);
}

.interacting {
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.06);
    pointer-events: none;
}
</style>