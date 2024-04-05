import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { TasksTable } from './tasks-table'

const taskInputsFormSchema = z.object({
  taskName: z.string(),
  taskDescription: z.string(),
  taskPriority: z.string(),
})

export type TasksInputsForm = z.infer<typeof taskInputsFormSchema>

export function Tasks() {
  const [tasksArray, setTasksArray] = useState<TasksInputsForm[]>([])

  const { handleSubmit, register, control, reset } = useForm<TasksInputsForm>({
    resolver: zodResolver(taskInputsFormSchema),
  })

  function handleForm(data: TasksInputsForm) {
    setTasksArray([...tasksArray, data])

    reset()
  }

  return (
    <div className="flex flex-col">
      <h2 className="flex items-center justify-center text-4xl font-bold tracking-tight">
        Organize as suas pendências aqui:
      </h2>

      <form
        onSubmit={handleSubmit(handleForm)}
        className="mt-14 flex flex-row items-end justify-start gap-2"
      >
        <div className="flex w-[236px] flex-col">
          <Label className="mb-2 text-base" htmlFor="newTask">
            Adicione uma nova Tarefa:
          </Label>
          <Input
            id="newTask"
            placeholder="Nome da tarefa"
            {...register('taskName', { required: true })}
          />
        </div>
        <Input
          className="w-[402px]"
          id="newTask"
          placeholder="Descrição da Tarefa"
          {...register('taskDescription', { required: true })}
        />
        <Controller
          control={control}
          name="taskPriority"
          render={({ field: { name, onChange, value, disabled } }) => {
            return (
              <Select
                name={name}
                onValueChange={onChange}
                value={value}
                disabled={disabled}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Prioridade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Baixa</SelectItem>
                  <SelectItem value="medium">Média</SelectItem>
                  <SelectItem value="high">Alta</SelectItem>
                </SelectContent>
              </Select>
            )
          }}
        />
        <Button
          type="submit"
          className="bg-teal-800 text-white hover:bg-teal-700"
        >
          Adicionar Tarefa
        </Button>
      </form>

      <div className="mt-6 rounded-md border">
        <TasksTable tasksArray={tasksArray} setTasksArray={setTasksArray} />
      </div>
    </div>
  )
}
