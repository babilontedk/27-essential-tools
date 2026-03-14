import { useState } from "react";
import { ToolLayout } from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState("");

  const getStrength = (p: string) => {
    if (!p) return { score: 0, label: "Enter a password", color: "bg-muted" };
    let score = 0;
    if (p.length >= 8) score++;
    if (p.length >= 12) score++;
    if (p.length >= 16) score++;
    if (/[a-z]/.test(p) && /[A-Z]/.test(p)) score++;
    if (/\d/.test(p)) score++;
    if (/[^a-zA-Z0-9]/.test(p)) score++;

    const charsetSize = (/[a-z]/.test(p) ? 26 : 0) + (/[A-Z]/.test(p) ? 26 : 0) + (/\d/.test(p) ? 10 : 0) + (/[^a-zA-Z0-9]/.test(p) ? 32 : 0);
    const entropy = Math.round(p.length * Math.log2(charsetSize || 1));

    if (score <= 2) return { score, label: "Weak", color: "bg-destructive", entropy };
    if (score <= 4) return { score, label: "Medium", color: "bg-yellow-500", entropy };
    return { score, label: "Strong", color: "bg-green-500", entropy };
  };

  const strength = getStrength(password);

  return (
    <ToolLayout title="Password Strength Checker" description="Check how strong your password is with entropy analysis.">
      <div className="space-y-4 max-w-md">
        <div>
          <Label>Enter Password</Label>
          <Input type="text" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password to check" />
        </div>
        {password && (
          <div className="space-y-3">
            <div className="h-3 rounded-full bg-muted overflow-hidden">
              <div className={`h-full rounded-full transition-all ${strength.color}`} style={{ width: `${Math.min((strength.score / 6) * 100, 100)}%` }} />
            </div>
            <div className="flex justify-between text-sm">
              <span className="font-semibold">{strength.label}</span>
              <span className="text-muted-foreground">Entropy: ~{strength.entropy} bits</span>
            </div>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>{password.length >= 12 ? "✓" : "✗"} At least 12 characters</p>
              <p>{/[A-Z]/.test(password) ? "✓" : "✗"} Uppercase letters</p>
              <p>{/[a-z]/.test(password) ? "✓" : "✗"} Lowercase letters</p>
              <p>{/\d/.test(password) ? "✓" : "✗"} Numbers</p>
              <p>{/[^a-zA-Z0-9]/.test(password) ? "✓" : "✗"} Special characters</p>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default PasswordStrengthChecker;
