export default [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "screen" */'@/views/screen/index.vue')
  },
  {
    path: '/screen',
    component: () => import(/* webpackChunkName: "screen" */'@/views/screen/index.vue')
  }
]
