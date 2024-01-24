<script setup lang="ts">
const { show } = defineModels<{
  show: boolean;
}>();
</script>
<template>
  <div class="fixed left-0 top-0 z-[100] h-full w-full font-mona sm:hidden">
    <span
      id="background"
      class="absolute left-0 top-0 h-full w-full cursor-pointer bg-cyan-950/50"
      @click="show = false"
    />
    <div
      id="drawer"
      class="absolute right-0 top-0 flex h-full w-[80%] max-w-[350px] flex-col bg-white"
    >
      <LandingPageNavDrawerLink href="#home"> Home</LandingPageNavDrawerLink>
      <LandingPageNavDrawerLink href="#features">
        Features
      </LandingPageNavDrawerLink>
      <LandingPageNavDrawerLink href="#tech"> Tech</LandingPageNavDrawerLink>
      <LandingPageNavDrawerLink href="#faq"> FAQ</LandingPageNavDrawerLink>
    </div>
  </div>
</template>
