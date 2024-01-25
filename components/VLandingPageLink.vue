<script setup lang="ts">
type TProps = {
  to: string;
};
const props = defineProps<TProps>();
</script>
<template>
  <a
    class="font-mona text-sm font-bold text-slate-900 hover:text-cyan-600 focus-visible:text-cyan-600"
    :href="props.to"
  >
    <slot></slot>
  </a>
</template>
