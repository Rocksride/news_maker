<template>
  <AuthProvider>
      <form
         slot-scope='{signUp}'
         @submit.prevent='signUp(user, $v)'
         class='signup-form form translated'>
            <label
             for="signup-username"
             class=''
            >Username</label>
            <template v-if='$v.user.login.$error'>
              <p 
                v-if='!$v.user.login.required' 
                class='errorMessage'
              >Login is required!</p>
              <p 
                v-if='!$v.user.login.maxLength' 
                class='errorMessage'
              >Maximum length is 255 chars!</p>
            </template>
            <input
             type="text"
             class="form-input username"
             v-model='user.login'
             placeholder='enter username'
             :class="{error: $v.user.login.$error}"
             @blur='$v.user.login.$touch()'
             id="signup-username">

            <label
             for="signup-password"
             class=''
            >Password</label>
            <template v-if='$v.user.password.$error'>
              <p 
                v-if='!$v.user.password.required' 
                class='errorMessage'
              >Password is required!</p>
              <p 
                v-if='!$v.user.password.maxLength' 
                class='errorMessage'
              >Maximum length is 255 chars!</p>
              <p 
                v-if='!$v.user.password.minLength' 
                class='errorMessage'
              >Minimum length is 6 chars!</p>
            </template>           
            <input 
             type="password" 
             v-model='user.password'
             class="form-input password"
             placeholder='enter password'
             :class="{ error: $v.user.password.$error }"
             @blur='$v.user.password.$touch()'
             id="signup-password">

            <label
             for="signup-email"
             class=''
            >Email</label>
            <template v-if='$v.user.email.$error'>
              <p 
                v-if='!$v.user.email.required' 
                class='errorMessage'
              >Email is required!</p>
              <p 
                v-if='!$v.user.email.email' 
                class='errorMessage'
              >Please type correct email!</p>
            </template>              
            <input
             type="email"
             class="form-input email"
             placeholder='enter email' 
             id="signup-email"
             v-model='user.email'
             :class="{ error: $v.user.email.$error}"
             @blur='$v.user.email.$touch()'
            >
            <div class="button-group">
              <button
                 :disabled='$v.$error'
                 type='submit'
                 style='font-size: 3rem; text-align: center'
                 class='nuxt-link button-reset hover-button'
              >Register
              </button>
              <button
               type="button"
               @click='$emit("switchAuth")' 
               class='button-reset  my-button' 
              >Switch to SignUp</button>
            </div>
      </form>
  </AuthProvider>
</template>
<script>
  import UnderlineHeading from '@/components/UI/UnderlineHeading'
  import AuthProvider from '@/components/AuthProvider.js'
  import { email, required, maxLength, minLength } from 'vuelidate/lib/validators'
  export default {
    props: [],
    data: () => ({
      user: {
        login: null,
        password: null,
        email: null
      }
    }),
    validations: {
      user: {
        login: {
          required,
          maxLength: maxLength(255)
        },
        password: {
          required,
          maxLength: maxLength(255),
          minLength: minLength(6),
          
        },
        email: {
          required,
          email,
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
    margin-top: 1rem;
  }
  .button-group {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>