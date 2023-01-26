<template>
  <div class="main-menu">
    <h1>MunchkinTable</h1>
    <button
        class="main-menu__button"
        @click="onClickCreateMatch"
    >
        Create Match
    </button>
    <button
        class="main-menu__button"
        @click="onClickJoinMatch"
    >
        Join Match
    </button>
  </div>
</template>

<script setup lang="ts">
import { useTitle } from "@vueuse/core";
import { onMounted } from "vue";
import { ROUTES } from "../routes";
import { useRouter } from "vue-router"

const router = useRouter();

onMounted(() => {
    useTitle("Main menu | MunchkinTable");
})

function onClickCreateMatch() {
    router.push(ROUTES.CREATEMATCH);
}

function onClickJoinMatch() {
    router.push(ROUTES.JOINMATCH);
}

</script>

<style lang="scss">
@use "../main.scss";

.main-menu {
    @media screen and (min-width: 720px) {
        width: 720px;
    }
    max-width: 720px;
    min-width: 320px;

    font-family: 'Boogaloo', cursive;
    font-size: 2rem;

    display: flex;
    flex-direction: column;

    &__button {
        @extend %button;
        margin: .5rem;

        &:hover {
            @extend %button;
            color: white;
            background-color: var(--accept);
            border-color: var(--accept);
        }
    }
}
</style>