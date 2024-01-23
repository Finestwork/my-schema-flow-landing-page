<script setup lang="ts">
type TProps = {
  to: string;
};
const props = defineProps<TProps>();
</script>
<template>
  <NuxtLink class="font-semibold font-mona" :to="props.to">
    <slot></slot>
  </NuxtLink>
</template>
