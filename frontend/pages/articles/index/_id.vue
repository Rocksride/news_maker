<template>
  <article class='post detailed-post' :key='$route.params.id'>
     <ScrollProgress index='scroll-key' class='my-scroll'/>
    <header class="post__header">
      <h4 class='post__info'>{{getDate}} | by {{loginName}} | {{rubric}}</h4>
      <h3 class='post__title'>{{article.title}}</h3>
    </header>

    <p class="post__text">
      <span>{{article.content}}</span>
    </p>
  </article>
</template>

<script>
import ScrollProgress from '@/components/ScrollProgress'
import translateMixin from '@/mixins/translateMixin.js'
export default {
	layout: 'layout1',
  name: 'index',
  validate({ params }) {
    return !isNaN(+params.id)
  },
  data() {
    return {

    };
  },
  computed: {
    article() {
        return this.$store.getters.getArticle(Number(this.$route.params.id));
    },
    loginName() {
      return this.$store.getters.getLoginName(Number(this.article.authorId))
    },
    getDate() {
      console.log();
      return this.article.createDate.slice(0, 10).split('-').reverse().join(' ')
    },
    rubric() {
      return this.$store.getters.getRubric(this.article.rubricId).title
    },
  },
  components: {
    ScrollProgress
  },
  mixins: [translateMixin]
};
</script>

<style lang="scss" scoped>
.post {
  overflow-y: scroll;
  position: relative;
  min-height: 100vh;
  height: 100vh;

  @include media($mSmall) {
     padding: 1rem;
  }
  @include media($tablet) {
      & > * {
       margin-top: 6rem;
      }
  }
  @include media($tablet) {
    padding: 15rem var(--sidebar-width);
  }
  &__info {
    font-size: 1.6rem;
    color: var(--c-small-title);
  }

  &__title {

    font-size: 4rem;
    color: var(--c-text-light);
    font-weight: bold;
    line-height: 5rem;
  }

  &__text {
  }
}

// section {
//   position: absolute;
//   right: 0;
//   width: calc(100vw - var(--width));
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }
hgroup {
	
	width: 30%;
	overflow: hidden;
	display: flex;
	height: 20%;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

}
.title {
	font-size: 5rem;
	transform: none;
  @include translateTransition;
	
}
.title.translated {
	transform: translate(-100%);
}
.subtitle {
	font-size: 5rem;
	transform: none;
  @include translateTransition;
	
}
.subtitle.translated {
	transform: translateY(-300%);
}
.my-scroll {
  margin: 0;
  position: fixed;
  top: 0;
  left: calc(var(--sidebar-width) * 4);
  width: 100%;
}
</style>
