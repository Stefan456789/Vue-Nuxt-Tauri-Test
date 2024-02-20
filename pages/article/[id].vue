<script setup lang="ts">

const route = useRoute()
</script>

<template>
  <div>
    <h1>Article Page</h1>
    <p>Article ID: {{ route.params.id }}!</p>
  </div>
</template>
