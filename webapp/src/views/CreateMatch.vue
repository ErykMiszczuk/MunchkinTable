<template>
	<div class="create-match">
    <h1 class="create-match__title">Create match</h1>
    <div class="create-match__link">
      <div>
        {{ matchLink }}
      </div>
      <div>
        <button 
          @click="onClickCreateMatch"
          class="create-match__button"
        >
          Generate
        </button> 
      </div>
    </div>
    <button
      class="create-match__button--ok"
      @click="onClickJoinMatch"
      :disabled="!isLinkGenerated"
    >
      Join
    </button>
    <button
      class="create-match__button--cancel"
      @click="onClickGoBack"
    >
      Go back
    </button>
	</div>
</template>

<script setup lang="ts">
import { useClipboard, useTitle } from "@vueuse/core";
import { onMounted, ref } from "vue";
import { ROUTES } from "../routes";
import { useRouter } from "vue-router";

const router = useRouter();

const matchLink = ref("");
const matchId = ref("NeverGonnaGiveYouUp")
let isLinkGenerated = ref(false);

const {
  text,
  copy,
  copied,
  isSupported
} = useClipboard({ source: matchLink })

onMounted(() => {
  useTitle("Create match | MunchkinTable");
})

function onClickCreateMatch() {
  const url = window.location.origin;
  matchLink.value = `${url}${ROUTES.JOINMATCH.path}/${matchId.value}`;
  copy(matchLink.value);
  isLinkGenerated.value = true;
}

function onClickJoinMatch() {
  router.push({
    path: ROUTES.JOINMATCH.path,
    query: {
      matchId: matchId.value
    }
  })
}

function onClickGoBack() {
  router.back()
}
</script>

<style lang="scss">
@use "../main.scss";

.create-match {
    @media screen and (min-width: 720px) {
      width: 720px;
    }
    max-width: 720px;
    min-width: 320px;

    font-family: 'Boogaloo', cursive;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;

    &__title {
    grid-area: 1 / 1 / 2 / 3;
    font-size: 2rem;
  }
  
  &__link {
    @extend %button;
    grid-area: 2 / 1 / 3 / 3;

    & > div {
      padding-bottom: .5rem;
    }
  }

  &__button {
    @extend %button;

    &--ok {
      @extend %button;
      grid-area: 3 / 1 / 4 / 2;
      font-size: 1.75rem;
      color: var(--accept);
      border-color: var(--accept);

      &:hover {
        @extend %button;
        color: white;
        background-color: var(--accept);
        border-color: var(--accept);
      }
      
      &:active {
        @extend %button;
        color: white;
        background-color: var(--accept);
        border-color: var(--accept);
      }

      &:disabled {
        color: gray;
        border-color: gray;
        background-color: rgb(201, 199, 199);
      }
    }
    
    &--cancel {
      @extend %button;
      font-size: 1.75rem;
      grid-area: 3 / 2 / 4 / 3;
      color: var(--danger);
      border-color: var(--danger);
      
      &:hover {
        @extend %button;
        color: white;
        background-color: var(--danger);
        border-color: var(--danger);
      }

      &:active {
        @extend %button;
        color: white;
        background-color: var(--danger);
        border-color: var(--danger);
      }
     
      &:disabled {
        color: gray;
        border-color: gray;
        background-color: rgb(201, 199, 199);
      }
    }
  }
}
</style>