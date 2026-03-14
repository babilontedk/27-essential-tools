import { useState } from "react";
import { ToolLayout, CopyButton } from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const BinaryDecimalConverter = () => {
  const [binary, setBinary] = useState("");
  const [decimal, setDecimal] = useState("");

  const binaryToDecimal = (b: string) => {
    if (!/^[01]+$/.test(b)) return;
    setBinary(b);
    setDecimal(String(parseInt(b, 2)));
  };

  const decimalToBinary = (d: string) => {
    const num = parseInt(d);
    if (isNaN(num) || num < 0) return;
    setDecimal(d);
    setBinary(num.toString(2));
  };

  return (
    <ToolLayout title="Binary to Decimal Converter" description="Convert between binary and decimal number systems.">
      <div className="space-y-4 max-w-md">
        <div>
          <Label>Binary</Label>
          <div className="flex gap-2">
            <Input className="font-mono" value={binary} onChange={e => binaryToDecimal(e.target.value)} placeholder="e.g. 10110" />
            <CopyButton text={binary} />
          </div>
        </div>
        <div>
          <Label>Decimal</Label>
          <div className="flex gap-2">
            <Input className="font-mono" type="number" value={decimal} onChange={e => decimalToBinary(e.target.value)} placeholder="e.g. 22" />
            <CopyButton text={decimal} />
          </div>
        </div>
      </div>
    </ToolLayout>
  );
};

export default BinaryDecimalConverter;
