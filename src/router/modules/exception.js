const exceptionRoutes = [
  {
    name: '401',
    path: '/401',
    component: () => import('@/views/exception'),
    meta: {
      hidden: true
    }
  },
  {
    name: '403',
    path: '/403',
    component: () => import('@/views/exception'),
    meta: {
      hidden: true
    }
  },
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/exception'),
    meta: {
      hidden: true
    }
  },
  {
    name: '500',
    path: '/500',
    component: () => import('@/views/exception'),
    meta: {
      hidden: true
    }
  },
  {
    name: '502',
    path: '/502',
    component: () => import('@/views/exception'),
    meta: {
      hidden: true
    }
  }
]

export default exceptionRoutes
