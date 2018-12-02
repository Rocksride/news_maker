<template>
    <form
       action.prevent
       class='article-form'
    >
    <label for="article-title">Add Title</label>
    <input
    class='form-input'
     type="text"
     id="article-title"
     v-model='article.title'
    >    

    <label for="article-title">Add Content</label>
    <input
    class='form-input'
     type="text"
     id="article-title"
     v-model='article.content'
    >
    <nuxt-link 
     class="active-button "
     @click="addArticle"
    >Add New Article</nuxt-link>
  </form>
</template>
<script>
  export default {
    layout: 'layout1',
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
  }
</script>

<style lang="scss" scoped>
  .article-form {
    position: absolute;
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
    background-color: var(--c-background-light);
    & > * {
      margin-bottom: 10px;
    }
  }


</style>