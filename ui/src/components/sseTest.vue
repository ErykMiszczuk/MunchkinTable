<template>
  <div>
    <h3>SSE TEST</h3>
    <span>{{ date }}</span>
    <ul>
      <li v-for="(player, key) in playersStats" :key="key">
        {{ player }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import type { Ref } from 'vue';
import { functionalTry } from "../utils/functional-try";
import { User } from '../types/User';

let date = ref(new Date());
const playersStats: Ref<Map<string, User>> = ref(new Map());
let sse: EventSource;

onMounted(() => {
  sse = new EventSource('http://127.0.0.1:3000/sse')

  sse.onopen = () => {
    console.info("SSE Connected")
  }

  sse.onerror = () => {
    console.error("Panik")
  }

  sse.onmessage = (msg: MessageEvent) => {
    const [receivedMessage, fail] = functionalTry(() => JSON.parse(msg.data));
    
    if (fail) {
      console.info(msg.data)
    }

    if (receivedMessage) {
      for (const player of receivedMessage) {
        playersStats.value.set(player.username, player)
      }
    }
  };
});

onUnmounted(() => {
  sse.close();
});

</script>
