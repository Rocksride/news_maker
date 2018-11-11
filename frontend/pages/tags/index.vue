<template>
  <section class="content-section flex-center">
    <h2 class="title">Tags</h2>
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
};
</script>

<style lang="scss" scoped>
</style>
