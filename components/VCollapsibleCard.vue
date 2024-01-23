<script setup lang="ts">
import { onMounted, ref } from 'vue';

const container = ref<HTMLElement>();
const toggleHeight = ref(true);
const onClickToggleHeight = () => {
  const height = container.value?.scrollHeight;
  if (!container.value) return;

  if (toggleHeight.value) {
    toggleHeight.value = false;
    Object.assign(container.value.style, {
      height: 0,
    });
    return;
  }

  toggleHeight.value = true;
  Object.assign(container.value.style, {
    height: `${height}px`,
  });
};

onMounted(onClickToggleHeight);
</script>
<template>
  <div class="font-mona">
    <button
      type="button"
      class="text-md text-title-dark w-full bg-cyan-50 px-4 py-4 text-left font-bold"
      :class="{
        'border-b-[2px] border-cyan-500': !toggleHeight,
      }"
      @click="onClickToggleHeight"
    >
      <slot name="title"></slot>
    </button>
    <div
      ref="container"
      class="duration-750 overflow-hidden bg-cyan-50 transition-[height]"
    >
      <p class="text-title-dark px-4 pb-4 text-left text-sm font-medium">
        <slot name="msg"></slot>
      </p>
    </div>
  </div>
</template>
