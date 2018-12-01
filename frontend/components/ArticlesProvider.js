import { mapGetters } from 'vuex'
export default {
  computed: {
    numbers() {
      return this.$store.getters.articles
    }
  },
  methods: {
    openItemPage(id) {
      this.$router.push(`/articles/${id}`)
    }
  },
  render() {
    return this.$scopedSlots.default({
      items: this.numbers,
      openItemPage: this.openItemPage
    })
  }
}
