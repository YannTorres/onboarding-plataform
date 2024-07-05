import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { Pagination } from '@/components/pagination'
import { Table, TableHead, TableHeader, TableRow } from '@/components/ui/table'

import { TasksInputsForm } from './tasks'
import { TasksTableRow } from './tasks-table-row'

interface TasksStateProps {
  tasksArray: TasksInputsForm[]
  setTasksArray: React.Dispatch<React.SetStateAction<TasksInputsForm[]>>
}

export function TasksTable({ tasksArray, setTasksArray }: TasksStateProps) {
  const [searchParams, setSearchParams] = useSearchParams()

  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get('page') ?? '1')

  function handlePaginate(pageIndex: number) {
    setSearchParams((prev) => {
      prev.set('page', (pageIndex + 1).toString())

      return prev
    })
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px]">Tarefa</TableHead>
          <TableHead>Descrição da Tarefa</TableHead>
          <TableHead className="w-20">Prioridade</TableHead>
          <TableHead className="w-5"></TableHead>
        </TableRow>
      </TableHeader>
      {tasksArray.map((tasks, index) => {
        return (
          <TasksTableRow
            key={index}
            taskName={tasks.taskName}
            taskDescription={tasks.taskDescription}
            taskPriority={tasks.taskPriority}
            tasksArray={tasksArray}
            setTasksArray={setTasksArray}
            pageIndex={pageIndex}
          />
        )
      })}
      <Pagination
        onPageChange={handlePaginate}
        pageIndex={pageIndex}
        totalCount={tasksArray.length}
        perPage={5}
      />
    </Table>
  )
}
