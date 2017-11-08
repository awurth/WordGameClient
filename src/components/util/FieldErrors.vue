<template>
  <div v-if="errors.length" class="ui error message">
    <ul v-if="Array.isArray(errors) && errors.length > 1">
      <li v-for="error in errors">{{ error }}</li>
    </ul>
    <span v-if="Array.isArray(errors) && errors.length == 1">{{ errors[0] }}</span>
    <span v-if="typeof errors == 'string'">{{ errors }}</span>
  </div>
</template>

<script>
export default {
  name: 'FieldErrors',
  props: ['errors']
}
</script>
