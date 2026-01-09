import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SecondaryTabs from "../SecondaryTabs";
import { Lightbulb, Users, Briefcase, ArrowRight, Check } from "lucide-react";

const secondaryTabs = [
  { id: "consulting", label: "Consulting" },
  { id: "advisory", label: "Advisory" },
  { id: "fractional", label: "Contract / Fractional" },
];

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("consulting");

  return (
    <div>
      <SecondaryTabs tabs={secondaryTabs} activeTab={activeTab} onTabChange={setActiveTab} />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === "consulting" && <Consulting />}
          {activeTab === "advisory" && <Advisory />}
          {activeTab === "fractional" && <Fractional />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const ServiceCard = ({
  icon,
  title,
  audience,
  problem,
  format,
  features,
}: {
  icon: React.ReactNode;
  title: string;
  audience: string;
  problem: string;
  format: string;
  features: string[];
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="service-card"
  >
    <div className="flex items-start gap-4 mb-6">
      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-display text-2xl font-bold text-foreground">{title}</h3>
        <p className="text-accent text-sm font-medium">{audience}</p>
      </div>
    </div>

    <div className="space-y-4 mb-6">
      <div>
        <span className="text-muted-foreground text-sm font-medium block mb-1">Problem I Solve</span>
        <p className="text-foreground">{problem}</p>
      </div>
      <div>
        <span className="text-muted-foreground text-sm font-medium block mb-1">Engagement Format</span>
        <p className="text-foreground">{format}</p>
      </div>
    </div>

    <ul className="space-y-2 mb-6">
      {features.map((feature) => (
        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
          <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
          {feature}
        </li>
      ))}
    </ul>

    <button className="btn-hero-primary w-full">
      Get Started <ArrowRight className="w-4 h-4" />
    </button>
  </motion.div>
);

const Consulting = () => (
  <div className="grid md:grid-cols-2 gap-6">
    <ServiceCard
      icon={<Lightbulb className="w-7 h-7" />}
      title="Product Strategy Consulting"
      audience="Startups & Scale-ups"
      problem="You have a product idea but need help defining the roadmap, validating assumptions, and building a scalable strategy."
      format="4-8 week engagements with weekly working sessions"
      features={[
        "Market & competitive analysis",
        "Product roadmap development",
        "User research & validation",
        "Technical architecture review",
        "Go-to-market strategy",
      ]}
    />
    <ServiceCard
      icon={<Users className="w-7 h-7" />}
      title="Team & Process Consulting"
      audience="Growing Engineering Teams"
      problem="Your team is growing but struggling with processes, velocity, or delivery. You need operational excellence."
      format="6-12 week transformation programs"
      features={[
        "Agile process optimization",
        "Team structure & hiring strategy",
        "Engineering culture assessment",
        "Velocity & quality improvements",
        "Leadership coaching",
      ]}
    />
  </div>
);

const Advisory = () => (
  <div className="max-w-2xl">
    <ServiceCard
      icon={<Briefcase className="w-7 h-7" />}
      title="Strategic Advisory"
      audience="Founders & C-Suite Executives"
      problem="You need a trusted advisor who understands both product and technology to help navigate critical decisions."
      format="Ongoing monthly retainer with on-demand access"
      features={[
        "Monthly strategy sessions",
        "Board & investor prep support",
        "M&A technical due diligence",
        "Executive hiring support",
        "Crisis management guidance",
        "Network & introductions",
      ]}
    />
  </div>
);

const Fractional = () => (
  <div className="max-w-2xl">
    <ServiceCard
      icon={<Briefcase className="w-7 h-7" />}
      title="Fractional CPO / CTO"
      audience="Startups Without Full-Time Executive"
      problem="You need senior product or technical leadership but aren't ready for a full-time executive hire."
      format="Part-time embedded role (2-3 days/week)"
      features={[
        "Product vision & strategy ownership",
        "Team leadership & mentorship",
        "Stakeholder management",
        "Roadmap execution oversight",
        "Technical decision making",
        "Investor relations support",
      ]}
    />
  </div>
);

export default ServicesSection;
