import { useState } from "react";
import { ToolLayout } from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AgeCalculator = () => {
  const [dob, setDob] = useState("");
  const [result, setResult] = useState<{ years: number; months: number; days: number } | null>(null);

  const calculate = () => {
    if (!dob) return;
    const birth = new Date(dob);
    const now = new Date();
    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();
    if (days < 0) { months--; days += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); }
    if (months < 0) { years--; months += 12; }
    setResult({ years, months, days });
  };

  return (
    <ToolLayout title="Age Calculator" description="Calculate exact age in years, months, and days from birthdate.">
      <div className="space-y-4 max-w-md">
        <div>
          <Label>Date of Birth</Label>
          <Input type="date" value={dob} onChange={e => setDob(e.target.value)} />
        </div>
        <Button onClick={calculate} className="w-full">Calculate Age</Button>
        {result && (
          <div className="p-4 rounded-lg bg-accent">
            <p className="text-2xl font-bold">{result.years} years, {result.months} months, {result.days} days</p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default AgeCalculator;
