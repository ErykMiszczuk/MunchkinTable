<template>
  <div class="player">
    <div class="player__name">
      {{ props.playerData.username }}
    </div>
    <div class="player__stats">
      <div class="stats__hero-level">
        {{ props.playerData.stats.heroLevel }}
      </div>
      <div class="stats__items-power">
        {{ props.playerData.stats.itemsPower }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { User } from '../../types/User';

const props = defineProps<{
  playerData: User
}>()

</script>

<style lang="scss">

</style>