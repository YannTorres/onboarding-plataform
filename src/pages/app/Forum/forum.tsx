import { useState } from 'react'

import Gordao from '@/assets/gordao.png'
import Lucon from '@/assets/lucon.png'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { PostsForum } from './posts-forum'

export type Post = {
  photo: string
  title: string
  name: string
}

const postsArray: Post[] = [
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
]
export function Forum() {
  const [busca, setBusca] = useState('')

  const postsFiltrados = postsArray.filter((post) =>
    post.title.toLowerCase().includes(busca.toLowerCase()),
  )

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
                <DialogHeader>Adicionar um Novo Post</DialogHeader>
                <DialogDescription>Detalhes do Post</DialogDescription>
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
