<template>
  <section id="features" class="font-mona">
    <VSectionLayout>
      <h2
        class="mx-auto max-w-[285px] text-center text-lg font-black text-[#101828] min-[450px]:max-w-[400px] min-[450px]:text-3xl min-[550px]:text-4xl lg:max-w-none lg:text-[3rem]"
      >
        Create Database Diagrams
        <span class="relative text-cyan-500"
          >with Ease
          <span
            class="absolute bottom-0 left-0 w-full translate-y-4 min-[450px]:translate-y-6 min-[1000px]:translate-y-8"
          >
            <IllustrationCurlyUnderline class="fill-cyan-500" />
          </span>
        </span>
      </h2>
      <div class="mt-24 flex flex-wrap *:mb-16">
        <VFeatureCard class="w-full md:w-6/12 lg:w-4/12">
          <template #icon>
            <IconStack />
          </template>
          <template #title>Visual Representation</template>
          <template #msg
            >Clear and easy-to-understand visual representation of the database
            schema, making it simple for users to grasp the relationships
            between tables, columns, and constraints
          </template>
        </VFeatureCard>
        <VFeatureCard class="w-full md:w-6/12 lg:w-4/12">
          <template #icon>
            <IconMagicStick />
          </template>
          <template #title>Cross-platform compatibility</template>
          <template #msg
            >Compatible with various databases and platforms, allowing users to
            work with different types of databases and operating systems.
          </template>
        </VFeatureCard>
        <VFeatureCard class="w-full md:w-6/12 lg:w-4/12">
          <template #icon>
            <IconExport />
          </template>
          <template #title>Import/Export</template>
          <template #msg
            >Allows users to import SQL scripts and diagrams, save diagrams
            locally, and export them as images or SQL scripts
          </template>
        </VFeatureCard>
        <VFeatureCard class="w-full md:w-6/12 lg:w-4/12">
          <template #icon>
            <IconCode />
          </template>
          <template #title>MySQL Playground</template>
          <template #msg
            >Effortlessly test your diagrams without manual scripting. Just
            click a button, and we'll handle table creation for you.</template
          >
        </VFeatureCard>
        <VFeatureCard class="w-full md:w-6/12 lg:w-4/12">
          <template #icon>
            <IconHand />
          </template>
          <template #title>Say Goodbye to Table Limits</template>
          <template #msg
            >Creating tables is no longer limited, you can now create unlimited
            tables. Whether you want to create a basic table template or draw
            your own table, you can do so easily with MySchemaFlow.</template
          >
        </VFeatureCard>
        <VFeatureCard class="w-full md:w-6/12 lg:w-4/12">
          <template #icon>
            <IconExport />
          </template>
          <template #title>Community-Driven Innovation</template>
          <template #msg
            >We value the input of our community and strive to implement their
            suggestions whenever possible. Our goal is to create a software that
            meets the needs of our users.</template
          >
        </VFeatureCard>
      </div>
    </VSectionLayout>
  </section>
</template>
