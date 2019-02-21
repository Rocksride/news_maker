  export default {
    props: [],
    methods: {

      signIn(data, vuelidate) {
        vuelidate.$touch();
        if (!vuelidate.$error) {
          this.$store.dispatch('signIn', data);
        }
        
      },
      signUp(data, vuelidate) {
        vuelidate.$touch();
        if (!vuelidate.$error) {
          this.$store.dispatch('signUp', data);
        }
        
      },
    },
    render(h) {
      return this.$scopedSlots.default({
        signIn: this.signIn, 
        signUp: this.signUp
      })
    }
  }
