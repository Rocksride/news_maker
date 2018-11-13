export default ({store, route, error, redirect}) => {
  if (!store.state.auth.token && route.path !== '/user/auth') {
    return redirect('/user/auth')
  }
} 