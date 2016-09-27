<template>
  <meta name="twitter:creator" :content="value.value">
</template>

<script>
  export default {
    name: 'TwitterCreatorDisplayer',

    props: {
      value: {
        type: Object,
        required: true
      }
    },

    wantsKey (key) {
      return key === 'creator';
    }
  }
</script>
