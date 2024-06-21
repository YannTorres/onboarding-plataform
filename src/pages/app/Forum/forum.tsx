import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import Gordao from '@/assets/gordao.png'
import Lucon from '@/assets/lucon.png'
import MeuAmor from '@/assets/meuamor.png'
import UsuarioAnonimo from '@/assets/usuarioAnonimo.jpg'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useAuth } from '@/contexts/authContext'

import { PostsForum } from './posts-forum'

const newPostFormSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
})

type newPostForm = z.infer<typeof newPostFormSchema>

export type Post = {
  photo: string
  title: string
  name: string
  description: string
}

export function Forum() {
  const { currentUser } = useAuth()
  const [busca, setBusca] = useState('')
  const [postsArray, setPostsArray] = useState<Post[]>([
    {
      photo: Lucon,
      title: 'Problemas com a realização de requisições',
      name: 'Lucas Tucunduva',
      description:
        'Estou com problemas para fazer requisições para a API publica do Google Maps, alguém pode me ajudar?',
    },
    {
      photo: Gordao,
      title: 'Problemas com criação de rotas na minha aplicação',
      name: 'Luiz Felipe Medeiros',
      description:
        'Estou com problemas para criar rotas na minha aplicação, alguém pode me ajudar?',
    },
    {
      photo: MeuAmor,
      title: 'Problemas com Autenticação no Next',
      name: 'Thaynara Damazio',
      description:
        'Estou com problemas para fazer a autenticação no Next, alguém pode me ajudar?',
    },
  ])

  const postsFiltrados = postsArray.filter((post) =>
    post.title.toLowerCase().includes(busca.toLowerCase()),
  )

  const { handleSubmit, register, reset } = useForm<newPostForm>({
    resolver: zodResolver(newPostFormSchema),
  })

  function handleForm(data: newPostForm) {
    if (currentUser) {
      const post = {
        photo: currentUser.photoURL || UsuarioAnonimo,
        title: data.title,
        name: currentUser.displayName || '',
        description: data.description,
      }

      setPostsArray([...postsArray, post])
      reset()
    }
  }
  return (
    <div className="flex flex-col gap-14">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-4xl font-bold">Fórum</h1>
        <p className="text-xl font-semibold">Tire as suas Dúvidas Aqui!</p>
      </div>
      <form action="">
        <div className="flex flex-row items-end justify-center gap-16">
          <div className="w-[650px]">
            <Label htmlFor="searchFilter">Busque um Tópico:</Label>
            <Input
              id="searchFilter"
              placeholder="Digite um termo para buscar"
              value={busca}
              onChange={(ev) => setBusca(ev.target.value)}
            />
          </div>
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="ml-2 bg-teal-800 px-7 text-white hover:bg-teal-700">
                  Novo Tópico
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Adicionar uma nova publicação</DialogTitle>
                  <form
                    onSubmit={handleSubmit(handleForm)}
                    className="flex flex-col"
                  >
                    <Label htmlFor="postTitle" className="mb-2 mt-5">
                      Titulo da publicação:
                    </Label>
                    <Input
                      {...register('title')}
                      id="postTitle"
                      placeholder="Adicione um Título para a sua publicação."
                    />
                    <Label htmlFor="postTitle" className="mb-2 mt-5">
                      Descrição da publicação:
                    </Label>
                    <Textarea
                      {...register('description')}
                      id="postDescription"
                      placeholder="Adicione uma descrição para a sua publicação."
                      className="resize-none"
                    />
                    <Button className="mt-2 bg-teal-800 px-7 text-white hover:bg-teal-700">
                      Enviar Publicação
                    </Button>
                  </form>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </form>
      <div className="mt-[-20px] flex flex-col items-center gap-3">
        {postsFiltrados.map((post) => (
          <PostsForum
            key={post.title}
            title={post.title}
            name={post.name}
            photo={post.photo}
            description={post.description}
          />
        ))}
      </div>
    </div>
  )
}
