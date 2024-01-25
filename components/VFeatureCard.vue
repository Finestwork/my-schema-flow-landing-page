<template>
  <article class="px-8 text-center font-mona">
    <span
      class="mx-auto block h-[50px] w-[50px] rounded-full border-4 border-cyan-100 bg-cyan-200 fill-cyan-600 p-2.5"
    >
      <slot name="icon"></slot>
    </span>
    <h3 class="text-md mt-5 font-bold text-title-dark">
      <slot name="title"></slot>
    </h3>
    <p class="text-center text-sm font-medium text-message-dark">
      <slot name="msg"></slot>
    </p>
  </article>
</template>
<script setup lang="ts"></script>
