const notFoundRoutes = [
  {
    path: '/404',
    name: 'NotFound',
    component: () =>
      import(/* webpackChunkName: "NotFound" */ '@/views/404View.vue'),
    meta: {
      title: '404'
    }
  }
]
export default notFoundRoutes
