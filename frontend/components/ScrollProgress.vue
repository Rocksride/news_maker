<template>
  <progress ref='progress' class='scroll-progress' value="0" max='100'>
    <!-- fallback -->
  </progress>
</template>
<script>
  import debounce from '@/utils/debounce.js'
  export default {
    props: {
      passedRefs: {
        required: true
      }
    },
    data() {
      return {
        
      }
    },
    methods: {
      scrollHandler() {
        console.log("scroll");
        const post = this.passedRefs.post
        console.log(post);
        const currentState = post.scrollTop;
        const pageHeight = post.scrollHeight - post.clientHeight;
        const scrollStatePercentage = currentState / pageHeight * 100;
        console.log({pageHeight, currentState, scrollStatePercentage})
        this.$refs.progress.setAttribute('value', scrollStatePercentage);
      }
    },
    mounted() {
      // this.debouncedHandler = debounce(this.scrollHandler, 1)
      this.passedRefs.post.addEventListener('scroll', this.scrollHandler)

      this.$once('hook:destroyed', () => {
        this.passedRefs.post.removeEventListener('scroll', this.scrollHandler)
      })
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