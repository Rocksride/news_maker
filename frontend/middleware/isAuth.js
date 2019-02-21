const forbiddenRoutesForUnAuthed = [
  '/new-article'
]
export default ({store, route, error, redirect}) => {
    console.log(route.path)
  if (!store.state.auth.token && forbiddenRoutesForUnAuthed.includes(route.path)) {

    const notification = {
        type: 'warning',
        message: 'To post articles you must be signed in'
    }
    store.dispatch('pushNotification', notification)

    return redirect('/user/auth')
  }  
} 