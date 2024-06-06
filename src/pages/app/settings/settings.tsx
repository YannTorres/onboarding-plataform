import { getAuth, updateProfile } from 'firebase/auth'
import { Cog, Lock, User } from 'lucide-react'
import { useState } from 'react'

import { NavLinkSettings } from '@/components/nav-link-settings'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/contexts/authContext'

export function Settings() {
  const auth = getAuth()
  const { currentUser } = useAuth()
  const [currentUserDisplayName, setCurrentUserDisplayName] = useState('')

  function updateDisplayName() {
    updateProfile(auth.currentUser!, {
      displayName: currentUserDisplayName,
    })
  }

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
        <div className="col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Alterar nome de Exibição</CardTitle>
              <CardDescription>
                Altere o nome de exibição que é utilizado no nosso site.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <Input
                  placeholder={`${currentUser?.displayName ? currentUser.displayName : ''}`}
                  onChange={(ev) => setCurrentUserDisplayName(ev.target.value)}
                />
              </form>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button onClick={updateDisplayName}>Save</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
