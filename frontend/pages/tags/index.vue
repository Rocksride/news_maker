<template>
  <section class="content-section flex-center overflow-hidden">
     <div ref='tr-2' class="translated left flex-center flex-column">
        <UnderlineHeading 
        style='font-size: 5rem'
      >Chose some tag</UnderlineHeading>
    <ul  class='list '>
      <li 
        v-if='item.title'
        class='list-item'
        v-for='item in tags'
        :key='item.title'
      >
        <button 
          class="link button-reset  nuxt-link"
          @click='searchByTag(item)'
          style='font-size: 2rem;'
          >#{{item.title}}</button>
      </li>
    </ul>
     </div>
     <div class="right">
       <div ref='tr-1' class="img-wrapper translated"></div>
     </div>
  </section>
</template>

<script>
const pkg = require('@/package')
  import UnderlineHeading from '@/components/UI/UnderlineHeading.vue'
  import translateMixin from '@/mixins/translateMixin.js'

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
      // this.$store.dispatch('searchByTag', item)
    }
  },
  components: {
    UnderlineHeading
  },
  computed: {
    tags() {
      return this.$store.getters.tags
    }
  },
    mixins: [translateMixin]

};
</script>

<style lang="scss" scoped>
.left {
  width: 50%;
  height: 100%;
  @include show;
  @include translateTransition;

  &.translated {
    @include hide;
    transform: translate(-30%, 100%);
  }
}
.right {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
}
.list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: space-between;
  height: 100%;
  flex-wrap: wrap;
  width: 50%;
  padding: 2rem;
  border: 1px dashed var(--c-active);

}
.my-button {
  // margin-left: 10rem;
  cursor: pointer;
  &::before {
    content: '#';
    position: absolute;
    top: 26%;
    // top: 50%;
    left: -25%;
    // transform: translateY(-50%);
  }
}
.img-wrapper {
  width: calc(var(--sidebar-width) * 3);
  height: 100vh;
  @include image('/static/img/gazets/gazet11-zipped.jpg');
  @include show;
  @include translateTransition;

  &.translated {
    @include hide;
    transform: translate(30%, -100%);

  }
}
</style>
