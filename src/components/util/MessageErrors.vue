<template>
  <div v-if="errors && errors.length" class="ui error message">
    <ul v-if="Array.isArray(errors) && errors.length > 1">
      <li v-for="error in errors">{{ error }}</li>
    </ul>
    <span v-else-if="Array.isArray(errors) && errors.length == 1">{{ errors[0] }}</span>
    <span v-else-if="typeof errors == 'string'">{{ errors }}</span>
  </div>
</template>

<script>
export default {
  name: 'MessageErrors',
  props: ['errors']
}
</script>
