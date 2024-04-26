import { CalendarDays } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function Cards() {
  return (
    <div className="mb-4 flex max-w-[85%] flex-col gap-2 rounded-md border border-[#E5E7EB] bg-transparent p-4 shadow-inner">
      <h4 className="text-base font-semibold">
        Lorem, ipsum dolor sit amet consectetur
      </h4>
      <p className="font-regular text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit, sit amet
        consectetur.
      </p>
      <div className="flex flex-row items-center gap-1 pb-3 text-[#A3A3A3]">
        <CalendarDays className="h-5 w-5" />
        <p className="font-regular text-sm">Dezembro de 2023</p>
      </div>
      <Button className="max-w-[50%] bg-teal-800 text-white hover:bg-teal-700">
        Acessar Conteúdo
      </Button>
    </div>
  )
}
