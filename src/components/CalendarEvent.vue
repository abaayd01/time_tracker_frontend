<template>
    <interactable
        :class="[calendarEventClass, isInteracting && interactingClass]"
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
        calendarEventClass: 'calendar-event',
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
            targetCell: state => state.calendar.targetCell,
            targetPosition: state => state.calendar.targetLocation
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
            this.translatePosition();
            this.setMode('viewing');
        },
        onResizeStart() {
            this.isInteracting = true;
        },
        onResizeStop() {
            this.isInteracting = false;
        },
        translatePosition() {
            const element = document.querySelector('.calendar-event');
            element.style.left = this.targetPosition.left + 'px';
            element.style.top = this.targetPosition.top + 'px';
        }
    },
    mounted() {}
};
</script>

<style scoped>
.calendar-event {
    z-index: 99;
    background-color: peachpuff;
    height: 100px;
    width: 154px;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
}

.calendar-event:hover{
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