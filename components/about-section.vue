<script setup>
const aboutRef = ref(null);

const industries = [
  {
    icon: "ph:cloud-check",
    color: "text-blue-400",
    title: "SaaS",
  },
  {
    icon: "ph:bank",
    color: "text-green-400",
    title: "Fintech",
  },
  {
    icon: "ph:shopping-cart",
    color: "text-pink-400",
    title: "E-commerce",
  },
  {
    icon: "ph:heartbeat",
    color: "text-purple-400",
    title: "Healthtech",
  },
];

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        useAnime({
          targets: ".about-item",
          opacity: [0, 1],
          translateY: [30, 0],
          easing: "easeOutExpo",
          duration: 800,
          delay: useAnime.stagger(150),
        });
      }
    });
  }, { threshold: 0.2 });

  if (aboutRef.value)
    observer.observe(aboutRef.value);
});
</script>

<template>
  <section id="about" ref="aboutRef" class="bg-base-100 text-base-content pt-20 px-4">
    <div class="container mx-auto max-w-6xl">
      <header class="text-center mb-12">
        <h2 class="text-4xl font-bold text-primary mb-4">
          {{ $t("navigation.about_us") }}
        </h2>
        <p class="text-lg text-gray-400 max-w-2xl mx-auto">
          {{ $t("about_us_section.description") }}
        </p>
      </header>

      <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        <div class="bg-base-200 rounded-xl p-6 shadow-lg about-item opacity-0">
          <div class="flex items-center mb-4">
            <Icon name="ph:handshake" size="48" class="text-cyan-400" />
            <h3 class="text-2xl font-bold text-cyan-400 ml-4">
              {{ $t("about_us_section.our_approach") }}
            </h3>
          </div>
          <p class="text-gray-400">
            {{ $t("about_us_section.our_approach_description") }}
          </p>
        </div>

        <div class="bg-base-200 rounded-xl p-6 shadow-lg about-item opacity-0">
          <div class="flex items-center mb-4">
            <Icon name="ph:lightbulb" size="48" class="text-purple-400" />
            <h3 class="text-2xl font-bold text-purple-400 ml-4">
              {{ $t("about_us_section.our_purpose") }}
            </h3>
          </div>
          <p class="text-gray-400">
            {{ $t("about_us_section.our_purpose_description") }}
          </p>
        </div>

        <div class="bg-base-200 rounded-xl p-6 shadow-lg about-item opacity-0">
          <div class="flex items-center mb-4">
            <Icon name="ph:code" size="48" class="text-pink-400" />
            <h3 class="text-2xl font-bold text-pink-400 ml-4">
              {{ $t("about_us_section.our_expertise") }}
            </h3>
          </div>
          <p class="text-gray-400">
            {{ $t("about_us_section.our_expertise_description") }}
          </p>
        </div>
      </div>

      <div class="mt-16 text-center about-item opacity-0">
        <h3 class="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
          {{ $t("about_us_section.subtitle_highlight1") }}<br class="hidden md:block"> {{
            $t("about_us_section.subtitle_highlight2") }}
        </h3>
        <p class="text-lg text-gray-400 max-w-3xl mx-auto">
          {{ $t("about_us_section.subtitle_highlight_description") }}
        </p>
      </div>

      <div class="mt-20 text-center about-item opacity-0">
        <h3 class="text-3xl font-bold text-primary mb-6">
          {{ $t("about_us_section.industries_title") }}
        </h3>
        <p class="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
          {{ $t("about_us_section.industries_description") }}
        </p>

        <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <div
            v-for="(industry, index) in industries" :key="index"
            class="flex flex-col items-center bg-base-200 p-6 rounded-xl shadow-md"
          >
            <Icon :name="industry.icon" size="40" class="mb-3" :class="[industry.color]" />
            <h4 class="text-xl font-semibold" :class="[industry.color]">
              {{ industry.title }}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
