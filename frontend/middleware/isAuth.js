export default ({store, route, error, redirect}) => {
  if (!store.state.auth.token && route.path !== '/user/auth') {
    console.log('incorrect')
    return redirect('/user/auth')
  }
} 