<template>
  <div class="wrapper">
    <b-field label="Title">
            <b-input v-model="searchObj.title"></b-input>
    </b-field>    
    <b-field label="Content">
            <b-input v-model="searchObj.content"></b-input>
    </b-field>
    <b-field label="Select tags">
            <b-taginput
                v-model="searchObj.tagsIds"
                :data="tags"
                autocomplete
                field="title"
                icon="label"
                :allow-new="false"
                placeholder="Select a tag"
                @typing="getFilteredTags"
            >
                <template slot-scope="props">
                    <strong>{{props.option.id}}</strong>: {{props.option.title}}
                </template>
                <template slot="empty">
                    There are no items
                </template>
            </b-taginput>
        </b-field>
          <b-field label="Select rubrics">
            <b-taginput
                v-model="searchObj.rubricsIds"
                :data="rubrics"
                autocomplete
                field="title"
                icon="label"
                :allow-new="false"
                placeholder="Select a rubric"
                @typing="getFilteredRubrics"
            >
                <template slot-scope="props">
                    <strong>{{props.option.id}}</strong>: {{props.option.title}}
                </template>
                <template slot="empty">
                    There are no items
                </template>
            </b-taginput>
        </b-field>
          <b-field label="Select Authors">
            <b-taginput
                v-model="searchObj.authorsIds"
                :data="users"
                autocomplete
                field="login"
                icon="label"
                :allow-new="false"
                placeholder="Select a user"
                @typing="getFilteredUsers"
            >
                <template slot-scope="props">
                    <strong>{{props.option.id}}</strong>: {{props.option.login}}
                </template>
                <template slot="empty">
                    There are no items
                </template>
            </b-taginput>
        </b-field>

  </div>
</template>
<script>

  import * as types from '@/store/mutationTypes.js'
  export default {
    props: [],
    data: () => ({
       searchObj: {
          title: '',
          content: '',
          tagsIds: [],
          rubricsIds: [],
          authorsIds: []
       }
    }),
    computed: {
      tags() {
        return this.$store.getters.tags
      },
      rubrics() {
        return this.$store.getters.rubrics
      },
      users() {
        return this.$store.getters.users
      }
    },
    methods: {
      getFilteredTags(text) {
          this.filteredTags = this.tags.filter((option) => {
              return option.title
                  .toString()
                  .toLowerCase()
                  .indexOf(text.toLowerCase()) >= 0
          })
      },
      getFilteredRubrics(text) {
          this.filteredRubrics = this.rubrics.filter((option) => {
              return option.title
                  .toString()
                  .toLowerCase()
                  .indexOf(text.toLowerCase()) >= 0
          })
      },
      getFilteredUsers(text) {
          this.filteredUsers = this.users.filter((option) => {
              return option.login
                  .toString()
                  .toLowerCase()
                  .indexOf(text.toLowerCase()) >= 0
          })
      }
    },
    watch: {
      searchObj: {
        handler: function(){
          const obj = {
            ...this.searchObj,
            tagsIds: this.searchObj.tagsIds.map(el => el.id),
            authorsIds: this.searchObj.authorsIds.map(el => el.id),
            rubricsIds: this.searchObj.rubricsIds.map(el => el.id),
          }
          console.log({obj});
          this.$store.commit(types.SET_ARTICLES_FILTERS, obj)
          // this.$store.dispatch('searchArticles', {...this.searchObj});
        },
        deep: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    position: absolute;
    top: 43%;
    transform: translateY(-50%);
    right: calc(3* var(--sidebar-width));
    width: calc(2 * var(--sidebar-width));
    z-index: 10001;
    background-color: var(--c-delimiter);
    border: 1px dashed var(--c-background-dark);
    padding: 1rem;
    // height: 25vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;

    & > * {
      font-size: 1rem !important;
    }
  }
</style>