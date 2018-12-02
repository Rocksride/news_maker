export default {
  inject: ['sortableListHandleClass'],
  updated() {
    this.$el.classList.add(this.sortableListHandleClass);
  },
  mounted() {
    this.$el.classList.add(this.sortableListHandleClass);
  },
  render () {
    return this.$slots.default[0]
  }
}