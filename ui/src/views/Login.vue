<template>
  <div class="login">
    <form action="#" class="login-form">
      <input 
        type="text"
        name="username"
        id="input-username"
        v-model="name"
      />
      <button class="login__button" @click="loginButtonClickHandler"> Login </button>
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

<style scoped>

</style>