import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { AuthProvider } from './contexts/authContext'
import { router } from './routes'

export function App() {
  return (
    <AuthProvider>
      <HelmetProvider>
        <Helmet titleTemplate="%s - Workday" />
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  )
}
