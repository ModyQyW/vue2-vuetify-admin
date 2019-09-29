// the layout for most pages
import Layout from '@/views/layout'

export default [
  {
    name: 'editor',
    path: '/editor',
    redirect: { name: 'editor-markdown' },
    component: Layout,
    children: [
      {
        name: 'editor-markdown',
        path: 'markdown',
        component: () => import('@/views/editor/markdown-editor'),
        meta: {
          title: 'drawer.editor-markdown'
          // hidden: true
        }
      },
      {
        name: 'editor-rich-text',
        path: 'rich-text',
        component: () => import('@/views/editor/rich-text-editor'),
        meta: {
          title: 'drawer.editor-rich-text'
          // hidden: true
        }
      }
    ],
    meta: {
      title: 'drawer.editor',
      icon: 'edit'
    }
  }
]
