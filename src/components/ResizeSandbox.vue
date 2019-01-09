<template>
    <div class="sandbox-container">
        <interactable class="test">
            <div class="container">testing</div>
        </interactable>
    </div>
</template>

<script>
import Interactable from "./Interactable";

export default {
    components: {
        Interactable
    }
};
</script>

<style scoped>
.sandbox-container {
    height: 100vh;
    width: 100vw;
    display: flex;
    padding-top: 60px;
    justify-content: center;
}

.test {
    background-color: white;
    height: 100px;
    width: 200px;
}

.container {
    background-color: peachpuff;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
