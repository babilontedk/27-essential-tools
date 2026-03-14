import { useState, useRef } from "react";
import { ToolLayout } from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ImageResizer = () => {
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [fileName, setFileName] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [keepRatio, setKeepRatio] = useState(true);
  const [originalRatio, setOriginalRatio] = useState(1);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    const img = new window.Image();
    img.onload = () => {
      setImage(img);
      setWidth(String(img.width));
      setHeight(String(img.height));
      setOriginalRatio(img.width / img.height);
    };
    img.src = URL.createObjectURL(file);
  };

  const updateWidth = (w: string) => {
    setWidth(w);
    if (keepRatio && w) setHeight(String(Math.round(parseInt(w) / originalRatio)));
  };

  const updateHeight = (h: string) => {
    setHeight(h);
    if (keepRatio && h) setWidth(String(Math.round(parseInt(h) * originalRatio)));
  };

  const resize = () => {
    if (!image || !canvasRef.current) return;
    const canvas = canvasRef.current;
    canvas.width = parseInt(width);
    canvas.height = parseInt(height);
    const ctx = canvas.getContext("2d")!;
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  };

  const download = () => {
    if (!canvasRef.current) return;
    const a = document.createElement("a");
    a.download = `resized-${fileName}`;
    a.href = canvasRef.current.toDataURL("image/png");
    a.click();
  };

  return (
    <ToolLayout title="Image Resizer" description="Resize images to any dimension right in your browser.">
      <div className="space-y-4 max-w-lg">
        <div><Label>Upload Image</Label><Input type="file" accept="image/*" onChange={handleFile} /></div>
        {image && (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div><Label>Width (px)</Label><Input type="number" value={width} onChange={e => updateWidth(e.target.value)} /></div>
              <div><Label>Height (px)</Label><Input type="number" value={height} onChange={e => updateHeight(e.target.value)} /></div>
            </div>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={keepRatio} onChange={e => setKeepRatio(e.target.checked)} className="accent-primary" />
              Keep aspect ratio
            </label>
            <div className="flex gap-2">
              <Button onClick={resize} className="flex-1">Resize</Button>
              <Button variant="outline" onClick={download}>Download</Button>
            </div>
          </>
        )}
        <canvas ref={canvasRef} className="max-w-full rounded-lg border border-border hidden" />
        {image && <canvas ref={canvasRef} className="max-w-full rounded-lg border border-border" />}
      </div>
    </ToolLayout>
  );
};

export default ImageResizer;
