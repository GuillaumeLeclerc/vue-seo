<template>
  <title>{{value.value}}</title>
</template>

<script>
  export default {
    props: {
      value: {
        type: Object,
        required: true
      }
    },

    wantsKey (key) {
      return key === 'title';
    }
  }
</script>
