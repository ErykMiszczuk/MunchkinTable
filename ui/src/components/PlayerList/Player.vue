<template>
  <div class="player">
    <div class="player__name">
      {{ props.playerData.username }}
    </div>
    <div class="player__stats">
      <div class="stats--full-power">
        {{ playerPower }}
      </div>
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
  width: 6rem;
  margin: 0 .5rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1.75rem 1fr;

  &__name {
    padding: .5rem;
    font-size: 1.25rem;
    grid-row: 1;
    grid-column: 1;
  }

  &__stats {
    grid-row: 2;
    grid-column: 1;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}

.stats {
  &--full-power {
    padding: .25rem;
    &::before {
      content: "⚜️ ";
    }
  }

  &--hero-level {
    padding: .25rem;
    &::before {
      content: "💪 ";
    }
  }
  

  &--items-power {
    padding: .25rem;
    &::before {
      content: "🏹 ";
    }
  }
}

</style>