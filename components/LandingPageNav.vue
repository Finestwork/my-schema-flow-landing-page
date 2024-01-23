<template>
  <nav class="top-0 z-50 fixed left-0 w-full py-2">
    <div class="mx-auto flex w-[95%] items-center justify-between">
        <span class="flex items-center">
          <Logo class="h-[35px] w-[35px] rounded-md p-1" />
          <span class="text-md font-mona ml-1.5 font-extrabold text-slate-900"
          >MySchemaFlow</span
          >
        </span>
      <div>
        <VLandingPageLink class="mr-1.5" to="#features"
        >Home
        </VLandingPageLink
        >
        <VLandingPageLink class="mr-1.5" to="#features"
        >Features
        </VLandingPageLink
        >
        <VLandingPageLink class="mr-1.5" to="#features"
        >Tech
        </VLandingPageLink
        >
        <VLandingPageLink class="mr-1.5" to="#features"
        >FAQ
        </VLandingPageLink
        >
        <VLandingPageLink to="#features">Contributors</VLandingPageLink>
      </div>
    </div>
  </nav>
</template>
