import 'react-day-picker/dist/style.css'

import { useState } from 'react'

import { Calendar } from '@/components/ui/calendar'

export function Meet() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">Reuniões</h1>
      <p className="mt-1 text-xl font-semibold">
        Utilize o nosso calendário para organizar suas reuniões!
      </p>
      <div className="mt-10 grid grid-cols-2 items-center justify-center">
        <Calendar
          numberOfMonths={1}
          mode="single"
          selected={date}
          onSelect={setDate}
          className="cell-size-[500px] rounded-md border"
        />
        <div></div>
      </div>
    </div>
  )
}
