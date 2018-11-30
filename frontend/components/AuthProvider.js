  export default {
    props: [],
    methods: {

      signIn(data) {
        this.$store.dispatch('signIn', data);
        
      },
      signUp(data) {
        this.$store.dispatch('signUp', data);
        
      },
    },
    render(h) {
      return this.$scopedSlots.default({
        signIn: this.signIn, 
        signUp: this.signUp
      })
    }
  }
