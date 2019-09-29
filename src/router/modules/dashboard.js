// the layout for most pages
import Layout from '@/views/layout'

export default [
  {
    path: '/dashboard',
    component: Layout,
    children: [
      {
        name: 'dashboard',
        path: '',
        component: () => import('@/views/dashboard'),
        meta: {
          title: 'drawer.dashboard',
          icon: 'dashboard'
        }
      }
    ]
  }
]
