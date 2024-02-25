<script setup lang="ts">
useEventListener('contextmenu', (event) => {
  event.preventDefault()
})
</script>

<template>
  <v-app :key="useTheme().global.name.value">
    <AppHeader />
    <v-main class="m-4 dark:text-white grow">
      <slot />
    </v-main>
    <AppFooter class="!grow-0" />
  </v-app>
</template>
