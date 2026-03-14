import { useState } from "react";
import { ToolLayout } from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const currencies: Record<string, number> = {
  USD: 1, EUR: 0.92, GBP: 0.79, JPY: 149.5, AUD: 1.53, CAD: 1.36, CHF: 0.88,
  CNY: 7.24, INR: 83.1, MXN: 17.15, BRL: 4.97, KRW: 1320, SGD: 1.34,
  HKD: 7.82, NOK: 10.5, SEK: 10.3, DKK: 6.87, NZD: 1.63, ZAR: 18.7,
  RUB: 91.5, TRY: 30.2, AED: 3.67, SAR: 3.75, PHP: 55.8, THB: 35.2,
};

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("1");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [result, setResult] = useState<number | null>(null);

  const convert = () => {
    const a = parseFloat(amount);
    if (!a) return;
    const inUSD = a / currencies[from];
    setResult(Math.round(inUSD * currencies[to] * 100) / 100);
  };

  return (
    <ToolLayout title="Currency Converter" description="Convert between world currencies with exchange rates.">
      <div className="space-y-4 max-w-md">
        <div>
          <Label>Amount</Label>
          <Input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>From</Label>
            <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm" value={from} onChange={e => setFrom(e.target.value)}>
              {Object.keys(currencies).map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <Label>To</Label>
            <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm" value={to} onChange={e => setTo(e.target.value)}>
              {Object.keys(currencies).map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>
        <Button onClick={convert} className="w-full">Convert</Button>
        {result !== null && (
          <div className="p-4 rounded-lg bg-accent">
            <p className="text-2xl font-bold font-mono">{amount} {from} = {result} {to}</p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default CurrencyConverter;
