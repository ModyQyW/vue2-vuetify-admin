// the layout for most pages
import Layout from '@/views/layout'

// module authentication
import authenticationRoutes from './modules/authentication'

// module exception
import exceptionRoutes from './modules/exception'

// a set for authentication routes using for judgement
export const authenticationRouteSet = new Set(authenticationRoutes.map(route => route.path))

// a set for exception routes using for judgement
export const exceptionRouteSet = new Set(exceptionRoutes.map(route => route.path))

/**
 * route structure
 * max depth: 4
 * In all cases I met, 4 is fine
 * 1st: Layout component or self layout page (for example, login)
 * 2nd: v-list-item or v-list-group
 * 3rd: v-list-item or v-list-group
 * 4th: v-list-item
 * If you have to use 5 or more, rethink: is it neccessary?
 *
 * @typedef Route
 * @property name        {String}    route name
 * @property path        {String}    route path, required
 * @property meta        {Object}
 * @property meta.roles  {Number[]}  an array for roles, default [], meaning that
 *                                   every role can visit
 * @property meta.title  {String}    a string for title, default empty string, will
 *                                   be dealed with i18n, should be set personally
 *                                   if it will be shown in the drawer
 * @property meta.hidden {Boolean}   hide in the drawer or not, default false
 * @property meta.icon   {String}    a string for icon name, default empty string,
 *                                   should be set personally if it will be shown
 *                                   in the drawer
 * @property children    {Route[]}
 *
 */

/**
 * @description the routes for every role
 */
export const immutableRoutes = [
  ...authenticationRoutes,
  ...exceptionRoutes,
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
  },
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
  },
  {
    path: '/editor',
    name: 'editor',
    redirect: { name: 'editor-markdown' },
    component: Layout,
    children: [
      {
        name: 'editor-markdown',
        path: 'markdown',
        component: () => import('@/views/editor/markdown-editor'),
        meta: {
          title: 'drawer.editor-markdown'
        }
      },
      {
        name: 'editor-rich-text',
        path: 'rich-text',
        component: () => import('@/views/editor/rich-text-editor'),
        meta: {
          title: 'drawer.editor-rich-text'
        }
      }
    ],
    meta: {
      title: 'drawer.editor',
      icon: 'edit'
    }
  },
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
  },
  {
    path: '/file',
    name: 'file',
    redirect: { name: 'file-save' },
    component: Layout,
    children: [
      {
        name: 'file-save',
        path: 'save',
        component: () => import('@/views/file/file-save.vue'),
        meta: {
          title: 'drawer.file-save'
        }
      },
      {
        name: 'file-zip',
        path: 'zip',
        component: () => import('@/views/file/file-zip.vue'),
        meta: {
          title: 'drawer.file-zip'
        }
      }
    ],
    meta: {
      title: 'drawer.file',
      icon: 'folder'
    }
  },
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

/**
 * @description the routes for specific role
 *              use 404 to match all the other pages
 *              so 404 should be the last one
 */
export const mutableRoutes = [
  {
    path: '*',
    redirect: { name: '404' },
    meta: {
      hidden: true
    }
  }
]
