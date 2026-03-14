import { Layout } from "@/components/Layout";

const Terms = () => (
  <Layout>
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: March 14, 2026</p>
      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-4">
        <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
        <p>By accessing and using 27toolsspot.com ("the Website"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Website.</p>

        <h2 className="text-xl font-semibold">2. Description of Service</h2>
        <p>27toolsspot provides a collection of 27 free, browser-based web utilities including calculators, converters, generators, and other productivity tools. All tools operate entirely within your web browser.</p>

        <h2 className="text-xl font-semibold">3. Use of the Service</h2>
        <p>You agree to use the Website and its tools only for lawful purposes. You may not use the Website in any way that could damage, disable, overburden, or impair the Website or interfere with any other party's use of the Website.</p>

        <h2 className="text-xl font-semibold">4. Intellectual Property</h2>
        <p>All content on the Website, including but not limited to text, graphics, logos, and software, is the property of 27toolsspot and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without prior written consent.</p>

        <h2 className="text-xl font-semibold">5. Disclaimer of Warranties</h2>
        <p>The Website and its tools are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that the tools will be error-free, accurate, or uninterrupted. Use of the tools is at your own risk.</p>

        <h2 className="text-xl font-semibold">6. Limitation of Liability</h2>
        <p>In no event shall 27toolsspot be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Website or its tools.</p>

        <h2 className="text-xl font-semibold">7. Third-Party Advertising</h2>
        <p>The Website displays advertisements served by third-party advertising networks, including Google AdSense. These third parties may use cookies and similar technologies to serve ads. We are not responsible for the content or privacy practices of these third-party advertisers.</p>

        <h2 className="text-xl font-semibold">8. External Links</h2>
        <p>The Website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of these external sites.</p>

        <h2 className="text-xl font-semibold">9. Modifications</h2>
        <p>We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the Website. Continued use of the Website after changes constitutes acceptance of the modified terms.</p>

        <h2 className="text-xl font-semibold">10. Governing Law</h2>
        <p>These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.</p>

        <h2 className="text-xl font-semibold">11. Contact</h2>
        <p>For questions about these Terms of Service, contact us at <a href="mailto:contact@27toolsspot.com" className="text-primary hover:underline">contact@27toolsspot.com</a>.</p>
      </div>
    </div>
  </Layout>
);

export default Terms;
