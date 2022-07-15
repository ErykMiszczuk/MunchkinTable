<template>
  <div class="counter">
    <div class="counter__title">{{ title }}</div>
    <button class="counter__button--increment" @click="countIncrement">Higher</button>
    <div class="counter__value">{{ count }}</div>
    <button class="counter__button--decrement" @click="countDecrement">Lower</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  title: String,
  startingValue: {
    required: false,
    default: 0,
    type: Number
  }
})

const emit = defineEmits<{
  (event: 'increment', value: number): void,
  (event: 'decrement', value: number): void,
}>()

const count = ref(Number(props.startingValue));

function countIncrement() {
  count.value++;
  emit('increment', count.value);
}
function countDecrement() {
  count.value--;
  emit('decrement', count.value);
}

</script>

<style lang="scss">
%button {
  padding: .5rem 1rem;
  background-color: white;
  border-style: solid;
  border-color: var(--accent);
  border-width: 2px;
  border-radius: calc(1rem / 4);
  font-size: 1.5rem;
}

.counter {
  font-family: 'Boogaloo', cursive;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: .5rem;
  grid-row-gap: .5rem;
  margin-bottom: 2rem;

  &__title {
    grid-area: 1 / 1 / 2 / 3;
    font-size: 2rem;
  }

  &__value {
    grid-area: 2 / 1 / 3 / 3;
    font-size: 2rem;
  }

  &__button {
    @extend %button;

    &--increment {
      @extend %button;
      grid-area: 3 / 1 / 4 / 2;
      color: var(--accept);
      border-color: var(--accept);

      &:hover {
        @extend %button;
        color: white;
        background-color: var(--accept);
        border-color: var(--accept);
      }
      
      &:active {
        @extend %button;
        color: white;
        background-color: var(--accept);
        border-color: var(--accept);
      }
    }
    
    &--decrement {
      @extend %button;
      grid-area: 3 / 2 / 4 / 3;
      color: var(--danger);
      border-color: var(--danger);
      
      &:hover {
        @extend %button;
        color: white;
        background-color: var(--danger);
        border-color: var(--danger);
      }

      &:active {
        @extend %button;
        color: white;
        background-color: var(--danger);
        border-color: var(--danger);
      }
    }
  }
}
</style>
