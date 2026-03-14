import { useState, useEffect } from "react";
import { ToolLayout, CopyButton } from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";

const IPLookup = () => {
  const [data, setData] = useState<Record<string, string> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const lookup = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://ipapi.co/json/");
      if (!res.ok) throw new Error("Failed to fetch");
      const json = await res.json();
      setData({
        "IP Address": json.ip,
        "City": json.city,
        "Region": json.region,
        "Country": json.country_name,
        "Timezone": json.timezone,
        "ISP": json.org,
        "Latitude": String(json.latitude),
        "Longitude": String(json.longitude),
      });
    } catch {
      setError("Failed to fetch IP information. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { lookup(); }, []);

  return (
    <ToolLayout title="IP Lookup" description="Look up your public IP address and geolocation details.">
      <div className="space-y-4 max-w-md">
        <Button onClick={lookup} disabled={loading} className="w-full">{loading ? "Looking up..." : "Refresh IP Info"}</Button>
        {error && <p className="text-destructive text-sm">{error}</p>}
        {data && (
          <div className="space-y-2">
            {Object.entries(data).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between p-3 rounded-lg bg-accent">
                <span className="text-sm"><span className="text-muted-foreground">{key}:</span> <span className="font-mono font-medium">{value}</span></span>
                <CopyButton text={value} />
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default IPLookup;
