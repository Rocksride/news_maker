export default ({store, route, error, redirect}) => {
  console.log(route)
  console.log({token: store.state.auth.token})
  if (!store.state.auth.token && route.path !== '/user/auth') {
    return redirect('/user/auth')
  }
} 