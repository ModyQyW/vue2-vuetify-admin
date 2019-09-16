const authenticationRoutes = [
  {
    path: '/',
    redirect: { name: 'login' },
    meta: {
      hidden: true
    }
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login'),
    meta: {
      title: 'login',
      hidden: true
    }
  }
]

export default authenticationRoutes
