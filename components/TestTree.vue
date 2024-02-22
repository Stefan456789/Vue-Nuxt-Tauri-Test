<script setup lang="ts">
const data = ['🚀', '⚡', '☁️', '🛠', '🦾', '🔋']
const items = ref(data)

function removeItem (toRemove: string) {
  items.value = items.value.filter(item => item !== toRemove)
}

function sortAsc () {
  items.value.sort()
}

function sortDesc () {
  items.value.sort().reverse()
}

function moveUp (toMove: MouseEvent) {
  const index = (toMove.target as HTMLElement).getAttribute('index') as unknown as number
  if (index - 1 >= 0) {
    const temp = items.value[index]
    items.value[index] = items.value[index - 1]
    items.value[index - 1] = temp
  }
}

function moveDown (toMove: MouseEvent) {
  const index:number = +((toMove.target as HTMLElement).getAttribute('index') as unknown as number)
  if (index + 1 < items.value.length) {
    const temp = items.value[index]
    items.value[index] = items.value[index + 1]
    items.value[index + 1] = temp
  }
}

function reset () {
  items.value = []
  items.value = data
}
const [parent] = useAutoAnimate()
</script>

<template>
  <div class="m-2">
    <h3 class="text-xl mb-4">
      Click emojis to remove them.
    </h3>
    <div>
      <v-btn class="mr-4 px-1" @click="sortAsc">
        Sort A-Z ↑
      </v-btn>
      <v-btn class="mr-4 px-1" @click="sortDesc">
        Sort Z-A ↓
      </v-btn>
      <v-btn class="mr-4 px-1" @click="reset">
        Reset
      </v-btn>
    </div>
    <ul ref="parent">
      <li
        v-for="(item, index) in items"
        :key="item"
        class="mx-4"
      >
        <v-chip @click="removeItem(item)">
          {{ item }}
        </v-chip>

        <v-btn :index="index" class="p-1 m-1" icon="mdi-arrow-up-thick" @click="moveUp" />
        <v-btn :index="index" class="p-1 m-1" icon="mdi-arrow-down-thick" @click="moveDown" />
      </li>
    </ul>
  </div>
</template>
