import { zodResolver } from '@hookform/resolvers/zod'
import { SendHorizonal } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import UsuarioAnonimo from '@/assets/usuarioAnonimo.jpg'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { useAuth } from '@/contexts/authContext'

import { Post } from './forum'

const newResponseFormSchema = z.object({
  response: z.string().min(1),
})

type newResponseForm = z.infer<typeof newResponseFormSchema>

type Response = {
  response: string
  photo: string
  name: string
}

export function PostsForum({ title, name, photo, description }: Post) {
  const { currentUser } = useAuth()
  const [response, setResponse] = useState<Response[]>([
    {
      photo: UsuarioAnonimo,
      name: 'Usuário Anônimo',
      response:
        'Olá, tudo bem? Poderia me passar mais detalhes sobre o problema?',
    },
  ])
  const { handleSubmit, register, reset } = useForm<newResponseForm>({
    resolver: zodResolver(newResponseFormSchema),
  })

  function handleResponse(data: newResponseForm) {
    if (currentUser) {
      const responseData = {
        photo: currentUser.photoURL || UsuarioAnonimo,
        name: currentUser.displayName || 'Usuário Anônimo',
        response: data.response,
      }

      setResponse([...response, responseData])
      reset()
    }
  }

  return (
    <div className="flex w-[854px] flex-row items-center justify-between rounded-md bg-zinc-900 p-4">
      <div className="flex flex-row gap-4">
        <img
          className="h-10 w-10 rounded-full"
          src={photo}
          alt="Foto do autor do Post no Forum"
        />
        <div>
          <h2 className="text-base font-semibold">{title}</h2>
          <p className="text-sm font-medium text-[#A3A3A3]">{name}</p>
        </div>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-zinc-800 px-9 text-white hover:bg-zinc-700">
            Responder
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-xl">
          <div className="flex flex-row gap-3">
            <img
              className="h-10 w-10 rounded-full"
              src={photo}
              alt="Foto do autor do Post no Forum"
            />
            <p className="text-base font-semibold">{name}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-base font-semibold">{title}</h2>
            <p className="text-sm font-medium text-[#A3A3A3]">{description}</p>
          </div>
          <form
            onSubmit={handleSubmit(handleResponse)}
            className="relative mt-5 flex flex-col"
          >
            <div className="flex flex-row gap-2">
              <img
                className="h-10 w-10 rounded-full"
                src={currentUser?.photoURL || UsuarioAnonimo}
                alt="Foto do autor do Post no Forum"
              />
              <Textarea
                {...register('response')}
                required
                placeholder="Mande a sua resposta"
                className="h-28 w-full resize-none"
              />
              <Button className="mt-auto h-8 bg-teal-800 text-white hover:bg-teal-700">
                <SendHorizonal className="h-5 w-5" />
              </Button>
            </div>
          </form>
          <div>
            {response.map((resposta, index) => (
              <div
                key={index}
                className="mt-5 flex flex-row items-center gap-3 border-t-[1px] pt-3 "
              >
                <img
                  className="h-10 w-10 rounded-full"
                  src={resposta.photo}
                  alt="Foto do autor do Post no Forum"
                />
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-semibold text-[#A3A3A3]">
                    {resposta.name}
                  </p>
                  <p className="text-sm font-medium ">{resposta.response}</p>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
