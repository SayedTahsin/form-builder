<script lang="ts" setup>
import TheTrash from '@/components/icons/TheTrash.vue'
import type { BaseElement } from '@/types/schema'
import { defineAsyncComponent } from 'vue'

const TheInput = defineAsyncComponent(() => import('../../base/TheInput.vue'))
const SelectSingle = defineAsyncComponent(() => import('../../base/SelectSingle.vue'))
const TextArea = defineAsyncComponent(() => import('../../base/TextArea.vue'))
const CheckBox = defineAsyncComponent(() => import('../../base/CheckBox.vue'))
const TheRadio = defineAsyncComponent(() => import('../../base/TheRadio.vue'))

const props = defineProps<{
  element: BaseElement
  fn?: any
  items: string
  setValue: (val: any, items?: string) => void
  deleteValue: (key: string) => void
  getValue: (items: string) => any
}>()

const handleDelete = () => {
  if (props.items) props.deleteValue(props.items)
}
</script>

<template>
  <div class="is-flex is-fullwidth gap-16">
    <TheInput
      v-if="element.type === 'input'"
      class="is-fullwidth"
      :element="element"
      :items="items"
      :temp-value="getValue(items)"
      :set-value="setValue"
    />
    <SelectSingle
      class="is-fullwidth"
      v-if="element.type === 'select'"
      :element="element"
      :items="items"
      :temp-value="getValue(items)"
      :set-value="setValue"
    />
    <TheRadio
      class="is-fullwidth"
      v-if="element.type === 'radio'"
      :element="element"
      :items="items"
      :temp-value="getValue(items)"
      :set-value="setValue"
    />
    <CheckBox
      class="is-fullwidth"
      v-if="element.type === 'checkbox'"
      :element="element"
      :items="items"
      :temp-value="getValue(items)"
      :set-value="setValue"
    />
    <TextArea
      class="is-fullwidth"
      v-if="element.type === 'textarea'"
      :element="element"
      :items="items"
      :temp-value="getValue(items)"
      :set-value="setValue"
    />
    <button @click="handleDelete" class="button ac-button is-danger is-light" title="Delete">
      <span class="icon is-small">
        <TheTrash />
      </span>
    </button>
  </div>
</template>
