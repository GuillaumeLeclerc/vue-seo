<script>
  import Displayer from '../mixins/displayer.vue'
  import AutoLangDisplayer from './autoLangDisplayer.vue'

  export default {
    mixins: [Displayer],
    created () {
      this.supportedDisplayers = [
        AutoLangDisplayer
      ];
    }
  }
</script>
