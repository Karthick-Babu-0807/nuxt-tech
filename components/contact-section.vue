<script setup lang="ts">
const contactRef = ref<HTMLDivElement | null>(null);

onMounted(() => {
  if (!contactRef.value)
    return;
  useAnime({
    targets: contactRef.value,
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 800,
    easing: "easeOutExpo",
  });
});
</script>

<template>
  <section id="contact" class="py-20 bg-base-100 text-base-content">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">
        <span class="text-primary">{{ $t("contact") }}</span> {{ $t("us") }}
      </h2>
      <p class="max-w-2xl mx-auto mb-12 text-gray-500 dark:text-gray-400">
        {{ $t("contact_description") }}
      </p>

      <div
        ref="contactRef"
        class="max-w-xl mx-auto bg-base-200 p-8 rounded-lg shadow space-y-4 opacity-0 translate-y-6"
      >
        <input type="text" :placeholder="$t('name')" class="input input-bordered w-full">
        <input type="email" :placeholder="$t('email')" class="input input-bordered w-full">
        <textarea class="textarea textarea-bordered w-full" rows="4" :placeholder="$t('your_message')" />
        <button class="btn btn-primary w-full">
          {{ $t("send_message") }}
        </button>
      </div>
    </div>
  </section>
</template>
