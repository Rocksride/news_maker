<template>
  <section>
    <div class="row">
      <article class="latest-news">
        Latest News
      </article>
      <!-- <img class='img-1' src="../static/img/figures/figure13.jpg" alt="img"> -->
      <div class="test-1"></div>
    </div>
    <div class="row">
      <div class="test-2"></div>
      <!-- <img class='img-2' src="../static/img/figures/figure10.jpg" alt="img"> -->
      <article class="categories">
        Explore Categories
      </article>

    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  layout: 'layout1',
  components: {
    Logo,
  },
  data: () => ({
    showModal: false
  })
}
</script>

<style lang='scss' scoped>
@import '@/assets/scss/abstract/_variables.scss';

section {
  position: absolute;
  right: 0;
  /* margin-left: auto; */
  width: calc(100vw - #{$sidebarWidth});
  height: 100%;
  display: flex;
  // margin-right: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* flex-direction: column; */

}
.row {
  height: 90%;
  display: flex;
  /* align-items: center; */
  /* justify-content: space-between; */
}
.latest-news {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 3;
  height: 100%;
}
.categories {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 2;
  height: 100%;
}
img {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
}
.img-1 {
  border: 3px solid tomato;
  flex: 2;
}
.img-2 {
  flex: 3;
}
.test-1 {
  flex: 2;
}
.test-2 {
  flex: 3;
}
</style>
