<template>
  <AuthProvider>
      <form slot-scope='{signIn}' class='left-form form translated'>
            <label for="left-password" class=''>Username</label>
            <input type="text" class="form-input username"  placeholder='enter username'  id="left-username">
            <label for="left-password" class=''>Password</label>
            <input type="password" class="form-input password"  placeholder='enter password'  id="left-password">
            <label for="left-email" class=''>Email</label>
            <input type="email" class="form-input email"  placeholder='enter email' id="left-email">
            <div class="button-group">
          

              <UnderlineHeading
                 style='font-size: 3rem; text-align: center'
                 @click.native='signIn'
                 >Register
              </UnderlineHeading>
              <button type="button" @click='$emit("switchAuth")' class='active-button my-button' >Switch to SignUp</button>
            </div>
      </form>
  </AuthProvider>
</template>
<script>
  import UnderlineHeading from '@/components/UI/UnderlineHeading'
  import AuthProvider from '@/components/AuthProvider.js'
  export default {
    props: [],
    data() {
      return {
        
      }
    },
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