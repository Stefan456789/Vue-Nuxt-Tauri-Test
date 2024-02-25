<script setup lang="ts">
const isDark = useDark()
</script>

<template>
  <TresCanvas :clear-color="isDark ? '#000' : '#FFF'">
    <TresPerspectiveCamera
      :position="[3, 3, 3]"
      :look-at="[0, 0, 0]"
    />
    <OrbitControls />
    <Torus :args="[1, 0.5, 20, 40]" color="orange" />
    <TresAmbientLight :intensity="1" />
  </TresCanvas>
</template>
