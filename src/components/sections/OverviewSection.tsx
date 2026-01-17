import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SecondaryTabs from "../SecondaryTabs";
import { Award, Heart, Target } from "lucide-react";

const secondaryTabs = [
  { id: "about", label: "About Me" },
  { id: "experience", label: "Experience Highlights" },
  { id: "values", label: "Values & Approach" },
];

const OverviewSection = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div>
      <SecondaryTabs
        tabs={secondaryTabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === "about" && <AboutMe />}
          {activeTab === "experience" && <ExperienceHighlights />}
          {activeTab === "values" && <ValuesApproach />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const AboutMe = () => (
  <div className="grid md:grid-cols-2 gap-8">
    <div className="space-y-4">
      <h3 className="font-display text-2xl font-bold text-foreground">
        Turning Strategy Into Measurable Outcomes
      </h3>

      <p className="text-muted-foreground leading-relaxed">
        I’m a senior product, program, and operations leader who specialises in
        turning strategic intent into measurable outcomes. My work sits at the
        intersection of product vision, delivery reality, and stakeholder
        expectations, where clarity, prioritisation, and execution discipline
        matter most.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        Over the past 12+ years, I’ve operated across technology, education,
        marketplaces, and emerging AI-driven products, leading complex
        initiatives that span multiple stakeholders, geographies, and delivery
        models. I’m most effective in ambiguous environments where the problem
        is not just what to build, but how to align people, systems, and
        incentives to deliver sustainable value.
      </p>
    </div>

    <div className="glass-panel rounded-2xl p-6 space-y-4">
      <h4 className="font-semibold text-foreground">Quick Facts</h4>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-muted-foreground">Focus</span>
          <p className="font-medium text-foreground">Product + Program + Ops</p>
        </div>

        <div>
          <span className="text-muted-foreground">Experience</span>
          <p className="font-medium text-foreground">12+ Years</p>
        </div>

        <div>
          <span className="text-muted-foreground">Strength</span>
          <p className="font-medium text-foreground">Ambiguity → Clarity</p>
        </div>

        <div>
          <span className="text-muted-foreground">Availability</span>
          <p className="font-medium text-accent">
            Consulting • Contract • Leadership
          </p>
        </div>
      </div>
    </div>
  </div>
);

const ExperienceHighlights = () => (
  <div className="space-y-6">
    <div className="grid md:grid-cols-3 gap-4">
      {[
        {
          metric: "150K+",
          label: "Users Served (Egypt FWD)",
          icon: <Target className="w-6 h-6" />,
        },
        {
          metric: "25K+",
          label: "Career Services Users",
          icon: <Award className="w-6 h-6" />,
        },
        {
          metric: "2-Sided",
          label: "Marketplace Built & Operated",
          icon: <Heart className="w-6 h-6" />,
        },
      ].map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="glass-panel rounded-2xl p-6 text-center"
        >
          <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
            {item.icon}
          </div>
          <p className="font-display text-3xl font-bold text-foreground">
            {item.metric}
          </p>
          <p className="text-muted-foreground text-sm mt-1">{item.label}</p>
        </motion.div>
      ))}
    </div>

    <div className="glass-panel rounded-2xl p-6">
      <h4 className="font-semibold text-foreground mb-4">
        What I’ve Delivered
      </h4>

      <div className="space-y-4">
        {[
          {
            title: "Two-sided marketplace launch & operations",
            detail:
              "Launched and operated Ptah Crafts, owning product positioning, vendor experience, onboarding flows, and early growth, while balancing product ambition with operational reality.",
          },
          {
            title: "National-scale program ecosystem leadership",
            detail:
              "Led Egypt FWD, aligning government stakeholders with product, data, and delivery teams to execute at national scale with clear outcomes and constraints.",
          },
          {
            title: "Career services and coaching product scaling",
            detail:
              "Designed and scaled career services and coaching products to 25K+ users, balancing customer value, operational feasibility, and unit economics.",
          },
          {
            title: "Strategy → roadmap → metrics → iteration",
            detail:
              "Translated strategy into roadmaps, success metrics, and operating models, enabling teams to focus on what matters and learn fast through measurable feedback loops.",
          },
          {
            title: "Measurement systems and KPI design",
            detail:
              "Built performance measurement systems across product health, customer experience, and operational delivery, enabling rapid course correction and stakeholder transparency.",
          },
          {
            title: "Cross-functional delivery under real constraints",
            detail:
              "Partnered closely with engineering, data, and design to prioritise features, manage trade-offs, and ship incrementally without losing the strategic thread.",
          },
        ].map((item, i) => (
          <div key={i} className="space-y-1">
            <p className="font-medium text-foreground">{item.title}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ValuesApproach = () => (
  <div className="grid md:grid-cols-2 gap-6">
    {[
      {
        title: "Create clarity from ambiguity",
        description:
          "I start by defining goals, constraints, and success metrics, then break uncertainty into concrete decisions and execution steps teams can act on.",
      },
      {
        title: "Focus & learning velocity",
        description:
          "I care about teams working on the few things that truly matter, measuring outcomes, and adapting quickly when assumptions prove wrong.",
      },
      {
        title: "Balance innovation with control",
        description:
          "I design operating models that support fast iteration while maintaining governance, accountability, and predictable delivery.",
      },
      {
        title: "Turn strategy into operating models",
        description:
          "Teams rely on me to translate unclear strategy into roadmaps, metrics, and execution rhythms that keep complex programs moving when things get messy.",
      },
    ].map((value, i) => (
      <motion.div
        key={value.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        className="glass-panel rounded-2xl p-6"
      >
        <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {value.description}
        </p>
      </motion.div>
    ))}
  </div>
);

export default OverviewSection;
