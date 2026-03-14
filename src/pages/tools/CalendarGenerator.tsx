import { useState } from "react";
import { ToolLayout } from "@/components/ToolLayout";
import { Label } from "@/components/ui/label";

const CalendarGenerator = () => {
  const now = new Date();
  const [month, setMonth] = useState(now.getMonth());
  const [year, setYear] = useState(now.getFullYear());

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const monthName = new Date(year, month).toLocaleString("default", { month: "long" });
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDay }, (_, i) => i);

  return (
    <ToolLayout title="Calendar Generator" description="Generate printable calendar views for any month and year.">
      <div className="space-y-4 max-w-lg">
        <div className="flex gap-4">
          <div className="flex-1">
            <Label>Month</Label>
            <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm" value={month} onChange={e => setMonth(parseInt(e.target.value))}>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i} value={i}>{new Date(2000, i).toLocaleString("default", { month: "long" })}</option>
              ))}
            </select>
          </div>
          <div className="w-24">
            <Label>Year</Label>
            <input type="number" className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm" value={year} onChange={e => setYear(parseInt(e.target.value))} />
          </div>
        </div>
        <div className="rounded-lg border border-border overflow-hidden">
          <div className="bg-primary text-primary-foreground text-center py-3 font-bold text-lg">{monthName} {year}</div>
          <div className="grid grid-cols-7 text-center text-sm">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(d => (
              <div key={d} className="py-2 font-semibold bg-secondary text-secondary-foreground">{d}</div>
            ))}
            {blanks.map(i => <div key={`b${i}`} className="py-3" />)}
            {days.map(d => (
              <div key={d} className={`py-3 hover:bg-accent transition-colors ${d === now.getDate() && month === now.getMonth() && year === now.getFullYear() ? "bg-primary/10 font-bold text-primary" : ""}`}>
                {d}
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToolLayout>
  );
};

export default CalendarGenerator;
