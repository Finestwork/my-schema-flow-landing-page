<template>
  <section id="tech" class="bg-[#f1f7fd] py-10 font-mona lg:py-16">
    <VSectionLayout class="flex">
      <div class="flex w-full flex-col justify-center lg:w-6/12">
        <h2
          class="text-xl font-black text-title-dark lg:w-8/12 lg:max-w-[408px] lg:text-[3rem] lg:leading-[50px]"
        >
          Built with the modern tech stack
        </h2>
        <p class="mt-1 w-10/12 text-sm font-medium text-message-dark">
          Our tech stack includes Vue for building the user interface, Tailwind
          for efficient styling, Electron.js for creating cross-platform desktop
          applications, and Pinia store for state management.
        </p>
        <div class="mt-8 flex *:mr-2 *:w-[50px] lg:*:w-[80px]">
          <img src="/images/vue-logo.svg" alt="Vue's logo" />
          <img src="/images/pinia-logo.svg" alt="Pinias's logo" />
          <img src="/images/tailwind-logo.svg" alt="Tailwind's logo" />
          <img src="/images/vite-logo.svg" alt="Vite's logo" />
          <img src="/images/electron-logo.svg" alt="Electron's logo" />
        </div>

        <div class="mt-4 flex">
          <GithubLink class="mr-3" />
          <DownloadLink />
        </div>
      </div>
      <span class="hidden w-6/12 lg:flex lg:items-center">
        <img
          class="w-full rounded-lg"
          src="/images/tech-feature-banner.png"
          alt="Picture of three people smiling and working together"
        />
      </span>
    </VSectionLayout>
  </section>
</template>
