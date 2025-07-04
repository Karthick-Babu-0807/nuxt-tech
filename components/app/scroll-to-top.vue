<script setup lang="ts">
const visible = ref(false);

function handleScroll() {
  visible.value = window.scrollY > 300;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<template>
  <button
    v-show="visible"
    class="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center
           bg-primary text-white rounded-full shadow-lg
           hover:bg-primary-focus transition-all duration-300"
    aria-label="Scroll to top"
    @click="scrollToTop"
  >
    <Icon name="ph:arrow-up" size="24" />
  </button>
</template>
