<template>
  <div>
    <div v-if="Array.isArray(errors) && errors.length == 1" class="ui pointing red basic label">{{ errors[0] }}</div>
    <div v-else-if="typeof errors == 'string' && errors.length > 0" class="ui pointing red basic label">{{ errors }}</div>
  </div>
</template>

<script>
export default {
  name: 'LabelError',
  props: ['errors']
}
</script>
