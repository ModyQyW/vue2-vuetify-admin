// the layout for most pages
import Layout from '@/views/layout'

const exceptionRoutes = [
  {
    path: '/401',
    component: Layout,
    children: [
      {
        name: '401',
        path: '',
        component: () => import('@/views/exception')
      }
    ],
    meta: {
      hidden: true
    }
  },
  {
    path: '/403',
    component: Layout,
    children: [
      {
        name: '403',
        path: '',
        component: () => import('@/views/exception')
      }
    ],
    meta: {
      hidden: true
    }
  },
  {
    path: '/404',
    component: Layout,
    children: [
      {
        name: '404',
        path: '',
        component: () => import('@/views/exception')
      }
    ],
    meta: {
      hidden: true
    }
  },
  {
    path: '/500',
    component: Layout,
    children: [
      {
        name: '500',
        path: '',
        component: () => import('@/views/exception')
      }
    ],
    meta: {
      hidden: true
    }
  },
  {
    path: '/502',
    component: Layout,
    children: [
      {
        name: '502',
        path: '',
        component: () => import('@/views/exception')
      }
    ],
    meta: {
      hidden: true
    }
  },
  {
    path: '/520',
    component: Layout,
    children: [
      {
        name: '520',
        path: '',
        component: () => import('@/views/exception')
      }
    ],
    meta: {
      hidden: true
    }
  }
]

export default exceptionRoutes
