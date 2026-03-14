import { useState } from "react";
import { ToolLayout } from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<{ bmi: number; category: string } | null>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (!w || !h || h <= 0) return;
    const bmi = w / Math.pow(h / 100, 2);
    let category = "Underweight";
    if (bmi >= 18.5 && bmi < 25) category = "Normal weight";
    else if (bmi >= 25 && bmi < 30) category = "Overweight";
    else if (bmi >= 30) category = "Obese";
    setResult({ bmi: Math.round(bmi * 10) / 10, category });
  };

  return (
    <ToolLayout title="BMI Calculator" description="Calculate your Body Mass Index based on weight and height.">
      <div className="space-y-4 max-w-md">
        <div>
          <Label>Weight (kg)</Label>
          <Input type="number" placeholder="e.g. 70" value={weight} onChange={e => setWeight(e.target.value)} />
        </div>
        <div>
          <Label>Height (cm)</Label>
          <Input type="number" placeholder="e.g. 175" value={height} onChange={e => setHeight(e.target.value)} />
        </div>
        <Button onClick={calculate} className="w-full">Calculate BMI</Button>
        {result && (
          <div className="p-4 rounded-lg bg-accent">
            <p className="text-2xl font-bold">{result.bmi}</p>
            <p className="text-muted-foreground">Category: <span className="font-semibold text-foreground">{result.category}</span></p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default BMICalculator;
