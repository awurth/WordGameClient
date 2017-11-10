<template>
  <div v-if="errors && errors.length" :class="['ui', direction, 'pointing red basic label']">
    <span v-if="Array.isArray(errors) && errors.length == 1">{{ errors[0] }}</span>
    <span v-else-if="typeof errors == 'string' && errors.length > 0">{{ errors }}</span>
  </div>
</template>

<script>
export default {
  name: 'LabelError',
  props: ['errors', 'direction']
}
</script>
