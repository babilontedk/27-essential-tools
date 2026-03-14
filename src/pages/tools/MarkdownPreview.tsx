import { useState } from "react";
import { marked } from "marked";
import { ToolLayout } from "@/components/ToolLayout";
import { Label } from "@/components/ui/label";

const defaultMd = `# Hello World

This is a **Markdown** preview tool.

- Item 1
- Item 2
- Item 3

\`\`\`js
console.log("Hello!");
\`\`\`

> Blockquote example
`;

const MarkdownPreview = () => {
  const [input, setInput] = useState(defaultMd);

  return (
    <ToolLayout title="Markdown Preview" description="Write Markdown and preview the rendered HTML in real-time.">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label>Markdown</Label>
          <textarea className="w-full min-h-[400px] rounded-md border border-input bg-background px-3 py-2 text-sm font-mono" value={input} onChange={e => setInput(e.target.value)} />
        </div>
        <div>
          <Label>Preview</Label>
          <div className="min-h-[400px] rounded-md border border-input bg-background px-4 py-3 prose prose-sm max-w-none dark:prose-invert overflow-auto" dangerouslySetInnerHTML={{ __html: marked(input) as string }} />
        </div>
      </div>
    </ToolLayout>
  );
};

export default MarkdownPreview;
