export default {
  ready () {
    this.ldElem = document.createElement('script');
    this.ldElem.type = 'application/ld+json';
    document.head.appendChild(this.ldElem);
    const save = () => {
      this.ldElem.innerHTML = JSON.stringify(this.ld);
    }
    this.$watch('ld', {
      handler: save,
      deep: true
    });
    save();
  },

  destroyed () {
    document.head.removeChild(this.ldElem);
  }

}
