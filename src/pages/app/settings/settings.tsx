import { Cog, Lock, User } from 'lucide-react'

import { NavLinkSettings } from '@/components/nav-link-settings'

export function Settings() {
  return (
    <div className="flex flex-col gap-3 px-10">
      <h1 className="text-3xl font-bold">Configurações</h1>
      <div className="grid grid-cols-4 gap-24 pt-16">
        <nav className="grid gap-4 text-sm text-muted-foreground">
          <NavLinkSettings to="/settings">
            <User />
            Perfil
          </NavLinkSettings>
          <NavLinkSettings to="#">
            <Lock />
            Segurança
          </NavLinkSettings>
          <NavLinkSettings to="#">
            <Cog />
            Avançado
          </NavLinkSettings>
        </nav>
        <div className="col-span-3">asdasd</div>
      </div>
    </div>
  )
}
