<script setup lang="ts">
import { ref } from 'vue'
const data = ['A', 'B', 'C', 'D', 'E']
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
      <button class="mr-4 px-1 rounded bg-slate-300" @click="sortAsc">
        Sort A-Z ↑
      </button>
      <button class="mr-4 px-1 rounded bg-slate-300" @click="sortDesc">
        Sort Z-A ↓
      </button>
      <button class="mr-4 px-1 rounded bg-slate-300" @click="reset">
        Reset
      </button>
    </div>
    <ul ref="parent">
      <li
        v-for="(item, index) in items"
        :key="item"
        class="mx-4"
      >
        <span @click="removeItem(item)">
          {{ item }}
        </span>

        <button :index="index" class="bg-slate-300 rounded p-1 m-1" @click="moveUp">
          ↑
        </button>
        <button :index="index" class="bg-slate-300 rounded p-1 m-1" @click="moveDown">
          ↓
        </button>
      </li>
    </ul>
  </div>
</template>
