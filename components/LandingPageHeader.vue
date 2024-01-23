<script setup lang="ts">
</script>

<template>
  <header class="relative z-10 flex items-center font-mona flex-col" id="header">
    <img
      class="absolute top-0 -z-10 left-0 w-full block"
      src="/images/bg-landing-page.svg"
      alt="Grid Lines Background"
    />

    <div
      class="flex items-center text-cyan-800 font-medium bg-cyan-100 border-2 mt-8 text-xs rounded-full px-2 py-1 border-cyan-200">
      <span class="bg-cyan-800 text-white px-2 py-1.5 rounded-full mr-1">Version 1.0</span>
      We’ve just released a new feature
      <span class="block w-[12px] mt-[.13rem] ml-2">
        <IconRightArrow class="stroke-cyan-500" />
      </span>
    </div>

    <h1 class="font-extrabold text-[4.5rem] max-w-[1200px] text-center">
      Simplify Database Visualization with <span class="relative">MySchemaFlow <img
      class="w-[90%] right-0 mx-auto absolute bottom-0 translate-y-10 left-0 -z-10"
      src="/images/title-highlighter.svg" alt="Abstract shape used for highlighting titles" /></span>
    </h1>

    <p class="mt-[4rem] max-w-[700px] text-slate-700 text-md font-medium">A powerful electron.js application that helps
      you create and understand MySQL database diagrams with ease. Visualize your database structure and streamline your
      workflow.</p>

    <div class="flex items-center mt-8">
      <a class="flex items-center border-2 mr-2 border-slate-300 rounded-md px-4 py-2 outline-none transition-shadow hover:border-cyan-500 group focus-visible:border-cyan-500 ring-0 focus-visible:ring-4 focus:ring-cyan-500/50" href="https://github.com/Finestwork/my-schema-flow" target="_blank">
        <span class="w-[20px] mr-1">
          <IconGithub class="fill-slate-800 group-hover:fill-cyan-600 group-focus-visible:fill-cyan-600" />
        </span>
        <span class="text-slate-800 font-semibold text-lg group-hover:text-cyan-600 group-focus-visible:text-cyan-600">Github</span>
      </a>
      <a class="flex items-center h-full bg-gradient-to-tr from-cyan-700 to-cyan-600 rounded-md px-4 py-2 outline-none hover:bg-gradient-to-tl transition-all ring-0 ring-cyan-700/50 focus-visible:ring-4" href="https://github.com/Finestwork/my-schema-flow/releases/tag/v1.0.0" target="_blank">
        <span class="w-[20px] mr-2">
          <IconDownload class="stroke-white" />
        </span>
        <span class="text-white font-semibold text-lg">Download</span>
      </a>
    </div>

    <div class="w-[80%] mx-auto relative">
      <img class="block  mt-16 drop-shadow-lg drop-shadow-slate-400/10" src="/images/sample.png" alt="Screenshot of MySchemaFlow"/>
      <span class="block translate-y-4 w-full h-[50%] absolute bottom-0 left-0 bg-gradient-to-t from-white"/>
    </div>
  </header>
</template>
