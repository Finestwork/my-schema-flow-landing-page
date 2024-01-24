<script setup lang="ts">
import anime from 'animejs/lib/anime.es.js';
import { ref } from 'vue';
import type { AnimeInstance } from 'animejs';

const lines = ref<Array<HTMLElement>>([]);
const isActive = ref(false);
let line1Animation: AnimeInstance | null = null;
let line2Animation: AnimeInstance | null = null;
let line3Animation: AnimeInstance | null = null;

const onClickToggleActive = () => {
  if (lines.value.length === 0) return;

  isActive.value = !isActive.value;

  const Line1 = lines.value[0];
  const Line2 = lines.value[1];
  const Line3 = lines.value[2];

  line1Animation?.pause();
  line2Animation?.pause();
  line3Animation?.pause();
  // Active
  if (isActive.value) {
    Object.assign(Line1.style, {
      transform: 'translateX(-50%)',
    });
    Object.assign(Line3.style, {
      transform: 'translateX(-50%)',
    });
    line1Animation = anime({
      targets: Line1,
      easing: 'easeOutQuint',
      duration: 1000,
      keyframes: [{ top: '50%' }, { translateX: '-50%', rotate: '405deg' }],
    });
    line2Animation = anime({
      targets: Line2,
      opacity: 0,
    });
    line3Animation = anime({
      targets: Line3,
      keyframes: [{ top: '50%' }, { translateX: '-50%', rotate: '-405deg' }],
    });
    return;
  }

  // Inactive
  line1Animation = anime({
    targets: Line1,
    keyframes: [{ translateX: '-50%', rotate: '0deg' }, { top: '30%' }],
  });
  line2Animation = anime({
    targets: Line2,
    opacity: 1,
    delay: 500,
  });
  line3Animation = anime({
    targets: Line3,
    keyframes: [{ translateX: '-50%', rotate: '0deg' }, { top: '70%' }],
  });
};
</script>
<template>
  <button
    :class="{
      'bg-cyan-100 hover:bg-cyan-200/70 focus-visible:bg-cyan-200/70': isActive,
      'bg-white hover:bg-cyan-100 focus-visible:bg-cyan-100': !isActive,
    }"
    class="group relative h-[35px] w-[35px] rounded-lg outline-none"
    type="button"
    @click="onClickToggleActive"
  >
    <span
      v-for="n in 3"
      ref="lines"
      :key="n"
      :class="{
        'bg-cyan-500': isActive,
        'bg-title-dark': !isActive,
        'top-[30%]': n === 1,
        'top-[50%]': n === 2,
        'top-[70%]': n === 3,
      }"
      class="absolute left-2/4 block h-[2px] w-[70%] -translate-x-2/4 rounded-full group-hover:bg-cyan-500 group-focus-visible:bg-cyan-500"
    />
  </button>
</template>
