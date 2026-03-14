import { useState } from "react";
import { ToolLayout } from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const TextToSpeech = () => {
  const [text, setText] = useState("");
  const [speaking, setSpeaking] = useState(false);

  const speak = () => {
    if (!text.trim()) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
  };

  return (
    <ToolLayout title="Text to Speech" description="Convert text to natural-sounding speech in your browser.">
      <div className="space-y-4 max-w-lg">
        <div>
          <Label>Enter text</Label>
          <textarea className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm" value={text} onChange={e => setText(e.target.value)} placeholder="Type or paste text here..." />
        </div>
        <div className="flex gap-2">
          <Button onClick={speak} disabled={speaking} className="flex-1">{speaking ? "Speaking..." : "Speak"}</Button>
          <Button variant="outline" onClick={stop} disabled={!speaking}>Stop</Button>
        </div>
      </div>
    </ToolLayout>
  );
};

export default TextToSpeech;
