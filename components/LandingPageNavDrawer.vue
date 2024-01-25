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
      class="absolute right-0 top-0 flex h-full w-[80%] max-w-[350px] flex-col overflow-y-scroll bg-white"
    >
      <LandingPageNavDrawerLink href="#home" @click="show = false">
        Home</LandingPageNavDrawerLink
      >
      <LandingPageNavDrawerLink href="#features" @click="show = false">
        Features
      </LandingPageNavDrawerLink>
      <LandingPageNavDrawerLink href="#tech" @click="show = false">
        Tech</LandingPageNavDrawerLink
      >
      <LandingPageNavDrawerLink href="#faq" @click="show = false">
        FAQ</LandingPageNavDrawerLink
      >
    </div>
  </div>
</template>
