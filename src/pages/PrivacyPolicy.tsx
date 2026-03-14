import { Layout } from "@/components/Layout";

const PrivacyPolicy = () => (
  <Layout>
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: March 14, 2026</p>
      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-4">
        <h2 className="text-xl font-semibold">1. Introduction</h2>
        <p>Welcome to 27toolsspot ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website at 27toolsspot.com.</p>

        <h2 className="text-xl font-semibold">2. Information We Collect</h2>
        <p>27toolsspot is designed with privacy as a core principle. All tools run entirely in your browser, and we do not collect, store, or process any data you input into our tools.</p>
        <p><strong>Automatically Collected Information:</strong> When you visit our website, our web server and third-party services (such as Google AdSense) may automatically collect certain information, including your IP address, browser type, device type, pages visited, and referring URL. This information is used solely for analytics and ad serving purposes.</p>

        <h2 className="text-xl font-semibold">3. Cookies</h2>
        <p>We and our advertising partners (including Google AdSense) may use cookies and similar tracking technologies to serve personalized advertisements and analyze website traffic. You can manage cookie preferences through your browser settings. By continuing to use our website, you consent to the use of cookies as described in this policy.</p>

        <h2 className="text-xl font-semibold">4. Google AdSense</h2>
        <p>We use Google AdSense to display advertisements on our website. Google AdSense may use cookies and web beacons to serve ads based on your prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your browsing history. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-primary hover:underline">Google Ads Settings</a>.</p>

        <h2 className="text-xl font-semibold">5. Data Sharing</h2>
        <p>We do not sell, trade, or otherwise transfer your personal information to outside parties. We do not share any user data with third parties except as required by law or as necessary for the operation of Google AdSense advertising.</p>

        <h2 className="text-xl font-semibold">6. Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your information. Since all tools operate client-side in your browser, your input data is never transmitted to our servers.</p>

        <h2 className="text-xl font-semibold">7. Your Rights (GDPR/CCPA)</h2>
        <p>If you are a resident of the European Economic Area (EEA) or California, you have certain data protection rights:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>The right to access, update, or delete your personal information</li>
          <li>The right to object to or restrict processing of your personal information</li>
          <li>The right to data portability</li>
          <li>The right to withdraw consent at any time</li>
          <li>California residents have the right to know what personal information is collected and to request deletion</li>
        </ul>

        <h2 className="text-xl font-semibold">8. Children's Privacy</h2>
        <p>Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.</p>

        <h2 className="text-xl font-semibold">9. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>

        <h2 className="text-xl font-semibold">10. Contact Us</h2>
        <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:contact@27toolsspot.com" className="text-primary hover:underline">contact@27toolsspot.com</a>.</p>
      </div>
    </div>
  </Layout>
);

export default PrivacyPolicy;
