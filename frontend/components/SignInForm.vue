<template>
  <AuthProvider>
      <form 
        slot-scope='{signIn}' 
        @submit.prevent='signIn(user, $v)' 
        class='signin-form form translated'>
           
            <label for="signin-username">Username</label>
            <template v-if='$v.user.login.$error'>
              <p 
                v-if='!$v.user.login.required'
                class='errorMessage'
              >Please enter username</p>
              <p 
                v-if='!$v.user.login.minLength'
                class='errorMessage'
              >Login must have > 3 chars</p>
            </template>
            <input 
              v-model='user.login'
              type="text" 
              class="form-input username" 
              :class="{error: $v.user.login.$error}"
              placeholder='enter username' 
              id="signin-username"
              @blur='$v.user.login.$touch()'
            >
            <label for="signin-password">Password</label>
            <template v-if='$v.user.password.$error'>
              <p 
                v-if='!$v.user.password.required'
                class='errorMessage'
              >Please enter password</p>
              <p 
                v-if='!$v.user.password.maxLength'
                class='errorMessage'
              >Password must have  255 chars</p>
              <p 
                v-if='!$v.user.password.minLength'
                class='errorMessage'
              >Password must have > 6 chars</p>
            </template>
            <input 
              v-model='user.password'
              type="password" 
              class="form-input password"  
              :class="{error: $v.user.password.$error}"
              placeholder='enter password'  
              id="signin-password"
              @blur='$v.user.password.$touch()'
            >
            <div class="button-group">
              <button
                 :disabled='$v.$error'
                 type='submit'
                 style='font-size: 3rem; text-align: center'
                 class='button-reset nuxt-link hover-button'
                 >Login
              </button>
              <button 
                type="button" 
                @click='$emit("switchAuth")' 
                class='button-reset active-button my-button' 
              >Switch to SignUp</button>
            </div>
      </form>
  </AuthProvider>
</template>
<script>
  import UnderlineHeading from '@/components/UI/UnderlineHeading'
  import AuthProvider from '@/components/AuthProvider.js'
  import { required, minLength, maxLength } from 'vuelidate/lib/validators'
  console.log('CallMeKnur%c', 'font-size: 14px; color: hsl(150, 100%, 50%); font-weight: bold;')
  console.log('%c', {required}, 'font-size: 14px; color: hsl(150, 100%, 50%); font-weight: bold;')
  export default {
    props: [],
    data: () => ({
      user: {
        login: null,
        password: null
      }
    }),
    validations: {
      user: {
        login: {
          required,
          minLength: minLength(3)

        },
        password: {
          required,
          minLength: minLength(6),
          maxLength: maxLength(255)
          
        }
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
    
    .error {
      border: 1px solid hsl(0, 100%, 50%);
    }

    & > * {
      margin-bottom: 10px;
    }
  }

  .my-button {
    color: var(--c-active) !important;
    font-weight: 400;
    cursor: pointer;
  }
  .button-group {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>