import { useState } from "react";
import { ToolLayout } from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoanCalculator = () => {
  const [principal, setPrincipal] = useState("100000");
  const [rate, setRate] = useState("5");
  const [years, setYears] = useState("30");
  const [result, setResult] = useState<{ monthly: number; totalInterest: number; totalPayment: number } | null>(null);

  const calculate = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(years) * 12;
    if (!P || !r || !n) return;
    const monthly = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = monthly * n;
    setResult({ monthly: Math.round(monthly * 100) / 100, totalInterest: Math.round((totalPayment - P) * 100) / 100, totalPayment: Math.round(totalPayment * 100) / 100 });
  };

  return (
    <ToolLayout title="Loan Calculator" description="Calculate monthly payments, total interest, and amortization.">
      <div className="space-y-4 max-w-md">
        <div><Label>Loan Amount ($)</Label><Input type="number" value={principal} onChange={e => setPrincipal(e.target.value)} /></div>
        <div><Label>Annual Interest Rate (%)</Label><Input type="number" step="0.1" value={rate} onChange={e => setRate(e.target.value)} /></div>
        <div><Label>Loan Term (years)</Label><Input type="number" value={years} onChange={e => setYears(e.target.value)} /></div>
        <Button onClick={calculate} className="w-full">Calculate</Button>
        {result && (
          <div className="space-y-2">
            {[
              { label: "Monthly Payment", value: `$${result.monthly.toLocaleString()}` },
              { label: "Total Interest", value: `$${result.totalInterest.toLocaleString()}` },
              { label: "Total Payment", value: `$${result.totalPayment.toLocaleString()}` },
            ].map(item => (
              <div key={item.label} className="flex justify-between p-3 rounded-lg bg-accent">
                <span className="text-muted-foreground">{item.label}</span>
                <span className="font-bold font-mono">{item.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default LoanCalculator;
