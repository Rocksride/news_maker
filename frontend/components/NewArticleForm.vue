<template>
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
  }
</script>