<template>
  <AuthProvider>
      <form slot-scope='{signIn}' class='signin-form form translated'>
           
            <label for="signin-email">Username</label>
            <input 
              v-model='user.login'
              type="text" 
              class="form-input username" 
              placeholder='enter username' 
              id="signin-username"
            >
            <label for="signin-password">Password</label>
            <input 
              v-model='user.password'
              type="password" 
              class="form-input password"  
              placeholder='enter password'  
              id="signin-password"
            >
            <div class="button-group">
              <UnderlineHeading
                 type='submit'
                 style='font-size: 3rem; text-align: center'
                 @click.native='signIn(user)'
                 class='active-button hover-button'
                 >Login
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
        password: null
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