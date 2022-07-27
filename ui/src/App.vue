<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
@use "./main.scss";

#app {
  @extend %base-background;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--accent);
  display: flex;
  justify-content: center;
}
</style>
