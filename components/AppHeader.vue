<template>
  <v-app-bar :elevation="2">
    <v-app-bar-title>Test App</v-app-bar-title>
    <NuxtLink to="/">
      <v-btn>
        Homepage
      </v-btn>
    </NuxtLink>
    <NuxtLink to="/article/1">
      <v-btn>
        Article 1
      </v-btn>
    </NuxtLink>
    <NuxtLink to="/article/2">
      <v-btn>
        Article 2
      </v-btn>
    </NuxtLink>
    <NuxtLink to="/about">
      <v-btn>
        About
      </v-btn>
    </NuxtLink>

    <template #append>
      <DarkModeButton />
    </template>
  </v-app-bar>
</template>
