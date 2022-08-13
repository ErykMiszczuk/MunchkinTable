<template>
  <div class="login">
    <form action="#" class="login-form">
      <fieldset>
        <legend>Login</legend>
        <input 
          type="text"
          name="username"
          id="input-username"
          class="login__input--text"
          placeholder="Kowalski"
          v-model="name"
        />
        <button class="login__button" @click="loginButtonClickHandler"> Login </button>
      </fieldset>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ROUTES } from '../routes';
import { useStore } from '../stores/main';

const router = useRouter()
const store = useStore()

const name = ref("");

function loginButtonClickHandler(e: Event) {
  e.preventDefault();
  store.login(name.value);
  router.push(ROUTES.GAME);
}
</script>

<style lang="scss">
@use "../main.scss";

.login {
  @extend %full-page;
  @media screen and (min-width: 720px) {
    width: 720px;
  }
  max-width: 720px;
  min-width: 320px;

  font-family: 'Boogaloo', cursive;
  font-size: 2rem;

  fieldset {
    display: flex;
    flex-direction: column;
    border-width: var(--radius);
    border-style: solid;
    border-color: var(--accent);
    border-radius: var(--radius);
  }

  &__input--text {
    @extend %button;
    font-size: 1rem;
    background-color: white;
    margin: .5rem;
  }

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