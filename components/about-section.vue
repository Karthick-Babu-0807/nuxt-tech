<script setup lang="ts">
const aboutSection = ref<HTMLElement | null>(null);
const { t } = useI18n();

const aboutItems = [
  {
    icon: "ph:lightbulb-duotone",
    title: t("innovative_solutions"),
    desc: t("innovative_solutions_description"),
  },
  {
    icon: "ph:shield-check-duotone",
    title: t("secure_and_reliable"),
    desc: t("secure_and_reliable_description"),
  },
  {
    icon: "ph:rocket-launch-duotone",
    title: t("scalable_growth"),
    desc: t("scalable_growth_description"),
  },
];

function scaleUp(event: MouseEvent) {
  useAnime({
    targets: event.currentTarget,
    scale: 1.05,
    duration: 200,
    easing: "easeOutQuad",
  });
}

function scaleDown(event: MouseEvent) {
  useAnime({
    targets: event.currentTarget,
    scale: 1,
    duration: 200,
    easing: "easeOutQuad",
  });
}

onMounted(() => {
  useAnime({
    targets: aboutSection.value?.querySelectorAll("h2, .about-card"),
    translateY: [40, 0],
    opacity: [0, 1],
    delay: useAnime.stagger(150),
    duration: 800,
    easing: "easeOutExpo",
  });
});
</script>

<template>
  <section id="about" ref="aboutSection" class="py-20 px-4 md:px-8 bg-base-200 text-base-content">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-10">
        {{ $t("about") }} <span class="text-primary">{{ $t("us") }}</span>
      </h2>

      <div class="grid gap-6 md:grid-cols-3">
        <div
          v-for="(item, index) in aboutItems" :key="index"
          class="about-card card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300 p-6 cursor-pointer"
          @mouseenter="scaleUp($event)" @mouseleave="scaleDown($event)"
        >
          <div class="card-body items-center text-center">
            <Icon :name="item.icon" class="w-10 h-10 text-primary mb-4" />
            <h3 class="text-lg font-semibold mb-2">
              {{ item.title }}
            </h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
