<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(value) {
    colorMode.preference = value ? "dark" : "light";
  },
});
</script>

<template>
  <label class="swap swap-rotate">
    <input v-model="isDark" type="checkbox">
    <Icon name="ph:sun-dim-fill" class="swap-on" size="24" />
    <Icon name="ph:moon-fill" class="swap-off" size="24" />
  </label>
</template>
