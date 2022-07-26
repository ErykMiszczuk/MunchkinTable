<template>
  <div class="player">
    <div class="player__name">
      {{ props.playerData.username }}
    </div>
    <div class="player__power">
      {{ playerPower }}
    </div>
    <div class="player__stats">
      <div class="stats--hero-level">
        {{ props.playerData.stats.heroLevel }}
      </div>
      <div class="stats--items-power">
        {{ props.playerData.stats.itemsPower }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { User } from '../../types/User';

const props = defineProps<{
  playerData: User
}>()

const playerPower = computed(() => {
  return props.playerData.stats.heroLevel + props.playerData.stats.itemsPower;
})

</script>

<style lang="scss">
@use "../../main.scss";

.player {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  min-width: 180px;
  font-size: 1.5rem;

  &__name {
    padding: .5rem;
    font-size: 1.5rem;
    grid-row: 1;
    grid-column: 1;
  }

  &__power {
    padding: .5rem;
    font-size: 1.5rem;
    flex: 1;
    grid-row: 1;
    grid-column: 2;
  }

  &__stats {
    grid-row: 1;
    grid-column: 3;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}

.stats {
  margin: 1rem;

  &--hero-level {
    padding: .25rem;
    &::before {
      content: "💪";
    }
  }
  

  &--items-power {
    padding: .25rem;
    &::before {
      content: "🏹";
    }
  }
}

</style>