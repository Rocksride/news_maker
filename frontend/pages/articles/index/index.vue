<template>
  <section class="section flex-center ">
    <h2 class="title">Choose news to read</h2>
  </section>
</template>

<script>

const pkg = require('@/package')
import translateMixin from '@/mixins/translateMixin.js'
import UnderlineHeading from '@/components/UI/UnderlineHeading.vue'
export default {
  head: () => ({
    title: `${pkg.name} - Articles`
  }),
  layout: 'layout1',
  data: () => ({
  }),
  name: 'articles',
  components: {
    UnderlineHeading,
  },
};
</script>

<style lang="scss" scoped>
  .section {
    height: 100vh;
    padding: 15rem var(--sidebar-width);
  }

</style>
