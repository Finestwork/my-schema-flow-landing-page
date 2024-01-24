<script setup lang="ts">
import GithubLink from '~/components/GithubLink.vue';
import DownloadLink from '~/components/DownloadLink.vue';
</script>

<template>
  <header
    id="header"
    class="relative z-10 flex flex-col items-center font-mona"
  >
    <img
      class="absolute left-0 top-0 -z-10 block w-full"
      src="/images/bg-landing-page.svg"
      alt="Grid Lines Background"
    />

    <div
      class="mt-16 flex items-center rounded-full border-2 border-cyan-200 bg-cyan-100 px-2 py-1 text-xs font-medium text-cyan-800"
    >
      <span class="mr-1 rounded-full bg-cyan-800 px-2 py-1.5 text-white"
        >Version 1.0</span
      >
      We’ve just released a new feature
      <span class="ml-2 mt-[.13rem] block w-[12px]">
        <IconRightArrow class="stroke-cyan-500" />
      </span>
    </div>

    <h1
      class="max-w-[1200px] text-center text-[4.5rem] font-extrabold text-[#101828]"
    >
      Simplify Database Visualization with
      <span class="relative"
        >MySchemaFlow
        <img
          class="absolute bottom-0 left-0 right-0 -z-10 mx-auto w-[90%] translate-y-10"
          src="/images/title-highlighter.svg"
          alt="Abstract shape used for highlighting titles"
      /></span>
    </h1>

    <p class="text-md mt-[4rem] max-w-[700px] font-medium text-slate-700">
      A powerful electron.js application that helps you create and understand
      MySQL database diagrams with ease. Visualize your database structure and
      streamline your workflow.
    </p>

    <div class="mt-8 flex items-center">
      <GithubLink class="mr-3" />
      <DownloadLink />
    </div>

    <div class="relative mx-auto w-[80%]">
      <img
        class="drop-shadow-slate-400/10 mt-16 block drop-shadow-lg"
        src="/images/sample.png"
        alt="Screenshot of MySchemaFlow"
      />
      <span
        class="absolute bottom-0 left-0 block h-[50%] w-full translate-y-4 bg-gradient-to-t from-white"
      />
    </div>
  </header>
</template>
