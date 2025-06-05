<script setup lang="ts">
const { locale, locales } = useI18n();
</script>

<template>
  <div class="form-control w-full max-w-30">
    <select v-model="locale" class="select select-bordered">
      <option v-for="loc in locales" :key="loc.code" :value="loc.code">
        {{ loc.name }}
      </option>
    </select>
  </div>
</template>
