import { Button } from '@/components/ui/button'

import { Post } from './forum'

export function PostsForum({ title, name, photo }: Post) {
  return (
    <div className="flex w-[854px] flex-row items-center justify-between rounded-md bg-zinc-900 p-4">
      <div className="flex flex-row gap-4">
        <img
          className="h-10 w-10"
          src={photo}
          alt="Foto do autor do Post no Forum"
        />
        <div>
          <h2 className="text-base font-semibold">{title}</h2>
          <p className="text-sm font-medium text-[#A3A3A3]">{name}</p>
        </div>
      </div>
      <Button className="bg-zinc-800 px-9 text-white hover:bg-zinc-700">
        Responder
      </Button>
    </div>
  )
}
