<script setup lang="ts">
import { useCalculateTopPadding } from '~/composables/useCalculateTopPadding';
import { ref } from 'vue';

const nav = ref();
const header = ref();
useCalculateTopPadding(header, nav);
</script>
<template>
  <div class="relative overflow-x-hidden">
    <LandingPageNav ref="nav" />
    <LandingPageHeader ref="header" class="mb-20 md:mb-[10rem]" />
    <LandingPageFeature />
    <LandingPageTech class="my-16" />
    <LandingPageFAQ />
    <LandingPageFooter />
  </div>
</template>
