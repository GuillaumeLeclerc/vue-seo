<template>
  <link rel="canonical" :href="value.value">
</template>

<script>
  export default {
    props: {
      value: {
        required: true,
        type: Object
      }
    },

    wantsKey (key) {
      return key === 'canonical'
    }
  }
</script>
