import { createContext, useContext } from 'react'
import type { AppPath } from './paths'

export interface NavigateOptions {
  replace?: boolean
  search?: string
}

interface RouterContextValue {
  pathname: string
  search: string
  navigate: (to: AppPath, options?: NavigateOptions) => void
}

export const RouterContext = createContext<RouterContextValue | null>(null)

export function useLocation() {
  const context = useContext(RouterContext)
  if (!context) {
    throw new Error('useLocation must be used within a RouterProvider')
  }
  return { pathname: context.pathname, search: context.search }
}

export function useNavigate() {
  const context = useContext(RouterContext)
  if (!context) {
    throw new Error('useNavigate must be used within a RouterProvider')
  }
  return context.navigate
}
