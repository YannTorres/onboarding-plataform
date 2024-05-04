import 'react-day-picker/dist/style.css'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast, Toaster } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const meetInputsFormSchema = z.object({
  meetDay: z.date().optional(),
  meetTitle: z.string().min(1),
  meetDescription: z.string().min(1),
  meetLocal: z.string().min(1),
})

type MeetInputsForm = z.infer<typeof meetInputsFormSchema>

export function Meet() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [meetsArray, setMeetsArray] = useState<MeetInputsForm[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  function HandleClickDay() {
    setIsModalOpen(true)
  }

  const { handleSubmit, register, reset } = useForm<MeetInputsForm>({
    resolver: zodResolver(meetInputsFormSchema),
  })

  function handleForm(data: MeetInputsForm) {
    const newMeet = {
      meetDay: date,
      meetTitle: data.meetTitle,
      meetDescription: data.meetDescription,
      meetLocal: data.meetLocal,
    }
    setMeetsArray([...meetsArray, newMeet])
    console.log(meetsArray)
    toast.success('Reunião Adicionada com sucesso.')
    reset()
    setIsModalOpen(false)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">Reuniões</h1>
      <p className="mt-1 text-xl font-semibold">
        Utilize o nosso calendário para organizar suas reuniões!
      </p>
      <div className="mt-10 grid grid-cols-2">
        <div className="mr-10 flex">
          <Calendar
            numberOfMonths={1}
            mode="single"
            onDayClick={HandleClickDay}
            selected={date}
            onSelect={setDate}
            className="cell-size-[200px] rounded-md border"
          />
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  Agendar uma reunião para o dia{' '}
                  {date?.toLocaleDateString('pt-br')}
                </DialogTitle>
              </DialogHeader>
              <form
                onSubmit={handleSubmit(handleForm)}
                className="mt-10 flex flex-col gap-3"
              >
                <Label>Adicionar Título:</Label>
                <Input
                  placeholder="Titulo"
                  {...register('meetTitle', { required: true })}
                />
                <Label>Adicionar uma Descrição:</Label>
                <Input
                  placeholder="Descrição"
                  {...register('meetDescription', { required: true })}
                />
                <Label>Adicionar um Local:</Label>
                <Input
                  placeholder="Nome do local"
                  {...register('meetLocal', { required: true })}
                />
                <Button className="bg-teal-800 text-white hover:bg-teal-700">
                  Agendar Reunião
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        {date ? (
          <div className="flex flex-col">
            <h2 className="mt-1 flex justify-center text-xl font-semibold">
              Reuniões Agendadas para o dia{' '}
              {`${date.toLocaleDateString('pt-br')}`}
            </h2>
            <div className="mt-20 flex flex-col items-center">
              {meetsArray.map((meet) => {
                if (meet.meetDay?.getDay() === date.getDay()) {
                  return (
                    <div
                      className="mb-2 w-full border-2 p-5"
                      key={meet.meetDescription}
                    >
                      <p>{meet.meetTitle}</p>
                      <p>{meet.meetDescription}</p>
                      <p>{meet.meetLocal}</p>
                    </div>
                  )
                } else {
                  return null
                }
              })}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <h2 className="mt-1 flex items-center justify-center text-2xl font-semibold">
              Nenhuma Reunião Agendada, selecione outro dia!
            </h2>
          </div>
        )}
      </div>
      <Toaster />
    </div>
  )
}
