<script setup>
const exampleVideo = 'https://raw.githubusercontent.com/Tresjs/assets/main/textures/video-textures/useVideoTexture.mp4'
const texture = ref()
texture.value = await useVideoTexture(exampleVideo, { loop: true })

const monkey = shallowRef()

const isDark = useDark()
watch(monkey, (value) => {
  console.log(value.value) // Really for a log?!!! 😫
})
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
