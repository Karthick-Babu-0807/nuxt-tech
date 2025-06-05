<script setup lang="ts">
const stackRef = ref<HTMLDivElement | null>(null);

const techStack = [
  { name: "Nuxt.js", icon: "ph:leaf-duotone" },
  { name: "Vue.js", icon: "ph:triangle-duotone" },
  { name: "TypeScript", icon: "ph:code-duotone" },
  { name: "Tailwind CSS", icon: "ph:wind-duotone" },
  { name: "DaisyUI", icon: "ph:flower-duotone" },
  { name: "Node.js", icon: "ph:hexagon-duotone" },
  { name: "PostgreSQL", icon: "ph:database-duotone" },
  { name: "AWS", icon: "ph:cloud-duotone" },
  { name: "GitHub", icon: "ph:github-logo-duotone" },
  { name: "Vercel", icon: "ph:rocket-duotone" },
];

onMounted(() => {
  if (!stackRef.value)
    return;
  useAnime({
    targets: stackRef.value.children,
    opacity: [0, 1],
    translateY: [40, 0],
    delay: useAnime.stagger(100),
    duration: 600,
    easing: "easeOutQuad",
  });
});
</script>

<template>
  <section id="tech" class="py-20 bg-base-100 text-base-content">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">
        {{ $t("our") }} <span class="text-primary">{{ $t("tech_stack") }}</span>
      </h2>
      <p class="max-w-2xl mx-auto mb-12 text-gray-500 dark:text-gray-400">
        {{ $t("tech_stack_description") }}
      </p>

      <div ref="stackRef" class="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <div
          v-for="(tech, index) in techStack" :key="index"
          class="card items-center py-6 bg-base-200 shadow hover:shadow-lg transition-all opacity-0 translate-y-4"
        >
          <div class="card-body items-center text-center">
            <Icon :name="tech.icon" class="w-8 h-8 text-primary mb-2" />
            <p class="text-sm font-medium">
              {{ tech.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
