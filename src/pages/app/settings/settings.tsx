import { getAuth, updateProfile, verifyBeforeUpdateEmail } from 'firebase/auth'
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
  const [currentUserEmail, setCurrentUserEmail] = useState('')
  const [image, setImage] = useState('')
  const [photoURL, setPhotoURL] = useState('')

  function updateAccountDisplayName() {
    updateProfile(auth.currentUser!, {
      displayName: currentUserDisplayName,
    })
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleImageChange = (e: any) => {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        setImage(file)
        setPhotoURL(reader.result)
      }
    }

    if (file) {
      reader.readAsDataURL(file)
    }

    console.log(photoURL)
    console.log(image)
  }

  const apiKey = 'JhpxIdcTIbHcmpsIb2dmsZw2oWHiz8fTy55abAOeWVBA1GJHWsqG9M0YsppN' // Substitua com seu token de API do TinyURL
  const longUrl = photoURL // Substitua com a URL que deseja encurtar

  function updateAccountPhoto() {
    fetch('https://api.tinyurl.com/create', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: longUrl,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.data && data.data.tiny_url) {
          console.log('URL Encurtada:', data.data.tiny_url)
        } else {
          throw new Error('Não foi possível encurtar a URL')
        }
      })
      .catch((error) => {
        console.error('Erro ao encurtar URL:', error)
      })

    // updateProfile(auth.currentUser!, {
    //  photoURL,
    // })
  }

  function updateAccountEmail() {
    verifyBeforeUpdateEmail(auth.currentUser!, `${currentUserEmail}`)
  }

  return (
    <div className="flex flex-col gap-3 px-10">
      <h1 className="text-3xl font-bold">Configurações</h1>
      <div className="grid grid-cols-4 gap-24 pt-16">
        <nav className="flex flex-col gap-4 text-muted-foreground">
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
        <div className="col-span-3 flex flex-col justify-start gap-10">
          <Card className="w-[80%]">
            <CardHeader>
              <CardTitle>Alterar nome de exibição</CardTitle>
              <CardDescription>
                Altere o nome de exibição que é utilizado em nossa plataforma.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <Input
                  placeholder={`${currentUser?.displayName ? currentUser.displayName : ''}`}
                  onChange={(ev) => setCurrentUserDisplayName(ev.target.value)}
                  required
                />
              </form>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button onClick={updateAccountDisplayName}>Salvar</Button>
            </CardFooter>
          </Card>
          <Card className="w-[80%]">
            <CardHeader>
              <CardTitle>Alterar foto de perfil</CardTitle>
              <CardDescription>Altere a sua foto de perfil.</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <Input
                  className="cursor-pointer rounded-lg text-sm text-gray-400 placeholder-gray-400 focus:outline-none"
                  type="file"
                  onChange={handleImageChange}
                />
              </form>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button onClick={updateAccountPhoto}>Salvar</Button>
            </CardFooter>
          </Card>
          <Card className="w-[80%]">
            <CardHeader>
              <CardTitle>Alterar email da conta</CardTitle>
              <CardDescription>
                Altere o email que é utilizado para acessar a sua conta.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <Input
                  placeholder={`${currentUser?.email ? currentUser.email : ''}`}
                  onChange={(ev) => setCurrentUserEmail(ev.target.value)}
                />
              </form>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button onClick={updateAccountEmail}>Salvar</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
