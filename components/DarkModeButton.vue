<script setup lang="ts">

const isDark = useDark()
const toggleDark = useToggle(isDark)

const vuetifyTheme = useTheme()

vuetifyTheme.global.name.value = isDark.value ? 'dark' : 'light'
watchEffect(() => {
  vuetifyTheme.global.name.value = isDark.value ? 'dark' : 'light'
})

</script>

<template>
  <div>
    <v-btn v-if="isDark" icon="mdi-white-balance-sunny" @click="toggleDark()" />
    <v-btn v-else icon="mdi-moon-waning-crescent" @click="toggleDark()" />
  </div>
</template>
