<script setup lang="ts">
type TProps = {
  to: string;
};
const props = defineProps<TProps>();
</script>
<template>
  <NuxtLink class="font-bold text-sm text-slate-900 font-mona hover:text-cyan-600 focus-visible:text-cyan-600" :to="props.to">
    <slot></slot>
  </NuxtLink>
</template>
