export default {
   created () {
    console.log(this);


    
        const [first, ...items] = Object.values(this.$refs) || []
        console.log(items);
        first.classList.remove('translated')
        items.forEach((el, i) => {
          setTimeout(() => {
            el.classList.remove('translated')
          }, 200 * i)
        })
       
    },
  beforeDestroy (to, from, next) {
        let delay = 0
        const items = Object.values(this.$refs) || []
        items.forEach((el, i) => {
            el.classList.add('translated');
        })
  }  
}
