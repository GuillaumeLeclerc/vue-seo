<template>
  <meta property="og:title" :content="value.value">
</template>

<script>

export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  },

  wantsKey(key) {
    return key === 'title'
  }
}

</script>
