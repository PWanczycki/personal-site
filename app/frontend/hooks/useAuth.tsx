import { usePage } from '@inertiajs/react'
import { CustomPageProps } from '@/types/CustomPageProps'

export function useAuth() {
  const { auth } = usePage<CustomPageProps>().props
  return { user: auth.user, isAdmin: !!auth.user?.admin }
}
