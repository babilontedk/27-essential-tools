import { useState } from "react";
import { ToolLayout } from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type UnitType = "length" | "weight" | "temperature";

const conversions: Record<UnitType, Record<string, number>> = {
  length: { Meter: 1, Kilometer: 1000, Centimeter: 0.01, Millimeter: 0.001, Mile: 1609.34, Yard: 0.9144, Foot: 0.3048, Inch: 0.0254 },
  weight: { Kilogram: 1, Gram: 0.001, Milligram: 0.000001, Pound: 0.453592, Ounce: 0.0283495, Ton: 1000 },
  temperature: {},
};

const convertTemp = (val: number, from: string, to: string): number => {
  let celsius = val;
  if (from === "Fahrenheit") celsius = (val - 32) * 5/9;
  else if (from === "Kelvin") celsius = val - 273.15;
  if (to === "Fahrenheit") return celsius * 9/5 + 32;
  if (to === "Kelvin") return celsius + 273.15;
  return celsius;
};

const tempUnits = ["Celsius", "Fahrenheit", "Kelvin"];

const UnitConverter = () => {
  const [type, setType] = useState<UnitType>("length");
  const [value, setValue] = useState("1");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const units = type === "temperature" ? tempUnits : Object.keys(conversions[type]);

  const getResult = () => {
    const v = parseFloat(value);
    if (isNaN(v) || !from || !to) return "";
    if (type === "temperature") return convertTemp(v, from, to).toFixed(4);
    const inBase = v * conversions[type][from];
    return (inBase / conversions[type][to]).toFixed(6);
  };

  return (
    <ToolLayout title="Unit Converter" description="Convert between units of length, weight, and temperature.">
      <div className="space-y-4 max-w-md">
        <div className="flex gap-2">
          {(["length", "weight", "temperature"] as UnitType[]).map(t => (
            <button key={t} onClick={() => { setType(t); setFrom(""); setTo(""); }} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${type === t ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
        <div>
          <Label>Value</Label>
          <Input type="number" value={value} onChange={e => setValue(e.target.value)} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>From</Label>
            <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm" value={from} onChange={e => setFrom(e.target.value)}>
              <option value="">Select</option>
              {units.map(u => <option key={u} value={u}>{u}</option>)}
            </select>
          </div>
          <div>
            <Label>To</Label>
            <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm" value={to} onChange={e => setTo(e.target.value)}>
              <option value="">Select</option>
              {units.map(u => <option key={u} value={u}>{u}</option>)}
            </select>
          </div>
        </div>
        {from && to && value && (
          <div className="p-4 rounded-lg bg-accent">
            <p className="text-2xl font-bold font-mono">{getResult()}</p>
            <p className="text-sm text-muted-foreground">{value} {from} = {getResult()} {to}</p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default UnitConverter;
