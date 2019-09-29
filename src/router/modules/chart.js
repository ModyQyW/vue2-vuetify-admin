// the layout for most pages
import Layout from '@/views/layout'

export default [
  {
    path: '/chart',
    component: Layout,
    children: [
      {
        name: 'chart',
        path: '',
        component: () => import('@/views/chart'),
        meta: {
          title: 'drawer.chart',
          icon: 'multiline_chart'
        }
      }
    ]
  }
]
