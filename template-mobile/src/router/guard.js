const setupGuard = (router) => {
  router.beforeEach(async (to, from, next) => {
    if (typeof to.meta.title === 'string' && to.meta.title) {
      document.title = to.meta.title
    }
    next()
  })
}

export default setupGuard
