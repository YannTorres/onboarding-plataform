import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { toast, Toaster } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

const reportInputsFormSchema = z.object({
  reportType: z.string(),
  reportDescription: z.string().min(1),
})

type ReportInputsForm = z.infer<typeof reportInputsFormSchema>

export function Report() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm<ReportInputsForm>({
    resolver: zodResolver(reportInputsFormSchema),
  })

  function handleForm(data: ReportInputsForm) {
    console.log(data)
    toast.success('Seu Feedback foi enviado para avaliarmos.')
    reset()
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-1">
        <h1 className="text-4xl font-bold">Feedback</h1>
        <p className="text-xl font-semibold">
          Envie o feedback da plataforma para nosso time
        </p>
      </div>
      <div className="mt-40 flex justify-center gap-3">
        <form
          className="flex flex-col gap-3"
          onSubmit={handleSubmit(handleForm)}
          action=""
        >
          <h4 className="text-xl font-semibold">Sobre o que é seu feedback?</h4>
          <Controller
            control={control}
            name="reportType"
            render={({ field: { name, onChange, value, disabled } }) => {
              return (
                <Select
                  required
                  name={name}
                  onValueChange={onChange}
                  value={value}
                  disabled={disabled}
                >
                  <SelectTrigger className="">
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="design-feedback">
                      Design ou função do produto
                    </SelectItem>
                    <SelectItem value="work-environment-feedback">
                      Denuncias ambiente de tabalho
                    </SelectItem>
                    <SelectItem value="irrelevant-content-feedback">
                      Conteúdo irrelevante
                    </SelectItem>
                    <SelectItem value="other-feedback">Outra Opção</SelectItem>
                  </SelectContent>
                </Select>
              )
            }}
          />

          <Label className="text-xl font-semibold" htmlFor="text-area">
            Descreva mais o seu parecer.
          </Label>
          <Controller
            name="reportDescription"
            control={control}
            render={({ field: { name, value, disabled, onChange } }) => {
              return (
                <Textarea
                  required
                  name={name}
                  onChange={onChange}
                  value={value}
                  disabled={disabled}
                  id="text-area"
                  placeholder="Escreva sua mensagem aqui."
                  className="h-40 w-[520px] resize-none"
                />
              )
            }}
          />
          <Button
            disabled={isSubmitting}
            className="bg-teal-800 text-white hover:bg-teal-700"
            type="submit"
          >
            Enviar Mensagem
          </Button>
          <p className="text-xs text-muted-foreground">
            * A Workday pode usar os seus dados para entender o seu feedback e
            melhorar sua experiência
          </p>
          <Toaster />
        </form>
      </div>
    </div>
  )
}
