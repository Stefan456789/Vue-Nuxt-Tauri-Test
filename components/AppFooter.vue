<script setup lang="ts">
import { open } from '@tauri-apps/api/shell'
function openWindow (link: string) {
  open(link)
}
</script>
<template>
  <v-footer :elevation="2">
    <v-row no-gutters class="items-center">
      <v-btn :elevation="0">
        Contact
      </v-btn>
      <v-spacer />

      <v-btn :elevation="0" @click="openWindow('https://github.com/Stefan456789')">
        by Stefan Wiesinger
      </v-btn>
      <v-spacer />
      <v-btn :elevation="0" @click="openWindow('https://opensource.org/license/mit/')">
        MIT License
      </v-btn>
    </v-row>
  </v-footer>
</template>
