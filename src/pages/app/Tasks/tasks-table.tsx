import { Table, TableHead, TableHeader, TableRow } from '@/components/ui/table'

import { TasksInputsForm } from './tasks'
import { TasksTableRow } from './tasks-table-row'

interface TasksStateProps {
  tasksArray: TasksInputsForm[]
  setTasksArray: React.Dispatch<React.SetStateAction<TasksInputsForm[]>>
}

export function TasksTable({ tasksArray, setTasksArray }: TasksStateProps) {
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
          />
        )
      })}
    </Table>
  )
}
