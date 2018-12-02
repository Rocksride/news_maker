<template>
     <section class='section'>
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
          <textarea
           cols='100'
           class='form-input form-textarea'
           id="article-title"
           v-model='article.content'
           placeholder='Enter the content'
           >
          </textarea>
          
          <button
           class="button-reset nuxt-link my-button"
           @click="addArticle"
          >Add New Article</button>
      </form>
     </section>
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
  .section {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: var(--c-background-light);
   
  }
  .article-form {
    width: 50%;
    height: auto;
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-direction: column;
     & > * {
      margin-bottom: 10px;
    }
  }

.my-button {
  width: 100%;
  text-align: center;
  font-size: 2.2rem;
  font-weight: 500;
  cursor: pointer;
}

.form-textarea {
  height: 30rem;
}

</style>