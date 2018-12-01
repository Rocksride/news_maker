<template>
  <nav class='nav'>
    <div class="nav__logo"><nuxt-link active-class='' class='logo-link' exact to="/">Newswell</nuxt-link>
      <img class='nav-hamburger'  @click='menuVisible = !menuVisible' src="https://icon.now.sh/burger" alt=""></div>
    <div class='menu-wrapper' v-show='menuVisible' :class='{"visible": menuVisible}'>
      <ul  class="nav__links" >
        <nuxt-link class='nuxt-link nav-link' exact to="/">Home</nuxt-link>
        <nuxt-link class='nuxt-link nav-link' to="/articles">Articles</nuxt-link>
        <nuxt-link class='nuxt-link nav-link' to="/tags">Tags</nuxt-link>
        <nuxt-link class='nuxt-link nav-link' exact to="/about">About</nuxt-link>
        <nuxt-link class='nuxt-link nav-link' exact to="/articles/1">Last article</nuxt-link>
        <a @click='$store.dispatch("logout")' class='nuxt-link nav-link'>Logout</a>
      </ul>
      <nuxt-link  class='nav__contact-button' exact to="/about">Contact us</nuxt-link>

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
  })

}

</script>
<style lang="scss" scoped>
// @import '@/assets/scss/abstract/_variables.scss';
@import '@/assets/scss/main.scss';

  .nav {
    overflow: hidden;
    background-color: var(--c-background-light);
    z-index: 1001;
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

    &__contact-button{
      z-index: 1;
      // max-height: 55px;
      height: 38px;
      overflow: hidden;
      text-align: center;
      background-color: transparent;
      border: none;
      // border: 0.5px dashed white;
      // overflow: hidden;
      box-sizing: border-box;
      margin: 0;
      color: var(--c-background-light);
      
      font-weight: 700;
      // letter-spacing: 7px;
      text-decoration: none;

      @include media($tablet) {
        height: 55px;

        font-size: 1.6rem;
        padding: calc(3vh - 5px) 2.6rem;
      }
  
      @include media(300px) {
        // height: $footerHeight;
        font-size: 1.4rem;
         padding: calc(3vh - 5px) .5rem;
      }

      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      position: relative;
      display: flex;
      transition: all .4s ease;
      // transition-delay: .2s;
    /*   align-items: center; */
    /*   justify-content: center; */
    }
    &__contact-button::before {
      content: '';
      position: absolute;
      z-index: -1;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background-color: var(--c-active);
    }
    &__contact-button::after {
      content: '';
      position: absolute;
      z-index: -1;
      transform: scaleX(0);
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background-color: var(--c-background-dark);
      transition: transform .5s cubic-bezier(0.6, 0.05, 0.01, 0.99);
      transform-origin:  right;
    }
    &__contact-button:hover::after {
      transform: scaleX(1);
      transform-origin:  left;

    }
    &__contact-button .border {
      display: inline-block;
      position: absolute;
      background-color: #202020;
      transition: all .3s ease;
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
</style>

