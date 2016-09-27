<script>
  import Displayer from '../mixins/displayer.vue'
  import ImageDisplayer from './imageDisplayer.vue'
  import TitleDisplayer from './titleDisplayer.vue'
  import UrlDisplayer from './urlDisplayer.vue'
  import TypeDisplayer from './typeDisplayer.vue'
  import LangDisplayer from './langDisplayer.vue'
  import DescriptionDisplayer from './descriptionDisplayer.vue'
  import OrganizationDisplayer from './organizationDisplayer.vue'

  export default {
    name: 'OGDisplayer',
    mixins: [Displayer],
    created () {
      this.supportedDisplayers = [
        ImageDisplayer,
        TitleDisplayer,
        UrlDisplayer,
        TypeDisplayer,
        LangDisplayer,
        DescriptionDisplayer,
        OrganizationDisplayer
      ];
    }
  }
</script>
