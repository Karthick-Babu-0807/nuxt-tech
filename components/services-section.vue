<script setup lang="ts">
const cardsRef = ref<HTMLDivElement | null>(null);

const { t } = useI18n();

const services = [
  {
    icon: "ph:code-duotone",
    title: t("web_development"),
    description: t("web_development_description"),
  },
  {
    icon: "ph:cloud-duotone",
    title: t("cloud_integration"),
    description: t("cloud_integration_description"),
  },
  {
    icon: "ph:shield-check-duotone",
    title: t("security_solutions"),
    description: t("security_solutions_description"),
  },
];

onMounted(() => {
  if (!cardsRef.value)
    return;

  useAnime({
    targets: cardsRef.value.children,
    opacity: [0, 1],
    translateY: [40, 0],
    delay: useAnime.stagger(150),
    duration: 700,
    easing: "easeOutExpo",
  });
});
</script>

<template>
  <section id="services" class="py-20 bg-base-100 text-base-content">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">
        {{ $t("our") }} <span class="text-primary">{{ $t("services") }}</span>
      </h2>
      <p class="max-w-2xl mx-auto mb-12 text-gray-500 dark:text-gray-400">
        {{ $t("services_description") }}
      </p>

      <div ref="cardsRef" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(service, index) in services" :key="index"
          class="card bg-base-200 shadow hover:shadow-lg transition-all opacity-0 translate-y-4"
        >
          <div class="card-body items-center text-center">
            <Icon :name="service.icon" class="w-10 h-10 text-primary mb-2" />
            <h3 class="card-title">
              {{ service.title }}
            </h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
