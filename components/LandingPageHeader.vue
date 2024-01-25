<template>
  <header id="home" class="relative z-10 flex flex-col items-center font-mona">
    <img
      class="absolute left-0 top-0 -z-10 block w-full min-w-[1000px]"
      src="/images/bg-landing-page.svg"
      alt="Grid Lines Background"
    />

    <VSectionLayout>
      <div class="flex justify-center">
        <div
          class="mt-10 flex items-center justify-center truncate rounded-full border-2 border-cyan-200 bg-cyan-100 px-2 py-1 text-[.6rem] font-medium text-cyan-800 md:mt-16"
        >
          <span
            class="mr-1 truncate rounded-full bg-cyan-800 px-2 py-1.5 text-white"
            >Version 1.0</span
          >
          We’ve just released a new feature
          <span class="ml-2 mt-[.13rem] hidden w-[12px] min-[320px]:block">
            <IconRightArrow class="stroke-cyan-500" />
          </span>
        </div>
      </div>

      <h1
        class="min-[600]:max-w-[600px] min-[600px]:text-6xl mx-auto mt-2 max-w-[412px] text-center text-[1rem] font-extrabold text-[#101828] min-[350px]:text-[1.5rem] md:max-w-[1200px] min-[1000px]:text-7xl"
      >
        Simplify Database Visualization with
        <span class="relative"
          >MySchemaFlow
          <img
            class="min-[1000px]:translate-y-10 absolute bottom-0 left-0 right-0 -z-10 mx-auto w-[90%] translate-y-2"
            src="/images/title-highlighter.svg"
            alt="Abstract shape used for highlighting titles"
        /></span>
      </h1>

      <p
        class="min-[1000px]:mt-16 mx-auto mt-3.5 max-w-[700px] text-xs font-medium text-slate-700 md:text-sm"
      >
        A powerful electron.js application that helps you create and understand
        MySQL database diagrams with ease. Visualize your database structure and
        streamline your workflow.
      </p>

      <div class="min-[1000px]:mt-10 mt-4 flex items-center justify-center">
        <GithubLink class="mr-3" />
        <DownloadLink />
      </div>

      <div class="relative mx-auto hidden w-[80%] md:block">
        <img
          class="drop-shadow-slate-400/10 mt-16 block drop-shadow-lg"
          src="/images/sample.png"
          alt="Screenshot of MySchemaFlow"
        />
        <span
          class="absolute bottom-0 left-0 block h-[50%] w-full translate-y-4 bg-gradient-to-t from-white"
        />
      </div>
    </VSectionLayout>
  </header>
</template>
<script setup lang="ts"></script>
