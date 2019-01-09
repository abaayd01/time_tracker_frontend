<template>
    <div class="draggable">
        <slot/>
        <div class="resize-bar-hitbox top">
            <div class="resize-bar top"></div>
        </div>
        <div class="resize-bar-hitbox bottom">
            <div class="resize-bar bottom"></div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props: {
        onDragStart: {
            type: Function,
            default: () => null
        },
        onDragStop: {
            type: Function,
            default: () => null
        },
        onResizeStart: {
            type: Function,
            default: () => null
        },
        onResizeStop: {
            type: Function,
            default: () => null
        },
    },
    mounted() {
        const resizeBars = document.getElementsByClassName("resize-bar-hitbox");
        const resizeBarTop = document.querySelector(".resize-bar-hitbox.top");
        const resizeBarBottom = document.querySelector(
            ".resize-bar-hitbox.bottom"
        );
        const element = document.querySelector(".draggable");

        for (let i = 0; i < resizeBars.length; i++) {
            const resizeBar = resizeBars[i];
            resizeBar.addEventListener("mouseenter", () => {
                document.body.style.cursor = "ns-resize";
            });
            resizeBar.addEventListener("mouseleave", this.resetCursorAuto);
        }

        resizeBarTop.addEventListener(
            "mousedown",
            this.mouseDownResizeHandlerTop
        );

        resizeBarBottom.addEventListener(
            "mousedown",
            this.mouseDownResizeHandlerBottom
        );

        element.addEventListener("mousedown", this.mouseDownDragHandler);
    },
    methods: {
        resetCursorAuto(event) {
            document.body.style.cursor = "auto";
        },
        mouseDownResizeHandlerTop(event) {
            event.stopPropagation();

            const self = this;
            self.onResizeStart();

            const resizeBar = event.target;
            const element = document.querySelector(".draggable");

            resizeBar.removeEventListener("mouseleave", this.resetCursorAuto);

            window.addEventListener("mousemove", mouseMoveResizeHandler);
            window.addEventListener("mouseup", mouseUpHandler);

            const topOld = parseFloat(element.style.top) || 0;
            const y0 = document
                .querySelector(".draggable")
                .getBoundingClientRect().top;
            const bottom = document
                .querySelector(".draggable")
                .getBoundingClientRect().bottom;

            function mouseMoveResizeHandler(event) {
                const element = document.querySelector(".draggable");
                const newHeight = bottom - event.clientY;
                const roundedNewHeight = Math.round(newHeight / 25) * 25;
                element.style.top =
                    topOld + Math.round((event.clientY - y0) / 25) * 25 + "px";
                element.style.height = `${roundedNewHeight}px`;
            }

            function mouseUpHandler(event) {
                document.body.style.cursor = "auto";

                window.removeEventListener("mousemove", mouseMoveResizeHandler);
                window.removeEventListener("mouseup", mouseUpHandler);
                resizeBar.addEventListener("mouseleave", this.resetCursorAuto);

                self.onResizeStop();
            }
        },
        mouseDownResizeHandlerBottom(event) {
            event.stopPropagation();

            const self = this;
            self.onResizeStart();

            const resizeBar = event.target;

            resizeBar.removeEventListener("mouseleave", this.resetCursorAuto);

            window.addEventListener("mousemove", mouseMoveResizeHandler);
            window.addEventListener("mouseup", mouseUpHandler);

            function mouseMoveResizeHandler(event) {
                const element = document.querySelector(".draggable");
                const newHeight =
                    event.clientY - element.getBoundingClientRect().top;
                const roundedNewHeight = Math.round(newHeight / 25) * 25;
                element.style.height = `${roundedNewHeight}px`;
            }

            function mouseUpHandler(event) {
                document.body.style.cursor = "auto";

                window.removeEventListener("mousemove", mouseMoveResizeHandler);
                window.removeEventListener("mouseup", mouseUpHandler);
                resizeBar.addEventListener("mouseleave", this.resetCursorAuto);
                self.onResizeStop();
            }
        },
        mouseDownDragHandler(event) {
            const self = this;
            self.onDragStart();

            const element = document.querySelector(".draggable");
            document.body.style.cursor = "move";

            const left0 = parseFloat(element.style.left) || 0;
            const clientX0 = event.clientX;

            const top0 = parseFloat(element.style.top) || 0;
            const clientY0 = event.clientY;

            window.addEventListener("mousemove", mouseMoveDragHandler);
            window.addEventListener("mouseup", mouseUpHandler);

            function mouseMoveDragHandler(event) {
                const dx = event.clientX - clientX0;
                const dy = event.clientY - clientY0;

                element.style.left = left0 + dx + "px";
                element.style.top = top0 + dy + "px";
            }

            function mouseUpHandler(event) {
                document.body.style.cursor = "auto";

                window.removeEventListener("mousemove", mouseMoveDragHandler);
                window.removeEventListener("mouseup", mouseUpHandler);

                self.onDragStop();
            }
        }
    }
};
</script>

<style scoped>
.draggable {
    position: relative;
    user-select: none;
}

.resize-bar-hitbox {
    background-color: rgba(0, 0, 0, 0);
    width: 100%;
    height: 10px;
    position: absolute;
    left: 0px;
    right: 0px;
    margin: 0 auto;
}

.resize-bar-hitbox.top {
    top: 0px;
}

.resize-bar-hitbox.bottom {
    bottom: 0px;
}

.resize-bar {
    width: 50%;
    height: 3px;
    background-color: lightgrey;
    border-radius: 5px;
    position: absolute;
    left: 0px;
    right: 0px;
    margin: 0 auto;
}

.resize-bar.top {
    top: 2px;
}

.resize-bar.bottom {
    bottom: 2px;
}
</style>