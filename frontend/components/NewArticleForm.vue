<template>
  <div>
    <form
       action.prevent
       class='article-form'
    >
    <label for="article-title">Add Title</label>
    <input
     type="text"
     id="article-title"
     v-model='article.title'
    >    

    <label for="article-title">Add Content</label>
    <input
     type="text"
     id="article-title"
     v-model='article.content'
    >
    <button 
     class="active-button"
     @click="addArticle"
    >Add New Article</button>
  </form>
  <div class="backdrop"></div>
  </div>
</template>
<script>
  export default {
    props: [],
    data: () => ({
      article: {
        title: null,
        content: null
      }
    }),
    methods: {
      addArticle() {
        this.$store.dispatch('addArticle', this.article)
      }
    },
    mounted() {
      document.documentElement.style.overflow = 'hidden'
    }
  }
</script>

<style lang="scss">
  .article-form {
    position: fixed;
    width: 50vw;
    height: 50vh;
    top: 50%;
    z-index: 2010;
    left: 50%; 
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & > * {
      margin-bottom: 10px;
    }
  }
  .backdrop {
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2000;
    background-color: var(--c-delimiter);
  }
</style>