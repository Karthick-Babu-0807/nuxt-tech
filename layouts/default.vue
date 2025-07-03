<template>
  <div class="flex min-h-screen flex-col bg-gradient-to-br from-rose-100 via-orange-100 to-yellow-100">
    <AppNavHeader />
    <main>
      <slot />
    </main>
    <AppNavFooter />
  </div>
</template>
