import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import Gordao from '@/assets/gordao.png'
import Lucon from '@/assets/lucon.png'
import MeuAmor from '@/assets/meuamor.png'
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
import { useAuth } from '@/contexts/authContext'

import { PostsForum } from './posts-forum'

const newPostFormSchema = z.object({
  title: z.string().min(1),
  name: z.string().min(1),
})

type newPostForm = z.infer<typeof newPostFormSchema>

export type Post = {
  photo: string
  title: string
  name: string
}

export function Forum() {
  const { currentUser } = useAuth()
  const [busca, setBusca] = useState('')
  const [postsArray, setPostsArray] = useState<Post[]>([
    {
      photo: Lucon,
      title: '@fluentui/react-context-selector ou use-context-selector',
      name: 'Lucas Tucunduva',
    },
    {
      photo: Gordao,
      title: 'Problema com a requisição Restaurant',
      name: 'Luiz Felipe Medeiros',
    },
    {
      photo: MeuAmor,
      title: 'Problemas com Autenticação no Next',
      name: 'Thaynara Damazio',
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
        photo: currentUser?.photoURL,
        title: data.title,
        name: data.name,
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
                  <DialogTitle>Adicionar um novo Post</DialogTitle>
                  <form
                    onSubmit={handleSubmit(handleForm)}
                    className="flex flex-col"
                  >
                    <Label htmlFor="postTitle" className="mb-2 mt-5">
                      Titulo do Post:
                    </Label>
                    <Input
                      {...register('title')}
                      id="postTitle"
                      placeholder="Adicione um Título para o seu Post."
                    />
                    <Label htmlFor="postName" className="mb-2 mt-2">
                      Seu Nome:
                    </Label>
                    <Input
                      {...register('name')}
                      id="postName"
                      placeholder="Qual o seu nome?"
                    />
                    <Button className="mt-2 bg-teal-800 px-7 text-white hover:bg-teal-700">
                      Enviar o Post
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
          />
        ))}
      </div>
    </div>
  )
}
