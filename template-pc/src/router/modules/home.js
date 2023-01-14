const homeRoutes = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "Home" */ '@/views/HomeView.vue'),
    meta: {
      title: 'home'
    }
  }
]
export default homeRoutes
