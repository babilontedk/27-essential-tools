import { useState } from "react";
import { ToolLayout, CopyButton } from "@/components/ToolLayout";
import { Label } from "@/components/ui/label";

const TextReverser = () => {
  const [input, setInput] = useState("");
  const reversed = input.split("").reverse().join("");

  return (
    <ToolLayout title="Text Reverser" description="Reverse any text string instantly in your browser.">
      <div className="space-y-4 max-w-lg">
        <div>
          <Label>Enter Text</Label>
          <textarea className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm" value={input} onChange={e => setInput(e.target.value)} placeholder="Type text to reverse..." />
        </div>
        {input && (
          <div className="relative">
            <div className="absolute top-2 right-2"><CopyButton text={reversed} /></div>
            <div className="p-4 rounded-lg bg-accent">
              <Label className="text-xs text-muted-foreground">Reversed</Label>
              <p className="font-mono text-sm break-all mt-1">{reversed}</p>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default TextReverser;
