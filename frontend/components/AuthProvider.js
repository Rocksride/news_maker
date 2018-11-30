  export default {
    props: [],
    methods: {

      signIn(data) {
        this.$store.dispatch('auth');
        
      },
      signUp(data) {
        this.$store.dispatch('auth');
        
      },
    },
    render(h) {
      return this.$scopedSlots.default({
        signIn: this.signIn, 
        signUp: this.signUp
      })
    }
  }
