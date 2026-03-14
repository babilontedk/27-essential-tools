import { useState } from "react";
import { ToolLayout, CopyButton } from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const loremWords = "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum".split(" ");

const LoremIpsumGenerator = () => {
  const [paragraphs, setParagraphs] = useState(3);
  const [output, setOutput] = useState("");

  const generate = () => {
    const result: string[] = [];
    for (let p = 0; p < paragraphs; p++) {
      const sentenceCount = 4 + Math.floor(Math.random() * 4);
      const sentences: string[] = [];
      for (let s = 0; s < sentenceCount; s++) {
        const wordCount = 8 + Math.floor(Math.random() * 12);
        const words: string[] = [];
        for (let w = 0; w < wordCount; w++) {
          words.push(loremWords[Math.floor(Math.random() * loremWords.length)]);
        }
        words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
        sentences.push(words.join(" ") + ".");
      }
      result.push(sentences.join(" "));
    }
    setOutput(result.join("\n\n"));
  };

  return (
    <ToolLayout title="Lorem Ipsum Generator" description="Generate placeholder text for design and development.">
      <div className="space-y-4 max-w-lg">
        <div>
          <Label>Paragraphs: {paragraphs}</Label>
          <input type="range" min="1" max="10" value={paragraphs} onChange={e => setParagraphs(parseInt(e.target.value))} className="w-full accent-primary" />
        </div>
        <Button onClick={generate} className="w-full">Generate Lorem Ipsum</Button>
        {output && (
          <div className="relative">
            <div className="absolute top-2 right-2"><CopyButton text={output} /></div>
            <pre className="p-4 rounded-lg bg-accent text-sm whitespace-pre-wrap max-h-96 overflow-auto">{output}</pre>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default LoremIpsumGenerator;
