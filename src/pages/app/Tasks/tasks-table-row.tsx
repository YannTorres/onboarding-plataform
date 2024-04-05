import { ArrowDown, ArrowLeft, ArrowUp, Trash2 } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { TableCell, TableRow } from '@/components/ui/table'

import { TasksInputsForm } from './tasks'

interface TasksProps {
  taskName: string
  taskDescription: string
  taskPriority: string
  tasksArray: TasksInputsForm[]
  setTasksArray: React.Dispatch<React.SetStateAction<TasksInputsForm[]>>
}

export function TasksTableRow({
  taskName,
  taskDescription,
  taskPriority,
  tasksArray,
  setTasksArray,
}: TasksProps) {
  function removeTask() {
    setTasksArray(tasksArray.filter((task) => taskName !== task.taskName))
  }

  const [checkboxState, setCheckboxState] = useState(false)

  function setFinishedTask() {
    if (checkboxState === false) {
      setCheckboxState(true)
    } else {
      setCheckboxState(false)
    }
  }

  return (
    <TableRow>
      <TableCell>
        <div className="flex items-center gap-3">
          <Checkbox
            id={taskName}
            onClick={setFinishedTask}
            checked={checkboxState}
          />
          {checkboxState === false ? (
            <Label htmlFor={taskName}>{taskName}</Label>
          ) : (
            <Label className="line-through" htmlFor={taskName}>
              {taskName}
            </Label>
          )}
        </div>
      </TableCell>
      {checkboxState === false ? (
        <TableCell>{taskDescription}</TableCell>
      ) : (
        <TableCell className="line-through">{taskDescription}</TableCell>
      )}
      <TableCell>
        {taskPriority === 'high' && (
          <div className="flex items-center gap-2">
            <ArrowUp className="h-4 w-4 text-white" />
            <span className="font-medium text-muted-foreground">Alta</span>
          </div>
        )}
        {taskPriority === 'medium' && (
          <div className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4 text-white" />
            <span className="font-medium text-muted-foreground">Média</span>
          </div>
        )}
        {taskPriority === 'low' && (
          <div className="flex items-center gap-2">
            <ArrowDown className="h-4 w-4 text-white" />
            <span className="font-medium text-muted-foreground">Baixa</span>
          </div>
        )}
      </TableCell>
      <TableCell>
        <Button onClick={removeTask} className="h-8" variant="ghost">
          <Trash2 className="h-4 w-4 text-rose-400" />
        </Button>
      </TableCell>
    </TableRow>
  )
}
