export default {
   beforeRouteEnter (to, from, next) {
      next(vm => {
        const [first, ...items] = Object.values(vm.$refs) || []
        console.dir(items)
        first.classList.remove('translated')
        items.forEach((el, i) => {
          setTimeout(() => {
            el.classList.remove('translated')
          }, 200 * i)
        })
       
      })
    },
  beforeRouteLeave (to, from, next) {
        let delay = 0
        const items = Object.values(this.$refs) || []
        console.dir(items)
        items.forEach((el, i) => {
            el.classList.add('translated');
        })
      setTimeout(next, 500)
  }  
}
