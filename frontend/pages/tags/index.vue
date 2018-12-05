<template>
  <section class="content-section flex-center">
    <ul >
      <li 
        v-for='item in tags'
        :key='item.title'
      >
        <button 
          class="link"
          @click='searchByTag(item)'
          >{{item.title}}</button>
      </li>
    </ul>
  </section>
</template>

<script>
const pkg = require('@/package')

export default {
  layout: 'layout1',
  head: () => ({
    title: `${pkg.name} - Tags`
  }),
  name: 'index',

  data() {
    return {

    };
  },
  methods: {
    searchByTag(item) {
      this.$store.dispatch('searchByTag', item)
    }
  },
  computed: {
    tags() {
      return this.$store.getters.tags
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
