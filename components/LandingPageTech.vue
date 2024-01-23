<template>
  <section id="tech" class="bg-[#f1f7fd] py-8 font-mona">
    <VSectionLayout class="flex">
      <div class="w-6/12] flex flex-col justify-center">
        <h2
          class="text-title-dark w-6/12 text-[3rem] font-black leading-[50px]"
        >
          Built with the modern tech stack
        </h2>
        <p class="text-message-dark mt-4 w-10/12 font-medium">
          Our tech stack includes Vue for building the user interface, Tailwind
          for efficient styling, Electron.js for creating cross-platform desktop
          applications, and Pinia store for state management.
        </p>
        <div class="mt-8 flex *:mr-2 *:w-[80px]">
          <img src="/images/vue-logo.svg" alt="Vue's logo" />
          <img src="/images/pinia-logo.svg" alt="Pinias's logo" />
          <img src="/images/tailwind-logo.svg" alt="Tailwind's logo" />
          <img src="/images/vite-logo.svg" alt="Vite's logo" />
          <img src="/images/electron-logo.svg" alt="Electron's logo" />
        </div>

        <div class="mt-4 flex">
          <GithubLink />
          <DownloadLink />
        </div>
      </div>
      <span class="block w-6/12 overflow-hidden rounded-lg">
        <img
          class="w-full"
          src="/images/tech-feature-banner.png"
          alt="Picture of three people smiling and working together"
        />
      </span>
    </VSectionLayout>
  </section>
</template>
