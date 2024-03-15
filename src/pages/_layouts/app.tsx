import {
  AlertCircle,
  CalendarDays,
  FolderOpen,
  Home,
  ListChecks,
  MessageCircle,
} from 'lucide-react'
import { Outlet } from 'react-router-dom'

import Logo from '@/assets/Logo Workday.svg'
import { AccountMenu } from '@/components/account-menu'
import { NavLink } from '@/components/nav-link'

export function AppLayout() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between border-b-2 px-12 pb-1.5 pt-3">
        <img className="h-[42px] w-[96px]" src={Logo} alt="Logo da Workday" />
        <nav className="flex flex-row gap-8">
          <NavLink to="/">
            <Home />
            Inicío
          </NavLink>
          <NavLink to="/tasks">
            <ListChecks />
            Lista de Tarefas
          </NavLink>
          <NavLink to="/docs">
            <FolderOpen />
            Documentações
          </NavLink>
          <NavLink to="/meet">
            <CalendarDays />
            Reuniões
          </NavLink>
          <NavLink to="/forum">
            <MessageCircle />
            Fórum
          </NavLink>
          <NavLink to="/report">
            <AlertCircle />
            Feedback
          </NavLink>
        </nav>
        <AccountMenu />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
