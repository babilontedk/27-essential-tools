import { useState } from "react";
import { ToolLayout, CopyButton } from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const JSONFormatter = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const format = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError("");
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Invalid JSON");
      setOutput("");
    }
  };

  return (
    <ToolLayout title="JSON Formatter" description="Format and beautify JSON data with proper indentation.">
      <div className="space-y-4">
        <div>
          <Label>Input JSON</Label>
          <textarea className="w-full min-h-[150px] rounded-md border border-input bg-background px-3 py-2 text-sm font-mono" value={input} onChange={e => setInput(e.target.value)} placeholder='{"key": "value"}' />
        </div>
        <Button onClick={format} className="w-full">Format JSON</Button>
        {error && <p className="text-destructive text-sm">{error}</p>}
        {output && (
          <div className="relative">
            <div className="absolute top-2 right-2"><CopyButton text={output} /></div>
            <pre className="p-4 rounded-lg bg-accent font-mono text-sm overflow-auto max-h-96">{output}</pre>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default JSONFormatter;
