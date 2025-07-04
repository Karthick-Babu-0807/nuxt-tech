<script setup lang="ts">
const footerRef = ref<HTMLElement | null>(null);

const { scrollToEl } = useSmoothScroll();

const industries = ["SaaS", "Fintech", "E-commerce", "Healthtech"];

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
  <footer
    ref="footerRef"
    class="opacity-0 translate-y-6 bg-[#0f172a] text-white pt-20 pb-10 transition-all border-t border-slate-700"
  >
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h2 class="text-xl font-semibold text-white tracking-wide mb-4">
            {{ $t("footer.company_name") }}
          </h2>
          <p class="text-sm text-gray-400 max-w-xs">
            {{ $t("footer.description") }}
          </p>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-4">
            {{ $t("footer.quick_links") }}
          </h3>
          <nav aria-label="Footer Navigation">
            <ul class="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#home" class="hover:text-primary transition" @click.prevent="scrollToEl('#home')">
                  {{ $t("navigation.home") }}
                </a>
              </li>
              <li>
                <a href="#about" class="hover:text-primary transition" @click.prevent="scrollToEl('#about')">
                  {{ $t("navigation.about_us") }}
                </a>
              </li>
              <li>
                <a href="#services" class="hover:text-primary transition" @click.prevent="scrollToEl('#services')">
                  {{ $t("navigation.services") }}
                </a>
              </li>
              <li>
                <a
                  href="#technologies" class="hover:text-primary transition"
                  @click.prevent="scrollToEl('#technologies')"
                >
                  {{ $t("navigation.technologies") }}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-4">
            {{ $t("footer.industries") }}
          </h3>
          <ul class="space-y-2 text-sm text-gray-400">
            <li v-for="(industry, index) in industries" :key="index">
              {{ industry }}
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-4">
            {{ $t("footer.contact") }}
          </h3>
          <ul class="space-y-2 text-sm text-gray-400">
            <li>
              <div class="flex items-center gap-2">
                <Icon name="ph:envelope-simple" size="24" />
                <a
                  href="mailto:runktechnology@gmail.com"
                  class="hover:text-primary transition"
                >runktechnology@gmail.com</a>
              </div>
            </li>
            <li>
              <div class="flex items-center gap-2">
                <Icon name="ph:phone" size="24" />
                <a href="tel:+919999999999" class="hover:text-primary transition">+91 99999 99999</a>
              </div>
            </li>
          </ul>
          <div class="flex items-center space-x-4 pt-4 text-xl text-gray-400">
            <a href="#" class="hover:text-primary transition" @click.prevent="scrollToEl('#home')">
              <img src="/public/assets/icons/social/linkedin-icon.svg" alt="Linkedin Logo" class="w-6 h-6">
            </a>
          </div>
        </div>
      </div>

      <div class="flex justify-center items-center">
        <p class="mt-6 text-sm text-gray-500">
          {{ $t("footer.copy_rights") }} {{ $t("footer.all_rights_reserved") }}
        </p>
      </div>
    </div>
  </footer>
</template>
