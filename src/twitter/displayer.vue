<script>
import Displayer from '../mixins/displayer.vue'
import SiteDisplayer from './siteDisplayer.vue'
import TitleDisplayer from './titleDisplayer.vue'
import CreatorDisplayer from './creatorDisplayer.vue'
import DescriptionDisplayer from './descriptionDisplayer.vue'
import ImageDisplayer from './imageDisplayer.vue'
import CardDisplayer from './cardDisplayer.vue'

export default {
  mixins: [Displayer],
  created () {
    this.supportedDisplayers = [
      SiteDisplayer,
      TitleDisplayer,
      CreatorDisplayer,
      DescriptionDisplayer,
      ImageDisplayer,
      CardDisplayer
    ];
  }
}
</script>
