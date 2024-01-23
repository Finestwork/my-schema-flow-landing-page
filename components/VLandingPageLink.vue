<script setup lang="ts">
type TProps = {
  to: string;
};
const props = defineProps<TProps>();
</script>
<template>
  <NuxtLink class="font-bold text-slate-900 font-mona" :to="props.to">
    <slot></slot>
  </NuxtLink>
</template>
