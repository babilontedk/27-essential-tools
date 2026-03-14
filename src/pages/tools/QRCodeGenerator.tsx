import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { ToolLayout } from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const QRCodeGenerator = () => {
  const [value, setValue] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = () => {
    if (value.trim()) setGenerated(value.trim());
  };

  const download = () => {
    const svg = document.querySelector("#qr-code svg") as SVGSVGElement;
    if (!svg) return;
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext("2d")!;
    const data = new XMLSerializer().serializeToString(svg);
    const img = new window.Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      const a = document.createElement("a");
      a.download = "qrcode.png";
      a.href = canvas.toDataURL("image/png");
      a.click();
    };
    img.src = "data:image/svg+xml;base64," + btoa(data);
  };

  return (
    <ToolLayout title="QR Code Generator" description="Generate QR codes for URLs, text, or contact information.">
      <div className="space-y-4 max-w-md">
        <div>
          <Label>URL or Text</Label>
          <Input value={value} onChange={e => setValue(e.target.value)} placeholder="https://example.com" />
        </div>
        <Button onClick={generate} className="w-full">Generate QR Code</Button>
        {generated && (
          <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-accent">
            <div id="qr-code" className="bg-card p-4 rounded-lg">
              <QRCodeSVG value={generated} size={200} />
            </div>
            <Button variant="outline" onClick={download}>Download PNG</Button>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default QRCodeGenerator;
