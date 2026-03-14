import { useState } from "react";
import { ToolLayout, CopyButton } from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const HTMLMinifier = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const minify = () => {
    const result = input
      .replace(/<!--[\s\S]*?-->/g, "")
      .replace(/\s+/g, " ")
      .replace(/>\s+</g, "><")
      .trim();
    setOutput(result);
  };

  const saved = input.length && output.length ? Math.round((1 - output.length / input.length) * 100) : 0;

  return (
    <ToolLayout title="HTML Minifier" description="Minify HTML code by removing whitespace and comments.">
      <div className="space-y-4">
        <div><Label>Input HTML</Label><textarea className="w-full min-h-[150px] rounded-md border border-input bg-background px-3 py-2 text-sm font-mono" value={input} onChange={e => setInput(e.target.value)} placeholder="<html>..." /></div>
        <Button onClick={minify} className="w-full">Minify HTML</Button>
        {output && (
          <>
            <p className="text-sm text-muted-foreground">Saved {saved}% ({input.length - output.length} characters)</p>
            <div className="relative">
              <div className="absolute top-2 right-2"><CopyButton text={output} /></div>
              <pre className="p-4 rounded-lg bg-accent font-mono text-sm overflow-auto max-h-64">{output}</pre>
            </div>
          </>
        )}
      </div>
    </ToolLayout>
  );
};

export default HTMLMinifier;
