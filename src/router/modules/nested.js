// the layout for most pages
import Layout from '@/views/layout'

export default [
  {
    path: '/nested',
    name: 'nested',
    redirect: { name: 'nested-level1-inner1' },
    component: Layout,
    children: [
      {
        path: 'level1',
        name: 'nested-level1',
        redirect: { name: 'nested-level1-inner1' },
        component: () => import('@/views/nested/level1'),
        children: [
          {
            path: 'inner1',
            name: 'nested-level1-inner1',
            component: () => import('@/views/nested/level1/inner1'),
            meta: {
              title: 'drawer.nested-level1-inner1'
            }
          },
          {
            path: 'inner2',
            name: 'nested-level1-inner2',
            component: () => import('@/views/nested/level1/inner2'),
            meta: {
              title: 'drawer.nested-level1-inner2'
            }
          }
        ],
        meta: {
          title: 'drawer.nested-level1'
        }
      },
      {
        path: 'level2',
        name: 'nested-level2',
        redirect: { name: 'nested-level2-inner1' },
        component: () => import('@/views/nested/level2'),
        children: [
          {
            path: 'inner1',
            name: 'nested-level2-inner1',
            component: () => import('@/views/nested/level2/inner1'),
            meta: {
              title: 'drawer.nested-level2-inner1'
            }
          },
          {
            path: 'inner2',
            name: 'nested-level2-inner2',
            component: () => import('@/views/nested/level2/inner2'),
            meta: {
              title: 'drawer.nested-level2-inner2'
            }
          }
        ],
        meta: {
          title: 'drawer.nested-level2'
        }
      }
    ],
    meta: {
      title: 'drawer.nested',
      icon: 'toc'
    }
  }
]
