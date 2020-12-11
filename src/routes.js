const routes = [
  {
    path: '*',
    component: () => import('./pages/PageNotFound'),
    meta: { title: 'Unknown Page' }
  },
  {
    path: '/',
    component: () => import('./pages/Editor'),
    name: 'Editor',
    meta: { title: 'Simple Markdown Notetaker - Editor' }
  },
  {
    path: '/settings',
    component: () => import('./pages/Settings'),
    name: 'Settings',
    meta: { title: 'Simple Markdown Notetaker - Settings' }
  }
]

export default routes
