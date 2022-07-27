<template>
  <div class="players-list">
    <ul class="list">
      <li v-for="(player, key) in playersStats" :key="key" class="list__list-item">
        <Player :player-data="player[1]" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import type { Ref } from 'vue';
import { functionalTry } from "../utils/functional-try";
import { User } from '../types/User';
import Player from './PlayerList/Player.vue';

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

<style lang="scss">
@use "../main.scss";

.list {
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-bottom: 2px solid var(--accent);
}
</style>
