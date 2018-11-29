<template>
    <section class='section'>
      <div class="section-wrapper">
        <div  ref='tr-1' class="backdrop" :class='backdropClasses '></div>
        <div 
        ref='tr-2' class="wrapper left-wrapper translated" >
          <SignInForm   @switchAuth='toggleAuthOption'></SignInForm>
        </div>
        <div 
        ref='tr-3' class="wrapper right-wrapper translated" >
           <SignUpForm   @switchAuth='toggleAuthOption'></SignUpForm>
        </div>
      </div>
    </section>
</template>

<script>
  const pkg = require('@/package')
  import ButtonWithColoredBorders from '@/components/UI/ButtonWithColoredBorders'
  import BorderedLink from '@/components/UI/BorderedLink'
  import UnderlineHeading from '@/components/UI/UnderlineHeading'
  import SignInForm from '@/components/SignInForm'
  import SignUpForm from '@/components/SignUpForm'
  import translateMixin from '@/mixins/translateMixin.js'

  export default {
    layout: 'authLayout',
    head: () => ({
      title: `${pkg.name} - auth`
    }),
    data: () => ({
      name: 'John Silver',
      authOption: 'signin',
    }),
    components: {
      ButtonWithColoredBorders,
      UnderlineHeading,
      BorderedLink,
      SignInForm,
      SignUpForm,
    },
    methods: {
      toggleAuthOption() {
        switch(true) {
          case this.authOption === 'signin': {
            this.authOption = 'signup'
            break;
          }
          case this.authOption === 'signup': {
             this.authOption = 'signin'
            break;
          }
        }
      }
    },
    mixins: [translateMixin],
    mounted() {
      this.isMounted = true
    },
    computed: {
      backdropClasses() {
        console.log({auth: this.authOption});
        return {"translate-left": this.authOption==="signup", "translate-right": this.authOption==="signin", 'translated': !this.isMounted}
      }
    }
  }
</script>

<style lang="scss" scoped>
  .section {
    position: relative;
    width: 100vw;
    height: 100vh;
    // .form {
    //   @include show;
    //   @include translateTransition;

    //   height: 50%;
    //   width: 50%;

    //   &.translated {
    //     @include hide;
    //     transform: translate(-100%, 0);
    //   }
    // }

    .section-wrapper {
      // box-shadow: 0px 0px 2px 2px rgba(0,0,0,0.3);
      overflow: hidden;
      transition: all 1s ease;
      width: 70vw;
      height: 70vh;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      justify-content: center;
    }
 
    .backdrop {
      z-index: 20;
      // background-image: url(/static/img/figures/figure10.jpg);
      // background-image: url(/static/img/gazets/gazet3.jpg);
      background-size: cover;
      background-position: center;
      width: 60%;
      transition: all 1s ease;
      height: 100%;
      top: 50%;
      left: 50%;
      position: absolute;
      @include show;
      transform: translate(-50%, -50%);
      &:hover {

      }
      &.translate-left {
      clip-path: polygon(0% 0%, 100% 0%, 80% 50%, 100% 100%, 0% 100% );
      background-image: url(/static/img/gazets/gazet6.jpg);

        left: 30%;
      }
      &.translate-right {
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 20% 50%);
      background-image: url(/static/img/gazets/gazet4.jpg);

        left: 70%;
      }

      &.translated {
        @include hide;
        transform: translate(-70%, 110%);
      }
    }
  }
  .wrapper {
    width: 100vw;
    transition: all 1s ease;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @include show;
  }
  .left-wrapper{

    &.translated {
      @include hide;
      transform: translate(30%, -100%);
    }
  }
  .right-wrapper{
    
    &.translated {
      @include hide;
      transform: translateY( 100%);
    }
  }

</style>