<template>
  <h1 class="title">user</h1>
</template>

<script>
const pkg = require('@/package')
  
export default {
  head: () => ({
    title: `${pkg.name} - User`
  }),
  name: 'index',

  data() {
    return {

    };
  },
};
</script>

<!-- <style lang="scss" scoped>
  html {
    font-weight: 700;
  }
</style>
 -->