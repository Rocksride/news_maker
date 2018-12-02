import * as types from '@/store/mutationTypes';

export default ({app, store}) => {
  app.router.beforeEach((to, from, next) => {
    store.commit(types.SET_CIRCLE_LOADER_VISIBILITY, true);
    next();
    setTimeout(() => {
      store.commit(types.SET_CIRCLE_LOADER_VISIBILITY, false);
    }, 300);

  })
}
