import { Layout } from "@/components/Layout";

const About = () => (
  <Layout>
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About 27toolsspot</h1>
      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-4">
        <p>
          27toolsspot is a collection of 27 free, lightweight web utilities built for developers, designers, students, and anyone who needs quick access to reliable tools without the hassle of installing software or signing up for accounts.
        </p>
        <h2 className="text-xl font-semibold mt-8">Our Mission</h2>
        <p>
          We believe tools should be fast, accessible, and private. Every tool on 27toolsspot runs entirely in your browser, meaning your data never leaves your machine. There are no accounts to create, no data to upload, and no tracking scripts watching what you do.
        </p>
        <h2 className="text-xl font-semibold mt-8">Why 27toolsspot?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Privacy First:</strong> All processing happens client-side. Your data stays on your device.</li>
          <li><strong>No Sign-ups:</strong> Use any tool instantly without creating an account.</li>
          <li><strong>Lightning Fast:</strong> Minimal dependencies mean tools load and run in milliseconds.</li>
          <li><strong>Mobile Friendly:</strong> Every tool is fully responsive and works on any device.</li>
          <li><strong>Always Free:</strong> All 27 tools are completely free to use, forever.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8">Our Tools</h2>
        <p>
          From BMI calculators and currency converters to JSON formatters and password generators, our curated collection covers everyday needs for productivity, development, and creativity. Each tool is carefully crafted to be intuitive, accurate, and reliable.
        </p>
        <h2 className="text-xl font-semibold mt-8">Built with Modern Technology</h2>
        <p>
          27toolsspot is built using React, TypeScript, and Tailwind CSS, ensuring a fast, accessible, and maintainable codebase. We prioritize performance and user experience in every decision we make.
        </p>
      </div>
    </div>
  </Layout>
);

export default About;
