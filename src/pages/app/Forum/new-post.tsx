import { DialogContent } from '@radix-ui/react-dialog'

import { DialogDescription, DialogHeader } from '@/components/ui/dialog'

export function NewPost() {
  return (
    <DialogContent className="absolute">
      <DialogHeader>Adicionar um Novo Post</DialogHeader>
      <DialogDescription>Detalhes do Post</DialogDescription>
    </DialogContent>
  )
}
