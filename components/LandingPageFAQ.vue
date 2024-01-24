<template>
  <div id="faq" class="font-mona">
    <VSectionLayout class="mb-16 text-center">
      <h2 class="text-lg font-black text-title-dark lg:text-[3rem]">
        Frequently Asked Questions
      </h2>
      <p class="lg:text-md text-sm text-message-dark lg:mt-6">
        Find answers to common questions about MySchemaFlow and its features.
      </p>
      <div class="mx-auto mt-10 max-w-[800px]">
        <VCollapsibleCard>
          <template #title>Is this free?</template>
          <template #msg
            >We understand you may be curious about whether our service is free,
            and we're excited to confirm that it is indeed free for you to use,
            modify, and enjoy. Feel free to explore all the features and
            benefits we offer without any concerns. We're here to make your life
            easier and more convenient. Just a friendly note: while our platform
            is free, some assets like icons and illustrations have limited
            licenses, so please check our
            <a
              class="text-cyan-600"
              href="https://github.com/Finestwork/my-schema-flow"
              target="_blank"
              >GitHub repo</a
            >
            for more details.
          </template>
        </VCollapsibleCard>
        <VCollapsibleCard>
          <template #title>How can I contribute?</template>
          <template #msg
            >We greatly appreciate any and all contributions from our users. You
            can contribute by click this
            <a
              class="text-cyan-600"
              href="https://github.com/Finestwork/my-schema-flow"
              target="_blank"
              >link</a
            >
            or download the software by click this
            <a
              class="text-cyan-600"
              href="https://github.com/Finestwork/my-schema-flow/releases/tag/v1.0.0"
              target="_blank"
              >link</a
            >.
          </template>
        </VCollapsibleCard>
        <VCollapsibleCard>
          <template #title>Can I import existing databases?</template>
          <template #msg
            >You can definitely import your existing database and create
            diagrams based on the data. Just keep in mind that we currently only
            support SQL databases. But don't worry, you can help us expand the
            supported database types by contributing!
          </template>
        </VCollapsibleCard>
      </div>
      <h6 class="mt-14 text-lg font-black text-title-dark">
        Still have questions?
      </h6>
      <p class="text-md font-medium text-message-dark">
        We'd love to hear something from you! You can start creating a
        <a
          class="text-cyan-600"
          href="https://github.com/Finestwork/my-schema-flow/discussions"
          target="_blank"
          >discussion here</a
        >.
      </p>
    </VSectionLayout>
    <div class="bg-[#f1f7fd] py-16">
      <VSectionLayout class="flex flex-col lg:flex-row">
        <div class="flex flex-col lg:w-6/12">
          <h3
            class="text-xl font-black text-title-dark lg:w-[600px] lg:text-4xl"
          >
            Create diagrams effortlessly with SchemaFlow
          </h3>
          <p class="text-xs font-medium text-message-dark lg:text-sm">
            Visualize and comprehend your database structure with our
            user-friendly interface.
          </p>
        </div>

        <div class="mt-4 flex w-6/12 lg:mt-0 lg:items-center lg:justify-center">
          <GithubLink class="mr-2" />
          <DownloadLink />
        </div>
      </VSectionLayout>
    </div>
  </div>
</template>
