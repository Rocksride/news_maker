<template>
  <section class="content-section flex-center">
    <h2 class="title ">Tags</h2>
    <button class="bw0 br2 bg-red pv2 ph3 white fw1 tc ttu tracked">do what you love</button>
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
