import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "@/components/Hero";
import PrimaryTabs, { type PrimaryTab } from "@/components/PrimaryTabs";
import OverviewSection from "@/components/sections/OverviewSection";
import SkillsSection from "@/components/sections/SkillsSection";
import WorkSection from "@/components/sections/WorkSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ResumeSection from "@/components/sections/ResumeSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  const [activeTab, setActiveTab] = useState<PrimaryTab>("overview");

  const renderSection = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewSection />;
      case "skills":
        return <SkillsSection />;
      case "work":
        return <WorkSection />;
      case "services":
        return <ServicesSection />;
      case "resume":
        return <ResumeSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <OverviewSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Hero */}
      <Hero />

      {/* Primary Tabs Navigation */}
      <PrimaryTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Content Area */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-12">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2026 John Doe. All rights reserved.</p>
            <p>Built with precision and passion.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
