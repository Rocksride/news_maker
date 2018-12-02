<template>
  <progress slot-scope='{index}' :key='index' :ref='"progress"+index' class='scroll-progress' value="0" max='100'>
    <!-- fallback -->
  </progress>
</template>
<script>
  import debounce from '@/utils/debounce.js'
  export default {
    props: {
      index: {

      }
    },
    data() {
      return {
        
      }
    },
    methods: {
      scrollHandler() {
        // const post = this.passedRefs.post
        const post = document.querySelector('.detailed-post')
        const currentState = post.scrollTop;
        const pageHeight = post.scrollHeight - post.clientHeight;
        const scrollStatePercentage = currentState / pageHeight * 100;
        console.log({scrollStatePercentage})
        const scrollProgress = document.querySelector('.scroll-progress')
        scrollProgress.setAttribute('value', scrollStatePercentage);
      }
    },
    mounted() {
      console.log('create')
      // this.debouncedHandler = debounce(this.scrollHandler, 1)
        // this.$nextTick(() => {
          //   const post = document.querySelector('.detailed-post')
          //   console.log({post})
          //   post.addEventListener('scroll', this.scrollHandler)
          // // this.passedRefs.post.addEventListener('scroll', this.scrollHandler)

          // this.$once('hook:destroyed', () => {
          //   post.removeEventListener('scroll', this.scrollHandler)
          //   // this.passedRefs.post.removeEventListener('scroll', this.scrollHandler)
          // })
        // })
    }
  }
</script>

<style lang='scss' scoped>
progress {
  display: block;
  width: 100%;
  height: .5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  background-color: transparent;
  color: var(--c-active);
}

progress::-webkit-progress-bar {
  background-color: transparent;
}

progress::-webkit-progress-value {
  background-color: var(--c-active);
}

progress::-moz-progress-bar {
  background-color: var(--c-active);
}

</style>