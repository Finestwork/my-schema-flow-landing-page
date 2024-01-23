<template>
  <nav class="top-0 z-50 fixed left-0 w-full py-2">
    <div class="mx-auto flex w-[95%] items-center justify-between">
        <a href="/" class="flex items-center outline-none ring-0 focus-visible:ring-4 ring-cyan-500/50 transition-shadow">
          <Logo class="h-[35px] w-[35px] rounded-md p-1" />
          <span class="text-md font-mona ml-1.5 font-extrabold text-slate-900"
          >MySchemaFlow</span
          >
        </a>
      <div>
        <VLandingPageLink class="mr-1.5" to="#header"
        >Home
        </VLandingPageLink
        >
        <VLandingPageLink class="mr-1.5" to="#features"
        >Features
        </VLandingPageLink
        >
        <VLandingPageLink class="mr-1.5" to="#tech"
        >Tech
        </VLandingPageLink
        >
        <VLandingPageLink class="mr-1.5" to="#faq"
        >FAQ
        </VLandingPageLink
        >
        <VLandingPageLink to="#contributors">Contributors</VLandingPageLink>
      </div>
    </div>
  </nav>
</template>
