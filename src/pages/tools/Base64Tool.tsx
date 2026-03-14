import { useState } from "react";
import { ToolLayout, CopyButton } from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const Base64Tool = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");

  const process = () => {
    try {
      if (mode === "encode") {
        setOutput(btoa(unescape(encodeURIComponent(input))));
      } else {
        setOutput(decodeURIComponent(escape(atob(input))));
      }
    } catch {
      setOutput("Error: Invalid input for " + mode + " operation.");
    }
  };

  return (
    <ToolLayout title="Base64 Encoder/Decoder" description="Encode and decode text to and from Base64 format.">
      <div className="space-y-4">
        <div className="flex gap-2">
          <button onClick={() => setMode("encode")} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${mode === "encode" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>Encode</button>
          <button onClick={() => setMode("decode")} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${mode === "decode" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>Decode</button>
        </div>
        <div>
          <Label>Input</Label>
          <textarea className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm font-mono" value={input} onChange={e => setInput(e.target.value)} placeholder={mode === "encode" ? "Text to encode..." : "Base64 to decode..."} />
        </div>
        <Button onClick={process} className="w-full">{mode === "encode" ? "Encode" : "Decode"}</Button>
        {output && (
          <div className="relative">
            <div className="absolute top-2 right-2"><CopyButton text={output} /></div>
            <pre className="p-4 rounded-lg bg-accent font-mono text-sm break-all overflow-auto max-h-64">{output}</pre>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default Base64Tool;
