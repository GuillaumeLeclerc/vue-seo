<template>
  <div>
    <script v-if="seoOptions.openGraph" type="application/ld+json">
    </script>
  </div>
</template>

<script>
  import OptionAccessor from '../mixins/optionAccess.js'

  export default {
    mixins: [OptionAccessor],

    props: {
      content: {
        required: true,
        type: Object
      }
    },

    ready() {
      const update = () => {
        const container = this.$el;
        // we can't use v-el because of vuejs/vue#2681
        const scripts = container.getElementsByTagName('script');
        if (scripts.length > 0) {
          scripts[0].innerHTML = JSON.stringify(this.content);
        }
      }

      this.$watch('content', update);
      update();
    }

  }

</script>
