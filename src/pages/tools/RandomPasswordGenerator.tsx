import { useState } from "react";
import { ToolLayout, CopyButton } from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const RandomPasswordGenerator = () => {
  const [length, setLength] = useState(20);
  const [passwords, setPasswords] = useState<string[]>([]);

  const generate = () => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?~`";
    const results: string[] = [];
    for (let j = 0; j < 5; j++) {
      let pass = "";
      const array = new Uint32Array(length);
      crypto.getRandomValues(array);
      for (let i = 0; i < length; i++) {
        pass += charset[array[i] % charset.length];
      }
      results.push(pass);
    }
    setPasswords(results);
  };

  return (
    <ToolLayout title="Random Password Generator" description="Generate cryptographically random passwords with symbols.">
      <div className="space-y-4 max-w-lg">
        <div>
          <Label>Length: {length}</Label>
          <input type="range" min="8" max="64" value={length} onChange={e => setLength(parseInt(e.target.value))} className="w-full accent-primary" />
        </div>
        <Button onClick={generate} className="w-full">Generate 5 Passwords</Button>
        {passwords.length > 0 && (
          <div className="space-y-2">
            {passwords.map((p, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-accent font-mono text-xs break-all">
                <span>{p}</span>
                <CopyButton text={p} />
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default RandomPasswordGenerator;
