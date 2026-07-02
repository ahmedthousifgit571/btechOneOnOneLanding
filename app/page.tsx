import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MetricsBand from "@/components/MetricsBand";
import JourneyStepper from "@/components/JourneyStepper";
import PricingPlans from "@/components/PricingPlans";
import FeatureGrid from "@/components/FeatureGrid";
import Testimonials from "@/components/Testimonials";
import ParentsBanner from "@/components/ParentsBanner";
import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="relative overflow-x-clip bg-ink">
      <Navbar />
      <Hero />
      <MetricsBand />
      <JourneyStepper />
      <PricingPlans />
      <FeatureGrid />
      <Testimonials />
      <ParentsBanner />
      <FAQAccordion />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
