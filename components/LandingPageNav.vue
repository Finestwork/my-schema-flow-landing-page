<script setup lang="ts">
import { useNavDrawerTransition } from '~/composables/useNavDrawerTransition';
import { useSweetScroll } from '~/composables/useSweetScroll';
import { onMounted, onUnmounted, ref } from 'vue';

const nav = ref<HTMLElement>();
const shouldDisplayDrawer = ref(false);
const shouldBlur = ref(false);
const { onEnter, onLeave } = useNavDrawerTransition();

const trackScrollPosition = () => {
  const Height = nav.value?.offsetHeight ?? 0;
  shouldBlur.value = Height <= window.scrollY;
};
const trackViewport = () => {
  if (shouldDisplayDrawer.value && window.innerWidth >= 640) {
    shouldDisplayDrawer.value = false;
  }
};
useSweetScroll();
onMounted(() => {
  trackScrollPosition();
  window.addEventListener('scroll', trackScrollPosition);
  window.addEventListener('resize', trackViewport);
});
onUnmounted(() => {
  window.removeEventListener('scroll', trackScrollPosition);
  window.removeEventListener('resize', trackViewport);
});
watch(shouldDisplayDrawer, (display) => {
  if (display) {
    document.body.style.overflowY = 'hidden';
    return;
  }
  Object.assign(document.body.style, {
    overflowY: null,
  });
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
        <span
          class="text-md ml-1.5 hidden font-mona font-extrabold text-slate-900 sm:block"
          >MySchemaFlow</span
        >
      </a>
      <div class="hidden *:mr-3.5 sm:block">
        <VLandingPageLink class="link" to="#home">Home</VLandingPageLink>
        <VLandingPageLink class="link" to="#features"
          >Features
        </VLandingPageLink>
        <VLandingPageLink class="link" to="#tech">Tech</VLandingPageLink>
        <VLandingPageLink class="link" to="#faq">FAQ</VLandingPageLink>
      </div>

      <HamburgerButton
        ref="hamburgerBtn"
        class="block sm:hidden"
        :activate="shouldDisplayDrawer"
        @on-click="shouldDisplayDrawer = true"
      />

      <Teleport to="body">
        <Transition @enter="onEnter" @leave="onLeave">
          <LandingPageNavDrawer
            v-if="shouldDisplayDrawer"
            v-model:show="shouldDisplayDrawer"
          />
        </Transition>
      </Teleport>
    </div>
  </nav>
</template>
