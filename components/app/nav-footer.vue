<script setup lang="ts">
const footerRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!footerRef.value)
    return;
  useAnime({
    targets: footerRef.value,
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 800,
    delay: 100,
    easing: "easeOutExpo",
  });
});
</script>

<template>
  <footer ref="footerRef" class="bg-base-200 text-base-content py-10 opacity-0 translate-y-6">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-center md:text-left">
          <p class="text-lg font-semibold tracking-wide">
            {{ $t("nuxt_tech") }}
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            © {{ new Date().getFullYear() }} {{ $t("all_rights_reserved") }}
          </p>
        </div>

        <div class="flex space-x-4 text-xl">
          <NuxtLink to="#" class="hover:text-primary transition">
            <Icon name="ph:linkedin-logo-duotone" />
          </NuxtLink>
          <NuxtLink to="#" class="hover:text-primary transition">
            <Icon name="ph:github-logo-duotone" />
          </NuxtLink>
          <NuxtLink to="#" class="hover:text-primary transition">
            <Icon name="ph:envelope-duotone" />
          </NuxtLink>
        </div>

        <ul class="flex flex-wrap justify-center gap-4 text-sm">
          <li>
            <NuxtLink to="#home" class="hover:text-primary">
              {{ $t("home") }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="#about" class="hover:text-primary">
              {{ $t("about") }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="#services" class="hover:text-primary">
              {{ $t("services") }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="#tech" class="hover:text-primary">
              {{ $t("tech_stack") }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="#contact" class="hover:text-primary">
              {{ $t("contact") }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
