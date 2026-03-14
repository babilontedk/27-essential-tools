import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { tools } from "@/data/tools";
import { ArrowRight, Zap, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredTools = tools.slice(0, 6);

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="text-center py-16 md:py-24">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tighter">
        Precision tools for the<br />
        <span className="text-primary">modern web.</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
        27 lightweight, privacy-first utilities for developers, designers, and students. No tracking. No lag. Just tools.
      </p>
      <div className="flex justify-center gap-4">
        <Button asChild size="lg">
          <Link to="/tools">Browse All Tools <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link to="/about">Learn More</Link>
        </Button>
      </div>
    </section>

    {/* Features */}
    <section className="grid md:grid-cols-3 gap-6 mb-20">
      {[
        { icon: Zap, title: "Lightning Fast", desc: "Every tool runs instantly in your browser with zero server requests." },
        { icon: Shield, title: "100% Private", desc: "Your data never leaves your machine. No tracking, no storage, no cookies." },
        { icon: Globe, title: "Works Everywhere", desc: "Fully responsive design works perfectly on desktop, tablet, and mobile." },
      ].map(f => (
        <div key={f.title} className="tool-card text-center">
          <f.icon className="h-10 w-10 text-primary mx-auto mb-4" />
          <h3 className="font-bold text-lg mb-2">{f.title}</h3>
          <p className="text-sm text-muted-foreground">{f.desc}</p>
        </div>
      ))}
    </section>

    {/* Featured Tools */}
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Tools</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredTools.map(tool => (
          <Link key={tool.id} to={tool.path} className="tool-card group">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-accent">
                <tool.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{tool.name}</h3>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button asChild variant="outline">
          <Link to="/tools">View All 27 Tools <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </section>

    {/* CTA */}
    <section className="text-center py-16 rounded-2xl bg-accent mb-8">
      <h2 className="text-3xl font-bold mb-4">Ready to boost your productivity?</h2>
      <p className="text-muted-foreground mb-6">All 27 tools are completely free, private, and run in your browser.</p>
      <Button asChild size="lg">
        <Link to="/tools">Start Using Tools</Link>
      </Button>
    </section>
  </Layout>
);

export default Index;
