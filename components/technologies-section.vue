<script setup lang="ts">
const techRef = ref<HTMLElement | null>(null);
const categories = [
  {
    title: "Frontend",
    technologies: ["angular", "react", "vuejs", "nextjs", "nuxtjs"],
  },
  {
    title: "Backend",
    technologies: ["nodejs", "ruby", "java", "python", "go", "nestjs", "ruby-on-rails", "spring", "django"],
  },
  {
    title: "Cloud & DevOps",
    technologies: ["aws", "azure", "gcp", "docker", "jenkins", "circle-ci", "kubernetes", "terraform", "apache-kafka"],
  },
  {
    title: "AI & Analytics",
    technologies: ["chat-gpt", "tableau", "power-bi"],
  },
  {
    title: "Databases",
    technologies: ["postgresql", "mysql", "mongodb", "redis"],
  },
  {
    title: "Mobile",
    technologies: ["android", "ios", "flutter", "react"],
  },
];

function getImagePath(name: string) {
  return `/assets/icons/tech/${name}-icon.svg`;
}

function animateCategoryBox(el: Element) {
  el.classList.remove("opacity-0", "translate-y-8");
  useAnime({
    targets: el,
    opacity: [0, 1],
    translateY: [40, 0],
    duration: 800,
    easing: "easeOutExpo",
  });
}

onMounted(() => {
  nextTick(() => {
    if (!techRef.value)
      return;

    const lines = techRef.value.querySelectorAll(".timeline-line");

    lines.forEach((line) => {
      line.classList.add("opacity-0", "translate-y-8");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCategoryBox(entry.target);
            }
          });
        },
      );

      observer.observe(line);
    });
  });
});
</script>

<template>
  <section id="technologies" class="relative pt-20 px-4 bg-base-100 text-base-content">
    <div class="max-w-6xl mx-auto">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-primary">
          {{ $t("technologies_section.title") }}
        </h2>

        <p class="mt-6 text-lg text-gray-400">
          {{ $t("technologies_section.description") }}
        </p>
      </div>

      <ul ref="techRef" class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-20">
        <li v-for="(category, index) in categories" :key="index" class="timeline-line">
          <div class="timeline-middle">
            <div class="w-6 h-6 rounded-full bg-gradient-to-tr from-green-400 to-blue-500 animate-pulse" />
          </div>
          <div :class="index % 2 === 0 ? 'timeline-start md:text-end' : 'timeline-end'" class="mb-10">
            <div class="text-xl font-bold mb-4">
              {{ category.title }}
            </div>
            <div class="flex flex-wrap justify-center md:justify-start gap-6">
              <div
                v-for="icon in category.technologies" :key="icon"
                class="w-20 h-20 rounded-xl bg-white dark:bg-base-200 shadow flex items-center justify-center hover:scale-110 transition-transform"
              >
                <img :src="getImagePath(icon)" :alt="icon" class="w-12 h-12">
              </div>
            </div>
          </div>
          <hr class="bg-primary">
        </li>
      </ul>
    </div>
  </section>
</template>
