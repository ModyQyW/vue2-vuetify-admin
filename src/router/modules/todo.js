// the layout for most pages
import Layout from '@/views/layout'

export default [
  {
    path: '/todo',
    component: Layout,
    children: [
      {
        name: 'todo',
        path: '',
        component: () => import('@/views/todo'),
        meta: {
          title: 'drawer.todo',
          icon: 'list'
        }
      }
    ]
  }
]
