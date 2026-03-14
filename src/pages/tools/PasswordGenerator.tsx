import { useState } from "react";
import { ToolLayout, CopyButton } from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const PasswordGenerator = () => {
  const [length, setLength] = useState(16);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const generate = () => {
    let charset = "abcdefghijklmnopqrstuvwxyz";
    if (includeUpper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";
    let result = "";
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);
    for (let i = 0; i < length; i++) {
      result += charset[array[i] % charset.length];
    }
    setPassword(result);
  };

  return (
    <ToolLayout title="Password Generator" description="Create strong, secure passwords with customizable options.">
      <div className="space-y-4 max-w-md">
        <div>
          <Label>Length: {length}</Label>
          <input type="range" min="8" max="64" value={length} onChange={e => setLength(parseInt(e.target.value))} className="w-full accent-primary" />
        </div>
        <div className="space-y-2">
          {[
            { label: "Uppercase", checked: includeUpper, set: setIncludeUpper },
            { label: "Numbers", checked: includeNumbers, set: setIncludeNumbers },
            { label: "Symbols", checked: includeSymbols, set: setIncludeSymbols },
          ].map(opt => (
            <label key={opt.label} className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={opt.checked} onChange={e => opt.set(e.target.checked)} className="accent-primary" />
              {opt.label}
            </label>
          ))}
        </div>
        <Button onClick={generate} className="w-full">Generate Password</Button>
        {password && (
          <div className="flex items-center justify-between p-4 rounded-lg bg-accent font-mono text-sm break-all">
            <span>{password}</span>
            <CopyButton text={password} />
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default PasswordGenerator;
