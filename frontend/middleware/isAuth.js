const forbiddenRoutesForUnAuthed = [
  '/new-article'
]
export default ({store, route, error, redirect}) => {
    console.log(route.path)
  if (!store.state.auth.token && forbiddenRoutesForUnAuthed.includes(route.path)) {
    return redirect('/user/auth')
  }  
} 