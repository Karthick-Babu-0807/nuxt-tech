<script setup lang="ts">
const navRef = ref<HTMLElement | null>(null);

onMounted(() => {
  useAnime({
    targets: navRef.value,
    translateY: [-40, 0],
    opacity: [0, 1],
    duration: 700,
    easing: "easeOutExpo",
  });
});
</script>

<template>
  <nav ref="navRef" class="navbar bg-base-100 text-base-content shadow-md sticky top-0 z-50 backdrop-blur-lg">
    <!-- Navbar Start: Logo -->
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost text-xl tracking-wide font-semibold">
        {{ $t('nuxt_tech') }}
      </NuxtLink>
    </div>

    <!-- Navbar Center: Desktop Links -->
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 gap-3 text-sm font-medium">
        <li>
          <NuxtLink to="#home" class="nav-link">
            {{ $t('home') }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#about" class="nav-link">
            {{ $t('about') }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#services" class="nav-link">
            {{ $t('services') }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#tech" class="nav-link">
            {{ $t('tech_stack') }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#contact" class="nav-link">
            {{ $t('contact') }}
          </NuxtLink>
        </li>
      </ul>
    </div>

    <!-- Navbar End: Utilities (Desktop) -->
    <div class="navbar-end hidden lg:flex items-center gap-3">
      <AppLanguageToggle />
      <AppThemeToggle />
    </div>

    <!-- Navbar End: Mobile Menu -->
    <div class="navbar-end lg:hidden">
      <details class="dropdown dropdown-end">
        <summary class="btn btn-ghost p-2 rounded-btn">
          <Icon name="ph:list-duotone" class="w-6 h-6" />
        </summary>
        <ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <NuxtLink to="#home">
              {{ $t('home') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="#about">
              {{ $t('about') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="#services">
              {{ $t('services') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="#tech">
              {{ $t('tech_stack') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="#contact">
              {{ $t('contact') }}
            </NuxtLink>
          </li>
          <li class="flex flex-row justify-between items-center px-2 pt-2">
            <AppLanguageToggle />
            <AppThemeToggle />
          </li>
        </ul>
      </details>
    </div>
  </nav>
</template>

<style scoped>
.nav-link {
  position: relative;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: currentColor;
  transition: width 0.3s ease-in-out;
}

.nav-link:hover::after {
  width: 100%;
}
</style>
