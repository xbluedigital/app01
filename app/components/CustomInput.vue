<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    :disabled="disabled"
    :maxlength="maxlength"
    class="flex h-10 w-full rounded-md border border-slate-600 bg-slate-700 px-3 py-2 text-sm text-white placeholder-slate-400 ring-offset-slate-900 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
  />
</template>

<script setup lang="ts">
interface Props {
  type?: string
  placeholder?: string
  modelValue?: string | number
  disabled?: boolean
  maxlength?: number
}

withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
  modelValue: '',
  disabled: false
})

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>
