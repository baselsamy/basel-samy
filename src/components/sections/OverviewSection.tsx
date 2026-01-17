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

/* =========================
   ABOUT ME
========================= */

const AboutMe = () => (
  <div className="grid md:grid-cols-2 gap-8">
    <div className="space-y-4">
      <h3 className="font-display text-2xl font-bold text-foreground">
        Turning Strategy Into Measurable Outcomes
      </h3>

      <p className="text-muted-foreground leading-relaxed">
        I am a senior product and program leader who specialises in turning
        strategic intent into measurable outcomes. My work sits at the
        intersection of product vision, delivery reality, and stakeholder
        expectations — where clarity, prioritisation, and execution discipline
        matter most.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        Over the past 12+ years, I’ve worked across technology, education,
        marketplaces, and data-driven products, leading complex initiatives that
        span multiple stakeholders, cross-functional teams, and delivery models.
        I’m most effective in ambiguous environments where the challenge is not
        only what to build, but how to execute reliably and learn quickly.
      </p>
    </div>

    {/* QUICK FACTS */}
    <div className="glass-panel rounded-2xl p-6 space-y-4">
      <h4 className="font-semibold text-foreground">Quick Facts</h4>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-muted-foreground">Focus</span>
          <p className="font-medium text-foreground">
            Product & Program Delivery
          </p>
        </div>

        <div>
          <span className="text-muted-foreground">Experience</span>
          <p className="font-medium text-foreground">
            12+ years building and scaling products & programs
          </p>
        </div>

        <div>
          <span className="text-muted-foreground">Scope</span>
          <p className="font-medium text-foreground">
            Complex, multi-stakeholder initiatives & cross-functional environments
          </p>
        </div>

        <div>
          <span className="text-muted-foreground">Strength</span>
          <p className="font-medium text-foreground">
            Strategy execution & insight-driven product and program decisions
          </p>
        </div>

        <div>
          <span className="text-muted-foreground">Expertise</span>
          <p className="font-medium text-foreground">
            Strategy • Execution • Stakeholder Management • Data Analysis • Team Enablement
          </p>
        </div>

        <div>
          <span className="text-muted-foreground">Availability</span>
          <p className="font-medium text-accent">
            Open to full-time roles & Consulting work
          </p>
        </div>
      </div>
    </div>
  </div>
);

/* =========================
   EXPERIENCE HIGHLIGHTS
========================= */

const ExperienceHighlights = () => (
  <div className="space-y-6">
    <div className="grid md:grid-cols-3 gap-4">
      {[
        {
          metric: "National",
          label: "Program & Product Scale",
          icon: <Target className="w-6 h-6" />,
        },
        {
          metric: "0 → 1",
          label: "Product & Initiative Launches",
          icon: <Award className="w-6 h-6" />,
        },
        {
          metric: "Cross-Func",
          label: "Multi-disciplinary Teams",
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
          <p className="font-display text-2xl font-bold text-foreground">
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
            title: "Product & marketplace launches",
            detail:
              "Launched and operated a two-sided marketplace, owning product positioning, onboarding flows, and early growth while balancing execution constraints and learning velocity.",
          },
          {
            title: "Large-scale programs & ecosystems",
            detail:
              "Led national and multi-stakeholder programs, aligning government, product, data, and delivery teams around shared outcomes and execution plans.",
          },
          {
            title: "Product-led services & offerings",
            detail:
              "Designed and scaled user-facing services and programs, balancing customer value, operational feasibility, and measurable success metrics.",
          },
          {
            title: "Strategy execution & operating models",
            detail:
              "Translated strategic goals into roadmaps, delivery plans, and metrics that helped teams focus, execute, and adapt quickly.",
          },
          {
            title: "Measurement & insight generation",
            detail:
              "Built KPI frameworks and reporting mechanisms to track progress, surface insights, and support data-informed decision making.",
          },
          {
            title: "Cross-functional delivery",
            detail:
              "Worked closely with engineering, design, and data teams to prioritise work, manage trade-offs, and deliver incrementally under real constraints.",
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

/* =========================
   VALUES & APPROACH
========================= */

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
          "I prioritise focus on what matters most, using feedback and metrics to learn quickly and adapt when assumptions change.",
      },
      {
        title: "Balance strategy and execution",
        description:
          "I connect strategy to delivery by designing practical plans, governance, and rhythms that teams can realistically execute.",
      },
      {
        title: "Data-informed decision making",
        description:
          "I use data and insights to guide prioritisation, evaluate progress, and support transparent decision making across stakeholders.",
      },
    ].map((value, i) => (
      <motion.div
        key={value.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        className="glass-panel rounded-2xl p-6"
      >
        <h4 className="font-semibold text-foreground mb-2">
          {value.title}
        </h4>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {value.description}
        </p>
      </motion.div>
    ))}
  </div>
);

export default OverviewSection;
