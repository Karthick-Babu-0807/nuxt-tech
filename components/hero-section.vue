<script setup lang="ts">
const heroRef = ref<HTMLElement | null>(null);

const { scrollToEl } = useSmoothScroll();

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
  <section id="home" ref="heroRef" class="relative flex items-center justify-center px-6">
    <div class="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <!-- Left Image Column -->
      <div class="flex justify-center">
        <img src="@/assets/images/hero.png" alt="Hero Illustration" class="w-full max-w-md md:max-w-lg opacity-90">
      </div>

      <!-- Right Text Column -->
      <div class="z-10 text-center md:text-left">
        <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-6">
          {{ $t('hero.title_part1') }}
          <span class="text-primary">{{ $t('hero.title_highlight') }}</span>,<br>
          {{ $t('hero.title_part2_prefix') }}
          <span class="text-secondary">{{ $t('hero.title_part2_highlight') }}</span>.
        </h1>

        <p class="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-400">
          {{ $t('hero.description') }}
        </p>

        <div class="flex flex-wrap gap-4 justify-center md:justify-start">
          <button class="btn bg-primary text-white hover:bg-blue-700" @click="scrollToEl('#contact')">
            {{ $t('hero.cta_primary') }}
          </button>
          <a
            href="#services" class="btn btn-outline border-primary text-primary hover:bg-primary hover:text-white"
            @click.prevent="scrollToEl('#services')"
          >
            {{ $t('hero.cta_secondary') }}
          </a>
        </div>
      </div>
    </div>
    <svg
      class="absolute bottom-0 left-0 w-full pointer-events-none" viewBox="0 0 1428 174"
      xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
    >
      <g stroke="none" stroke-width="1" fill="#FFFFFF" fill-rule="evenodd">
        <g transform="translate(-2.000000, 44.000000)" fill-opacity="0.1">
          <path
            d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
          />
          <path
            d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
          />
          <path
            d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
            fill-opacity="0.2"
          />
        </g>
        <g transform="translate(-4.000000, 76.000000)">
          <path
            d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
          />
        </g>
      </g>
    </svg>
  </section>
</template>
