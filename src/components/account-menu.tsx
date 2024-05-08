import { LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useAuth } from '@/contexts/authContext'
import { doSignOut } from '@/services/auth'

import { Button } from './ui/button'

export function AccountMenu() {
  const { currentUser } = useAuth()
  const navigate = useNavigate()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="flex select-none justify-center gap-2 p-5 text-sm"
          variant="outline"
        >
          {currentUser
            ? `Olá 👋 ${currentUser.displayName ? currentUser.displayName : currentUser.email}!`
            : 'Logue na Aplicação.'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-[150px]">
        <DropdownMenuItem>Perfil</DropdownMenuItem>
        <DropdownMenuItem>Configurações</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="text-rose-400">
          <button
            onClick={() => {
              doSignOut().then(() => {
                navigate('/sign-in')
              })
            }}
            className="w-full"
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sair</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
