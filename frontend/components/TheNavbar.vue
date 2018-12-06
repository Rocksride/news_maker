<template>
  <nav class='nav'>
    <div class="nav__logo"><nuxt-link active-class='' class='logo-link' exact to="/">Newswell</nuxt-link>
      <img class='nav-hamburger'  @click='menuVisible = !menuVisible' src="https://icon.now.sh/burger" alt=""></div>
    <div class='menu-wrapper' v-show='menuVisible' :class='{"visible": menuVisible}'>
      <ul  class="nav__links" >
        <nuxt-link class='nuxt-link nav-link' exact to="/">Home</nuxt-link>
        <nuxt-link class='nuxt-link nav-link' :to='articlePath'>Articles <span class='quantity'>{{articles.length}}</span></nuxt-link>
        <nuxt-link class='nuxt-link nav-link' to="/tags">Tags <span class='quantity'>{{tags.length}}</span></nuxt-link>
        <nuxt-link class='nuxt-link nav-link' to="/rubrics">Rubrics <span class='quantity'>{{rubrics.length}}</span></nuxt-link>
        <nuxt-link class='nuxt-link nav-link' to="/authors">Authors <span class='quantity'>{{users.length}}</span></nuxt-link>
        <nuxt-link class='nuxt-link nav-link' exact to="/about">About</nuxt-link>
        <a  
        
          v-if='$store.getters.isAuthenticated'
          @click='$store.dispatch("logout")' 
          class='nuxt-link nav-link'>Logout</a>
        <nuxt-link
          v-else 
          class='nuxt-link nav-link' 
          exact 
          to="/user/auth">Login</nuxt-link>
      </ul>
      <nuxt-link  class='styled-button' exact to="/about">Contact us</nuxt-link>

    </div>
    
  </nav>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'the-navbar',
  components: {
  },
  computed: {
    ...mapGetters([
      'isAuthenticated'
    ])
  },
  data: () => ({
    menuVisible: false
  }),
  computed: {
   latestArticle() {
    return this.$store.getters.latestArticle
   },
   articlePath() {
    return `articles/${this.latestArticle.id || ''}`
   },
   articles() {
    return this.$store.getters.articles
   },
   tags() {
    return this.$store.getters.tags
   },
   rubrics() {
    return this.$store.getters.rubrics
   },
   users() {
    return this.$store.getters.users
   },
  }

}

</script>
<style lang="scss" scoped>
// @import '@/assets/scss/abstract/_variables.scss';
@import '@/assets/scss/main.scss';

  .nav {
    overflow: hidden;
    background-color: var(--c-background-light);
    z-index: 300;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // @include media($mSmall) {
    //    width: $sidebarWidth-sm;
    // }
    // @include media($laptop) {
    //    width: $sidebarWidth-md;
    // }
    // @include media($laptopL) {
    //   width: $sidebarWidth-lg;
    // }
    width: 100vw;
    flex-direction: column;
    @include media($tablet) {
      width: var(--sidebar-width);
      height: 100%;
    }
    .nav-hamburger {
      cursor: pointer;
      @include media($tablet) {
        display: none;
      }
    }
    border-right: 1px solid lavender;
    &__logo {
    background-color: var(--c-background-light);
      padding: 2rem;
      height: 25%;
      letter-spacing: 1px;
      text-shadow: 3px 7px 10px rgba(0, 0, 0, 0.3);
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-transform: uppercase;
      font-size: 2.4rem;
      white-space: nowrap;
      // letter-spacing: 1rem;
      font-weight: 700;
      position: relative;
      // transform: perspective(400px) skewY(-50deg);
      &:before {
        // perspective: 1000px;
        // perspective-origin: 150% 150%;
        position: absolute;
        top: 70%;
        left: -20%;
        content: '';
        height: 3px;
        background-color: var(--c-active);
        transform:  rotate(-45deg);
        z-index: -2;
        width: 26%;
        top: 38px;
        left: 9px;

        @include media(300px) {
          display: none;
        }
        @include media($tablet) {
          display: block;
          width: 80%;
          top: 70%;
          left: -20%;
          z-index: 1;
        }
      }

      @include media($tablet) {
        padding: 0;
        justify-content: center;
      }
    }
    .menu-wrapper {
      display: flex; flex-direction: column;
      display: none;
      align-items: center;
      justify-content: space-between;
      height: 83%;
      width: 100%;

      @include media($tablet) {
        display: flex !important;
      }

      &.visible {
        display: flex !important;
      }
    }
    &__links {
      // display: none;
      display: flex;
      width: 100vw;
      height: 60%;
      // width: 90%;
      justify-content: flex-start;
      flex-direction: column;

      @include media($tablet) {
        align-items: flex-start;
        margin-left: -4rem;
        width: auto;
        margin-left: 0;
      }

      .nav-link {
        display: block;
        // @include media($tablet) {
        //   display: inline;
        // }

      }

    }

    &__footer {
      // width: 100%;
      margin: 0;
      border-top: 1px solid lavender;
      .nav__list-item {
        font-weight: bold;
      }
      // align-self: flex-end;
      // width: 100%;
      margin-top: 7rem;
    }

 
  

  }

  /*

$mSmall: 320px;
$mMedium: 375px;
$mLarge: 425px;
$tablet: 768px;
$laptop: 1024px;
$laptopL: 1440px;

*/
  .logo-link {
    @include media($tablet) {
      font-size: 1.4rem;
    }    
    @include media($laptop) {
      font-size: 1.8rem;
    }   
    @include media($laptopL) {
      font-size: 2.2rem;
    }
    color: var(--c-text-dark) !important;
  }

  .quantity {
    font-size: 1.2rem;
    // margin-bottom: 2rem;
    position: relative;
    bottom: .7rem;
    color: var(--c-background-dark);
  }
</style>

