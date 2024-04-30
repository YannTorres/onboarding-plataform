import { DialogContent } from '@radix-ui/react-dialog'

import { DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'

export function NewPost() {
  return (
    <DialogContent className="absolute">
      <DialogHeader>
        <DialogTitle>Adicionar um Novo Post</DialogTitle>
        <DialogDescription>Detalhes do Post</DialogDescription>
      </DialogHeader>
      
    </DialogContent>
  )
}
