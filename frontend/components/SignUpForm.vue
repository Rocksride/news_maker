<template>
  <AuthProvider>
      <form
         slot-scope='{signUp}'
         class='signup-form form translated'>
            <label
             for="signup-password"
             class=''
            >Username</label>
            <input
             type="text"
             class="form-input username"
             v-model='user.login'
             placeholder='enter username'
             id="signup-username">
            <label
             for="signup-password"
             class=''
            >Password</label>
            <input 
             type="password" 
             v-model='user.password'
             class="form-input password"
             placeholder='enter password'
             id="signup-password">
            <label
             for="signup-email"
             class=''
            >Email</label>
            <input
             type="email"
             class="form-input email"
             placeholder='enter email' 
             id="signup-email"
             v-model='user.email'
            >
            <div class="button-group">
              <UnderlineHeading
                 style='font-size: 3rem; text-align: center'
                 @click.native='signUp(user)'
                 class='active-button hover-button'
              >Register
              </UnderlineHeading>
              <button
               type="button"
               @click='$emit("switchAuth")' 
               class='active-button my-button' 
              >Switch to SignUp</button>
            </div>
      </form>
  </AuthProvider>
</template>
<script>
  import UnderlineHeading from '@/components/UI/UnderlineHeading'
  import AuthProvider from '@/components/AuthProvider.js'
  export default {
    props: [],
    data: () => ({
      user: {
        login: null,
        password: null,
        email: null
      }
    }),
    components: {
      AuthProvider,
      UnderlineHeading
    }
  }
</script>

<style lang="scss" scoped>
  
  .form {
    @include size(100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > * {
      margin-bottom: 10px;
    }
  }
  .my-button {
    color: var(--c-active) !important;
  }
  .button-group {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>