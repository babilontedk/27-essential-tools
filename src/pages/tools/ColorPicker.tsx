import { useState } from "react";
import { ToolLayout, CopyButton } from "@/components/ToolLayout";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const hexToRgb = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
};

const rgbToHsl = (r: number, g: number, b: number) => {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
    else if (max === g) h = ((b - r) / d + 2) / 6;
    else h = ((r - g) / d + 4) / 6;
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
};

const ColorPicker = () => {
  const [color, setColor] = useState("#6366f1");
  const rgb = hexToRgb(color);
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

  const formats = [
    { label: "HEX", value: color },
    { label: "RGB", value: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` },
    { label: "HSL", value: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)` },
  ];

  return (
    <ToolLayout title="Color Picker" description="Pick colors and convert between HEX, RGB, and HSL formats.">
      <div className="space-y-4 max-w-md">
        <div>
          <Label>Pick a Color</Label>
          <div className="flex gap-3 items-center">
            <input type="color" value={color} onChange={e => setColor(e.target.value)} className="w-16 h-16 rounded-lg cursor-pointer border-0" />
            <Input value={color} onChange={e => setColor(e.target.value)} className="font-mono" />
          </div>
        </div>
        <div className="w-full h-24 rounded-lg border border-border" style={{ backgroundColor: color }} />
        <div className="space-y-2">
          {formats.map(f => (
            <div key={f.label} className="flex items-center justify-between p-3 rounded-lg bg-accent">
              <span className="text-sm font-medium">{f.label}: <span className="font-mono">{f.value}</span></span>
              <CopyButton text={f.value} />
            </div>
          ))}
        </div>
      </div>
    </ToolLayout>
  );
};

export default ColorPicker;
