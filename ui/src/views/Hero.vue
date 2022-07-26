<template>
  <SseTest />
  <div class="hero">
    <FullPower :full-power="store.fullPower"/>
    <Counter 
      title="Level"
      :starting-value="store.heroLevel"
      @increment="store.incrementHeroLevel()"
      @decrement="store.decrementHeroLevel()"
    />
    <Counter
      title="Items Power"
      :starting-value="store.itemsPower"
      @increment="store.incrementItemsPower()"
      @decrement="store.decrementItemsPower()"
    />
  </div>
</template>

<script setup lang="ts">
import Counter from '../components/shared/Counter.vue';
import FullPower from '../components/hero/FullPower.vue';
import { useStore } from '../stores/main';
import SseTest from '../components/PlayersList.vue';

const store = useStore()

</script>

<style lang="scss">
@use "../main.scss";

.hero {
  @extend %full-page;
  @media screen and (min-width: 720px) {
    width: 720px;
  }
  max-width: 720px;
}
</style>