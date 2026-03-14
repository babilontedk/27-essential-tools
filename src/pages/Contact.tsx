import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => { if (err.path[0]) fieldErrors[String(err.path[0])] = err.message; });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-muted-foreground mb-8">Have a question, suggestion, or feedback? We would love to hear from you.</p>
        <form onSubmit={handleSubmit} className="space-y-4 tool-card">
          <div>
            <Label>Name</Label>
            <Input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
            {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <Label>Email</Label>
            <Input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
            {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <Label>Message</Label>
            <textarea className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Your message..." />
            {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>You can also reach us at <a href="mailto:contact@27toolsspot.com" className="text-primary hover:underline">contact@27toolsspot.com</a></p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
