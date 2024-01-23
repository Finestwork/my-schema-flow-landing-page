<script setup lang="ts">
import { useSweetScroll } from '~/composables/useSweetScroll';
import { onMounted, onUnmounted, ref } from 'vue';

const nav = ref<HTMLElement>();
const shouldBlur = ref(false);

const trackScrollPosition = () => {
  const Height = nav.value?.offsetHeight ?? 0;
  shouldBlur.value = Height <= window.scrollY;
};
useSweetScroll();
onMounted(() => {
  trackScrollPosition();
  window.addEventListener('scroll', trackScrollPosition);
});
onUnmounted(() => {
  window.removeEventListener('scroll', trackScrollPosition);
});
</script>

<template>
  <nav
    ref="nav"
    class="nav fixed left-0 top-0 z-50 w-full py-4"
    :class="{
      'bg-white shadow-[inset_0_-2px_0_0_rgba(8,145,178,0.37)]': shouldBlur,
    }"
  >
    <div class="mx-auto flex w-[95%] items-center justify-between">
      <a
        href="/"
        class="flex items-center outline-none ring-0 ring-cyan-500/50 transition-shadow focus-visible:ring-4"
      >
        <Logo
          class="rounded-md p-1 transition-all"
          :class="{
            'h-[35px] w-[35px]': !shouldBlur,
            'h-[25px] w-[25px]': shouldBlur,
          }"
        />
        <span class="text-md ml-1.5 font-mona font-extrabold text-slate-900"
          >MySchemaFlow</span
        >
      </a>
      <div class="*:mr-3.5">
        <VLandingPageLink class="link" to="#header">Home</VLandingPageLink>
        <VLandingPageLink class="link" to="#features"
          >Features
        </VLandingPageLink>
        <VLandingPageLink class="link" to="#tech">Tech</VLandingPageLink>
        <VLandingPageLink class="link" to="#faq">FAQ</VLandingPageLink>
      </div>
    </div>
  </nav>
</template>
