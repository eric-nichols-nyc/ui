import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <Card>
      <CardHeader>
        <CardTitle>Calendar</CardTitle>
      </CardHeader>
      <CardContent className="w-full flex items-center justify-center">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="flex items-center justify-center rounded-md border w-full"
      />
      </CardContent>
    </Card>
  );
}

