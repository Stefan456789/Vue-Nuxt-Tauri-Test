<script setup lang="ts">

const isDark = useDark()
const toggleDark = useToggle(isDark)

const vuetifyTheme = useTheme()
watchEffect(() => {
  if (isDark.value) {
    vuetifyTheme.global.name.value = 'dark'
  } else {
    vuetifyTheme.global.name.value = 'light'
  }
})

</script>

<template>
  <v-btn v-if="isDark" icon="mdi-white-balance-sunny" @click="toggleDark()" />
  <v-btn v-else icon="mdi-moon-waning-crescent" @click="toggleDark()" />
</template>
