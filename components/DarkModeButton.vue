<script setup lang="ts">
const darkMode = window
if (darkMode) {
  document.body.classList.add('dark')
}
function light () {
  document.body.classList.remove('dark')
}
</script>

<template>
  <button @click="light">
    Dark
  </button>
</template>
