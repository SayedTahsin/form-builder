<script lang="ts" setup>
import type { HorizontalLayout } from '@/types'
import AllElement from '../root/helper/AllElement.vue'
import { ref } from 'vue'
import { useBlockValidity } from '@/composables/validation'

const props = defineProps<{
  ui: HorizontalLayout
  parentData?: any
  parentErr?: (val: number) => void
}>()

const show = ref(true)
const { errCnt, updateErr } = useBlockValidity(props.parentErr)
</script>

<template>
  <div v-if="ui.showLabels">
    <div class="is-flex is-justify-content-space-between p-4 bg-gray-400">
      <h6 @click="show = !show">{{ ui.label }}</h6>
      <div>
        <p>{{ errCnt }}</p>
        <p>{{ ui.description }}</p>
      </div>
    </div>
    <div v-show="show" class="is-flex gap-16 is-fullwidth">
      <template v-for="el in ui.elements" :key="el.label">
        <AllElement :el="el" :c-data="parentData" :parent-err="updateErr" />
      </template>
    </div>
  </div>
  <div v-else>
    <div class="is-flex gap-16 w-full">
      <AllElement
        v-for="el in ui.elements"
        :key="el.label"
        :el="el"
        :c-data="parentData"
        :parent-err="updateErr"
      />
    </div>
  </div>
</template>
