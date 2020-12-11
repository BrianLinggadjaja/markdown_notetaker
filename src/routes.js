const routes = [
  {
    path: '*',
    component: () => import('./pages/PageNotFound'),
    meta: { title: '404 Unknown Page' }
  },
  {
    path: '/editor',
    component: () => import('./pages/Editor'),
    name: 'Editor',
    meta: { title: 'Editor' }
  },
  {
    path: '/settings',
    component: () => import('./pages/Settings'),
    name: 'Settings',
    meta: { title: 'Settings' }
  }
]

export default routes
