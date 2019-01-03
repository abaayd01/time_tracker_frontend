<template>
    <div class="sandbox-container">
        <div class="draggable">
        </div>
    </div>
</template>

<script>
import interact from "interactjs";
import InteractMethods from "../helpers/InteractMethods";

let x, y;

// interact(".draggable").draggable({
//     onmove: event => {
//         const target = event.target,
//             x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx,
//             y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

//         target.style.webkitTransform = target.style.transform =
//             "translate(" + x + "px, " + y + "px)";

//         target.setAttribute("data-x", x);
//         target.setAttribute("data-y", y);
//     }
// });

export default {
    mounted() {
        window.jQuery( ".draggable" ).draggable({
        });

        window.jQuery( ".draggable" ).resizable({
            handles: "s",
            grid: [20, 50]
        });
        // const resizeBox = document.querySelector(".draggable");
        // const resizeBar = document.querySelector(".resize-bar");
        // resizeBar.addEventListener("mousedown", event => {
        //     event.preventDefault();
        //     window.addEventListener("mousemove", resize);
        //     window.addEventListener("mouseup", stopResize);
        // });

        // function resize(event) {
        //     resizeBox.style.height = event.pageY - resizeBox.getBoundingClientRect().top + "px";
        // }

        // function stopResize() {
        //     window.removeEventListener("mousemove", resize);
        // }
    }
};
</script>

<style scoped>
.sandbox-container {
    background-color: grey;
    height: 100vh;
    width: 100vw;
    display: flex;
    padding-top: 60px;
    justify-content: center;
}

.draggable {
    width: 150px;
    height: 200px;
    background-color: white;
    position: relative;
    box-sizing: border-box;
}

.resize-bar {
    width: 75px;
    height: 10px;
    background-color: blue;
    position: absolute;
    bottom: -5px;
    left: 0px;
    right: 0px;
    margin: 0 auto;
}
</style>