import { useState } from "react";
import { ToolLayout } from "@/components/ToolLayout";
import { Label } from "@/components/ui/label";

const WordCounter = () => {
  const [text, setText] = useState("");

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpace = text.replace(/\s/g, "").length;
  const sentences = text.trim() ? text.split(/[.!?]+/).filter(s => s.trim()).length : 0;
  const paragraphs = text.trim() ? text.split(/\n\n+/).filter(p => p.trim()).length : 0;

  return (
    <ToolLayout title="Word Counter" description="Count words, characters, sentences, and paragraphs in text.">
      <div className="space-y-4">
        <div>
          <Label>Enter text</Label>
          <textarea className="w-full min-h-[200px] rounded-md border border-input bg-background px-3 py-2 text-sm" value={text} onChange={e => setText(e.target.value)} placeholder="Type or paste your text here..." />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { label: "Words", value: words },
            { label: "Characters", value: chars },
            { label: "No Spaces", value: charsNoSpace },
            { label: "Sentences", value: sentences },
            { label: "Paragraphs", value: paragraphs },
          ].map(stat => (
            <div key={stat.label} className="p-3 rounded-lg bg-accent text-center">
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </ToolLayout>
  );
};

export default WordCounter;
