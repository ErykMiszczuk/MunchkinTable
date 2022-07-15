<template>
  <div>
    <h3>SSE TEST</h3>
    <span>{{ date }}</span>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

let date = ref(new Date())
let sse: EventSource;

onMounted(() => {
  sse = new EventSource('http://127.0.0.1:3000/sse')

  sse.onopen = () => {
    console.info("SSE Connected")
  }

  sse.onerror = () => {
    console.error("Panik")
  }

  sse.onmessage = (e) => {
    console.info(e)
    date = e.data
  };
});

onUnmounted(() => {
  sse.close();
})

</script>

<style scoped>

</style>