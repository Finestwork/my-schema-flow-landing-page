<script setup lang='ts'>
import { useCalculateTopPadding } from '~/composables/useCalculateTopPadding';
import { ref } from 'vue';

const nav = ref();
const header = ref();
useCalculateTopPadding(header, nav);
</script>
<template>
  <div class="relative pb-[100rem]">
    <LandingPageNav ref="nav" />
    <LandingPageHeader ref="header" class="pt-4" />
    <LandingPageFeature/>
  </div>
</template>
