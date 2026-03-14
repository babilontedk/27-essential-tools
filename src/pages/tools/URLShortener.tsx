import { useState } from "react";
import { ToolLayout, CopyButton } from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const URLShortener = () => {
  const [url, setUrl] = useState("");
  const [shortened, setShortened] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const shorten = async () => {
    if (!url.trim()) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
      if (!res.ok) throw new Error("Failed to shorten URL");
      const text = await res.text();
      setShortened(text);
    } catch {
      setError("Failed to shorten URL. Please check the URL and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ToolLayout title="URL Shortener" description="Create shortened URLs using TinyURL integration.">
      <div className="space-y-4 max-w-md">
        <div>
          <Label>Enter URL</Label>
          <Input value={url} onChange={e => setUrl(e.target.value)} placeholder="https://example.com/very-long-url" />
        </div>
        <Button onClick={shorten} disabled={loading} className="w-full">{loading ? "Shortening..." : "Shorten URL"}</Button>
        {error && <p className="text-destructive text-sm">{error}</p>}
        {shortened && (
          <div className="flex items-center justify-between p-4 rounded-lg bg-accent">
            <a href={shortened} target="_blank" rel="noopener noreferrer" className="text-primary font-mono text-sm hover:underline">{shortened}</a>
            <CopyButton text={shortened} />
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default URLShortener;
