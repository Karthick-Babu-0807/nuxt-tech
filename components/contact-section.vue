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
  <section id="contact" class="relative pt-28 pb-20 text-base-content overflow-hidden">
    <svg
      class="absolute top-0 left-0 w-full h-auto select-none pointer-events-none"
      viewBox="0 0 1439 147"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
          <g class="wave" fill="#FFFFFF">
            <path
              d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"
            />
          </g>
          <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
            <g transform="translate(719.5, 68.5) rotate(-180) translate(-719.5, -68.5)">
              <path
                d="M0,0 C90.728,0.928 147.913,27.188 291.91,59.912 C387.908,81.728 543.605,89.335 759,82.733 C469.336,156.254 216.336,153.668 0,74.973"
                opacity="0.1"
              />
              <path
                d="M100,104.708 C277.413,72.235 426.148,52.525 546.204,45.579 C666.259,38.633 810.525,41.798 979,55.074 C931.07,56.123 810.303,74.846 616.7,111.243 C423.097,147.641 250.863,145.463 100,104.708 Z"
                opacity="0.1"
              />
              <path
                d="M1046,51.652 C1130.83,29.329 1279.083,17.608 1439,40.166 L1439,120 C1271.172,77.944 1140.172,55.161 1046,51.652 Z"
                opacity="0.2"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>

    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl md:text-5xl font-bold mb-6 text-primary">
        {{ $t("contact_section.title") }}
      </h2>
      <p class="max-w-2xl mx-auto mb-12 text-gray-500 dark:text-gray-400">
        {{ $t("contact_section.description") }}
      </p>

      <div
        ref="contactRef"
        class="max-w-xl mx-auto bg-base-200 p-8 rounded-lg shadow space-y-4 opacity-0 translate-y-6"
      >
        <input type="text" :placeholder="$t('contact_section.form.name')" class="input input-bordered w-full">
        <input type="email" :placeholder="$t('contact_section.form.email')" class="input input-bordered w-full">
        <textarea class="textarea textarea-bordered w-full" rows="4" :placeholder="$t('contact_section.form.your_message')" />
        <button class="btn btn-primary w-full">
          {{ $t("contact_section.form.cta") }}
        </button>
      </div>
    </div>
  </section>
</template>
