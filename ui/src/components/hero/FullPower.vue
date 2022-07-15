<template>
  <div class="full-power">
    <p class="full-power__title">Full Power</p>
    <span class="full-power__value">{{ props.fullPower }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  fullPower: {
    required: true,
    default: 0,
    type: Number
  }
})
</script>

<style lang="scss">
.full-power {
  font-family: 'Boogaloo', cursive;
  font-size: 2.5rem;

  &__title {
    margin: 0;
  }

  &__value {
    font-size: 3rem;
  }
}
</style>