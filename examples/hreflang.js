import VueSEO from '../src/main.js'
import Vue from 'vue'

Vue.use(VueSEO);

new Vue({
  el: 'html',
  data () {
    setInterval (() => {
      this.ts = Date.now();
    }, 1000);
    return {
      ts: Date.now(),
      contacts: [{
        "telephone" : "+1-877-296-1018",
        "contactType" : "customer service",
        "contactOption" : [
          "HearingImpairedSupported",
          "TollFree"
        ],
        "areaServed" : "US"
      }],
      socialAccounts: [
          "http://www.facebook.com/your-profile",
          "http://www.twitter.com/yourProfile",
          "http://plus.google.com/your_profile"
      ]
    }
  }
})

