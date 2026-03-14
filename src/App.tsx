import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const ToolsPage = lazy(() => import("./pages/ToolsPage"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));

const BMICalculator = lazy(() => import("./pages/tools/BMICalculator"));
const CurrencyConverter = lazy(() => import("./pages/tools/CurrencyConverter"));
const RandomNameGenerator = lazy(() => import("./pages/tools/RandomNameGenerator"));
const PasswordGenerator = lazy(() => import("./pages/tools/PasswordGenerator"));
const TextToSpeech = lazy(() => import("./pages/tools/TextToSpeech"));
const QRCodeGenerator = lazy(() => import("./pages/tools/QRCodeGenerator"));
const JSONFormatter = lazy(() => import("./pages/tools/JSONFormatter"));
const UnitConverter = lazy(() => import("./pages/tools/UnitConverter"));
const ColorPicker = lazy(() => import("./pages/tools/ColorPicker"));
const AgeCalculator = lazy(() => import("./pages/tools/AgeCalculator"));
const CountdownTimer = lazy(() => import("./pages/tools/CountdownTimer"));
const URLShortener = lazy(() => import("./pages/tools/URLShortener"));
const WordCounter = lazy(() => import("./pages/tools/WordCounter"));
const LoanCalculator = lazy(() => import("./pages/tools/LoanCalculator"));
const CalendarGenerator = lazy(() => import("./pages/tools/CalendarGenerator"));
const ImageResizer = lazy(() => import("./pages/tools/ImageResizer"));
const HTMLMinifier = lazy(() => import("./pages/tools/HTMLMinifier"));
const IPLookup = lazy(() => import("./pages/tools/IPLookup"));
const MarkdownPreview = lazy(() => import("./pages/tools/MarkdownPreview"));
const PasswordStrengthChecker = lazy(() => import("./pages/tools/PasswordStrengthChecker"));
const RandomPasswordGenerator = lazy(() => import("./pages/tools/RandomPasswordGenerator"));
const LoremIpsumGenerator = lazy(() => import("./pages/tools/LoremIpsumGenerator"));
const TimezoneConverter = lazy(() => import("./pages/tools/TimezoneConverter"));
const BinaryDecimalConverter = lazy(() => import("./pages/tools/BinaryDecimalConverter"));
const JSONValidator = lazy(() => import("./pages/tools/JSONValidator"));
const Base64Tool = lazy(() => import("./pages/tools/Base64Tool"));
const TextReverser = lazy(() => import("./pages/tools/TextReverser"));

const queryClient = new QueryClient();

const Loading = () => (
  <div className="flex min-h-screen items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
  </div>
);

import { Layout } from "@/components/Layout";

const ToolPage = ({ Component }: { Component: React.LazyExoticComponent<() => JSX.Element> }) => (
  <Suspense fallback={<Loading />}>
    <Layout>
      <Component />
    </Layout>
  </Suspense>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/tools/bmi" element={<ToolPage Component={BMICalculator} />} />
            <Route path="/tools/currency" element={<ToolPage Component={CurrencyConverter} />} />
            <Route path="/tools/random-name" element={<ToolPage Component={RandomNameGenerator} />} />
            <Route path="/tools/password-gen" element={<ToolPage Component={PasswordGenerator} />} />
            <Route path="/tools/text-to-speech" element={<ToolPage Component={TextToSpeech} />} />
            <Route path="/tools/qr-code" element={<ToolPage Component={QRCodeGenerator} />} />
            <Route path="/tools/json-formatter" element={<ToolPage Component={JSONFormatter} />} />
            <Route path="/tools/unit-converter" element={<ToolPage Component={UnitConverter} />} />
            <Route path="/tools/color-picker" element={<ToolPage Component={ColorPicker} />} />
            <Route path="/tools/age-calculator" element={<ToolPage Component={AgeCalculator} />} />
            <Route path="/tools/countdown" element={<ToolPage Component={CountdownTimer} />} />
            <Route path="/tools/url-shortener" element={<ToolPage Component={URLShortener} />} />
            <Route path="/tools/word-counter" element={<ToolPage Component={WordCounter} />} />
            <Route path="/tools/loan-calculator" element={<ToolPage Component={LoanCalculator} />} />
            <Route path="/tools/calendar-gen" element={<ToolPage Component={CalendarGenerator} />} />
            <Route path="/tools/image-resizer" element={<ToolPage Component={ImageResizer} />} />
            <Route path="/tools/html-minifier" element={<ToolPage Component={HTMLMinifier} />} />
            <Route path="/tools/ip-lookup" element={<ToolPage Component={IPLookup} />} />
            <Route path="/tools/markdown-preview" element={<ToolPage Component={MarkdownPreview} />} />
            <Route path="/tools/password-strength" element={<ToolPage Component={PasswordStrengthChecker} />} />
            <Route path="/tools/random-password" element={<ToolPage Component={RandomPasswordGenerator} />} />
            <Route path="/tools/lorem-ipsum" element={<ToolPage Component={LoremIpsumGenerator} />} />
            <Route path="/tools/timezone" element={<ToolPage Component={TimezoneConverter} />} />
            <Route path="/tools/binary-decimal" element={<ToolPage Component={BinaryDecimalConverter} />} />
            <Route path="/tools/json-validator" element={<ToolPage Component={JSONValidator} />} />
            <Route path="/tools/base64" element={<ToolPage Component={Base64Tool} />} />
            <Route path="/tools/text-reverser" element={<ToolPage Component={TextReverser} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
