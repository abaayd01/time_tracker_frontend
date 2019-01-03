<template>
    <div
        ref="client-card"
        :class="[isActive ? 'active' : '', isDragging ? 'dragging' : '', 'client-card']"
        :id="id"
        @mouseenter="mouseEnter()"
        @mouseleave="mouseLeave()"
    ></div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { TweenLite } from "gsap";
// import interact from "interactjs";
// import InteractMethods from "../helpers/InteractMethods";

export default {
    props: ["id"],
    data: () => ({
        isActive: false,
        isDragging: false
    }),
    computed: {
        ...mapState({
            isTargetLocationSet: state => {
                return (
                    state.calendar.targetLocation.top !== null &&
                    state.calendar.targetLocation.left !== null
                );
            },
            targetLocation: state => state.calendar.targetLocation
        })
    },
    methods: {
        ...mapMutations({
            setMode: "calendar/setMode"
        }),
        mouseEnter() {
            this.isActive = true;
        },
        mouseLeave() {
            if (this.isDragging == false) {
                this.isActive = false;
            }
        }
    },
    mounted() {
        // let x, y;
        // window.jQuery(this.$refs["client-card"]).draggable({
        //     start: () => {
        //         this.isDragging = true;
        //         this.setMode("dragging");
        //     },
        //     stop: event => {
        //         this.setMode("viewing");
        //         this.isDragging = false;

        //         if (this.isTargetLocationSet) {
        //             const targetTop = this.targetLocation.top;
        //             const targetLeft = this.targetLocation.left;
        //             jQuery(this.$refs["client-card"]).offset({ top: targetTop, left: targetLeft });
        //         }
        //     }
        // });

        // window.jQuery(this.$refs["client-card"]).resizable({
        //     handles: "s",
        //     grid: [20, 50]
        // });
    }
};
</script>

<style scoped>
.client-card {
    position: absolute;
    z-index: 99;
    height: 100px;
    width: 154px;
    border: 1px solid lightgray;
    border-radius: 10px;
    background-color: rgba(200, 56, 25, 0.15);
}

.active {
    filter: brightness(0.8);
}

.dragging {
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.04);
    pointer-events: none;
}
</style>