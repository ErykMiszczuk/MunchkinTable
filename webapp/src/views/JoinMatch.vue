<template>
  <div class="join-match">
    <form action="#" class="join-match__form">
      <fieldset>
        <legend>Join match</legend>
        <input 
          type="text"
          name="username"
          id="input-username"
          class="form__input--text"
          placeholder="Kowalski"
          v-model="username"
        />
        <input 
          type="text"
          name="match"
          id="input-match"
          class="form__input--text"
          placeholder="ae864age"
          v-model="matchId"
        >
        <button class="login__button" @click="loginButtonClickHandler"> Login </button>
      </fieldset>
    </form>
  </div>
</template>

<script setup lang="ts">
import { set, useTitle } from "@vueuse/core";
import { onMounted, ref } from "vue";
import { ROUTES } from "../routes";
import { useRoute, useRouter } from "vue-router"

const router = useRouter();
const route = useRoute();
const matchId = ref("");
const username = ref("");

onMounted(() => {
    useTitle("Join match | MunchkinTable");
    set(matchId, route.query.matchId)
})

function loginButtonClickHandler() {
  router.push(ROUTES.GAME)
}
</script>


<style lang="scss">

</style>