<template>
  <meta property="og:description" :content="value.value">
</template>

<script>

export default {
  name: 'OGDescription',
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  wantsKey(key) {
    return key === 'description'
  }
}

</script>
