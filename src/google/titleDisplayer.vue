<template>
  <title>{{value.value}}</title>
</template>

<script>
  export default {
    name: 'TitleDisplayer',

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
