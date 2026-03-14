import { useState } from "react";
import { ToolLayout } from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const JSONValidator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<{ valid: boolean; message: string } | null>(null);

  const validate = () => {
    try {
      JSON.parse(input);
      setResult({ valid: true, message: "Valid JSON!" });
    } catch (e: unknown) {
      setResult({ valid: false, message: e instanceof Error ? e.message : "Invalid JSON" });
    }
  };

  return (
    <ToolLayout title="JSON Validator" description="Validate JSON data and get detailed error messages.">
      <div className="space-y-4">
        <div>
          <Label>Enter JSON</Label>
          <textarea className="w-full min-h-[200px] rounded-md border border-input bg-background px-3 py-2 text-sm font-mono" value={input} onChange={e => setInput(e.target.value)} placeholder='{"key": "value"}' />
        </div>
        <Button onClick={validate} className="w-full">Validate JSON</Button>
        {result && (
          <div className={`p-4 rounded-lg ${result.valid ? "bg-green-500/10 text-green-700 dark:text-green-400" : "bg-destructive/10 text-destructive"}`}>
            <p className="font-semibold">{result.valid ? "✓ " : "✗ "}{result.message}</p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default JSONValidator;
