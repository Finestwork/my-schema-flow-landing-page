<script setup lang="ts">
import { useCalculateTopPadding } from '~/composables/useCalculateTopPadding';
import { ref } from 'vue';

const nav = ref();
const header = ref();
useCalculateTopPadding(header, nav);
</script>
<template>
  <div class="relative">
    <LandingPageNav ref="nav" />
    <LandingPageHeader ref="header" class="mb-[10rem]" />
    <LandingPageFeature />
    <LandingPageTech class="my-16" />
    <LandingPageFAQ />
    <LandingPageFooter />
  </div>
</template>
