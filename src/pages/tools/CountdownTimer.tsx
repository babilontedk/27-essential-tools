import { useState, useEffect, useRef } from "react";
import { ToolLayout } from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CountdownTimer = () => {
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("5");
  const [seconds, setSeconds] = useState("0");
  const [remaining, setRemaining] = useState<number | null>(null);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = () => {
    const total = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
    if (total <= 0) return;
    setRemaining(total);
    setRunning(true);
  };

  const stop = () => {
    setRunning(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const reset = () => {
    stop();
    setRemaining(null);
  };

  useEffect(() => {
    if (running && remaining !== null && remaining > 0) {
      intervalRef.current = setInterval(() => {
        setRemaining(prev => {
          if (prev !== null && prev <= 1) {
            setRunning(false);
            return 0;
          }
          return prev !== null ? prev - 1 : null;
        });
      }, 1000);
      return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }
  }, [running, remaining]);

  const formatTime = (s: number) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  return (
    <ToolLayout title="Countdown Timer" description="Set a countdown timer for any duration with alerts.">
      <div className="space-y-4 max-w-md">
        {remaining === null ? (
          <div className="grid grid-cols-3 gap-4">
            <div><Label>Hours</Label><Input type="number" min="0" value={hours} onChange={e => setHours(e.target.value)} /></div>
            <div><Label>Minutes</Label><Input type="number" min="0" max="59" value={minutes} onChange={e => setMinutes(e.target.value)} /></div>
            <div><Label>Seconds</Label><Input type="number" min="0" max="59" value={seconds} onChange={e => setSeconds(e.target.value)} /></div>
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-6xl font-bold font-mono">{formatTime(remaining)}</p>
            {remaining === 0 && <p className="text-lg mt-4 text-primary font-semibold">Time is up!</p>}
          </div>
        )}
        <div className="flex gap-2">
          {remaining === null ? (
            <Button onClick={start} className="flex-1">Start</Button>
          ) : (
            <>
              <Button onClick={running ? stop : () => setRunning(true)} className="flex-1">{running ? "Pause" : "Resume"}</Button>
              <Button variant="outline" onClick={reset}>Reset</Button>
            </>
          )}
        </div>
      </div>
    </ToolLayout>
  );
};

export default CountdownTimer;
