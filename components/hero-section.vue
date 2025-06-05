<script setup lang="ts">
const heroRef = ref<HTMLElement | null>(null);

function scrollToContact() {
  const el = document.querySelector("#contact");
  if (el)
    el.scrollIntoView({ behavior: "smooth" });
}

onMounted(() => {
  const el = heroRef.value;
  if (!el)
    return;

  useAnime
    .timeline()
    .add({
      targets: el.querySelector("h1"),
      translateY: [-40, 0],
      opacity: [0, 1],
      duration: 800,
      easing: "easeOutExpo",
    })
    .add({
      targets: el.querySelector("p"),
      translateY: [-20, 0],
      opacity: [0, 1],
      duration: 600,
      offset: "-=400",
      easing: "easeOutExpo",
    })
    .add({
      targets: el.querySelectorAll("button, a.btn"),
      translateY: [-10, 0],
      opacity: [0, 1],
      duration: 500,
      delay: useAnime.stagger(100),
      offset: "-=300",
      easing: "easeOutExpo",
    });
});
</script>

<template>
  <section
    id="home" ref="heroRef"
    class="min-h-screen flex items-center justify-center px-6 text-center bg-base-100 text-base-content"
  >
    <div>
      <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-4">
        {{ $t("hero_title_1") }}
        <span class="text-primary">{{ $t("hero_title_2") }}</span>
      </h1>

      <p class="text-lg md:text-xl max-w-2xl mx-auto mb-6 text-gray-600 dark:text-gray-400">
        {{ $t("hero_description") }}
      </p>

      <div class="flex flex-wrap gap-4 justify-center">
        <button class="btn btn-primary" @click="scrollToContact">
          {{ $t("get_in_touch") }}
        </button>
        <NuxtLink to="#services" class="btn btn-outline">
          {{ $t("explore_services") }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
