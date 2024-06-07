import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { Docs } from './pages/app/Docs/docs'
import { Forum } from './pages/app/Forum/forum'
import { Home } from './pages/app/Home/home'
import { Meet } from './pages/app/Meet/meet'
import { Report } from './pages/app/Report/report'
import { Settings } from './pages/app/settings/settings'
import { Tasks } from './pages/app/Tasks/tasks'
import { SignIn } from './pages/auth/sign-in'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/tasks', element: <Tasks /> },
      { path: '/docs', element: <Docs /> },
      { path: '/meet', element: <Meet /> },
      { path: '/forum', element: <Forum /> },
      { path: '/report', element: <Report /> },
      { path: '/settings', element: <Settings /> },
    ],
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
])
