<script setup lang="ts">
type TProps = {
  href: string;
};
const props = defineProps<TProps>();
</script>
<template>
  <a
    class="link relative z-10 px-2 py-2 text-[3rem] font-black before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:scale-y-0 before:bg-cyan-600 before:transition-transform hover:text-cyan-100 hover:before:scale-y-100"
    :href="props.href"
  >
    <slot></slot>
  </a>
</template>
