import { useState } from "react";
import { ToolLayout } from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const timezones = [
  "UTC", "America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles",
  "Europe/London", "Europe/Paris", "Europe/Berlin", "Europe/Moscow",
  "Asia/Tokyo", "Asia/Shanghai", "Asia/Kolkata", "Asia/Dubai",
  "Australia/Sydney", "Pacific/Auckland", "Africa/Cairo", "America/Sao_Paulo",
];

const TimezoneConverter = () => {
  const [fromTz, setFromTz] = useState("UTC");
  const [toTz, setToTz] = useState("America/New_York");
  const [datetime, setDatetime] = useState(new Date().toISOString().slice(0, 16));

  const convert = () => {
    try {
      const fromFormat = new Intl.DateTimeFormat("en-US", { timeZone: fromTz, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
      const toFormat = new Intl.DateTimeFormat("en-US", { timeZone: toTz, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
      const date = new Date(datetime);
      return { from: fromFormat.format(date), to: toFormat.format(date) };
    } catch {
      return null;
    }
  };

  const result = convert();

  return (
    <ToolLayout title="Timezone Converter" description="Convert time between different timezones worldwide.">
      <div className="space-y-4 max-w-md">
        <div><Label>Date & Time</Label><Input type="datetime-local" value={datetime} onChange={e => setDatetime(e.target.value)} /></div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>From</Label>
            <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm" value={fromTz} onChange={e => setFromTz(e.target.value)}>
              {timezones.map(tz => <option key={tz} value={tz}>{tz.replace(/_/g, " ")}</option>)}
            </select>
          </div>
          <div>
            <Label>To</Label>
            <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm" value={toTz} onChange={e => setToTz(e.target.value)}>
              {timezones.map(tz => <option key={tz} value={tz}>{tz.replace(/_/g, " ")}</option>)}
            </select>
          </div>
        </div>
        {result && (
          <div className="space-y-2">
            <div className="p-3 rounded-lg bg-accent"><span className="text-sm text-muted-foreground">{fromTz}:</span> <span className="font-mono font-medium">{result.from}</span></div>
            <div className="p-3 rounded-lg bg-primary/10"><span className="text-sm text-muted-foreground">{toTz}:</span> <span className="font-mono font-bold">{result.to}</span></div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default TimezoneConverter;
