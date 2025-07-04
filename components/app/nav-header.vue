<script setup>
const menuOpen = ref(false);
const scrolled = ref(false);

function closeMenu() {
  menuOpen.value = false;
}

const { scrollToEl } = useSmoothScroll();

function handleScroll() {
  scrolled.value = window.scrollY > 10;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

watch(menuOpen, () => {
  const menuIcon = document.querySelector("#menuIcon");
  const closeIcon = document.querySelector("#closeIcon");

  if (!menuIcon || !closeIcon)
    return;

  useAnime({
    targets: [menuIcon, closeIcon],
    opacity: [0, 1],
    duration: 300,
    easing: "easeOutExpo",
  });
});
</script>

<template>
  <header
    class="sticky top-0 z-50 text-base-content shadow-md transition-colors duration-300"
    :class="[scrolled ? 'bg-base-100' : 'bg-transparent']"
  >
    <div class="navbar px-4 md:px-8 container mx-auto">
      <div class="flex-1">
        <a href="#home" class="text-xl font-bold text-primary cursor-pointer" @click.prevent="scrollToEl('#home')">
          <img src="/assets/images/runk-logo.png" alt="RUNK Logo" class="h-12 md:h-20">
        </a>
      </div>

      <!-- Desktop Nav -->
      <div class="hidden md:flex gap-6 items-center text-sm font-medium">
        <a href="#home" class="hover:text-primary" @click.prevent="scrollToEl('#home')">{{ $t("navigation.home") }}</a>
        <a href="#about" class="hover:text-primary" @click.prevent="scrollToEl('#about')">{{ $t("navigation.about_us")
        }}</a>
        <a href="#services" class="hover:text-primary" @click.prevent="scrollToEl('#services')">{{
          $t("navigation.services") }}</a>
        <a href="#technologies" class="hover:text-primary" @click.prevent="scrollToEl('#technologies')">{{
          $t("navigation.technologies") }}</a>
        <a href="#contact" class="btn btn-primary ml-4" @click.prevent="scrollToEl('#contact')">{{
          $t("navigation.lets_talk") }}</a>
      </div>

      <!-- Mobile Menu Icon -->
      <div class="md:hidden">
        <button
          class="btn btn-sm btn-ghost bg-transparent hover:bg-transparent
         focus:outline-none focus:ring-0 focus:bg-transparent
         active:outline-none active:ring-0 active:bg-transparent
         shadow-none border-none" @click="menuOpen = !menuOpen"
        >
          <Icon v-show="!menuOpen" id="menuIcon" name="ph:list" class="transition-transform duration-300 ease-in-out" size="32" />
          <Icon v-show="menuOpen" id="closeIcon" name="ph:x" class="transition-transform duration-300 ease-in-out" size="32" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="menuOpen" class="md:hidden min-h-screen text-base-content shadow px-6 py-4 space-y-2">
      <a href="#home" class="block hover:text-primary" @click.prevent="closeMenu(); scrollToEl('#home')">{{
        $t("navigation.home") }}</a>
      <a href="#about" class="block hover:text-primary" @click.prevent="closeMenu(); scrollToEl('#about')">{{
        $t("navigation.about_us") }}</a>
      <a href="#services" class="block hover:text-primary" @click.prevent="closeMenu(); scrollToEl('#services')">{{
        $t("navigation.services") }}</a>
      <a
        href="#technologies" class="block hover:text-primary"
        @click.prevent="closeMenu(); scrollToEl('#technologies')"
      >{{ $t("navigation.technologies") }}</a>
      <a href="#contact" class="btn btn-primary w-full mt-2" @click.prevent="closeMenu(); scrollToEl('#contact')">{{
        $t("navigation.lets_talk") }}</a>
    </div>
  </header>
</template>
