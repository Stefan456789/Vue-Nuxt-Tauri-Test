<template>
  <div class="h-screen w-screen dark:bg-black">
    <AppHeader />
    <div class="m-4 dark:text-white">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>
