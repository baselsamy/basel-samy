import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SecondaryTabs from "../SecondaryTabs";
import { ExternalLink, ArrowRight } from "lucide-react";

const secondaryTabs = [
  { id: "projects", label: "Key Initiatives" },
  { id: "case-studies", label: "Case Studies" },
  { id: "samples", label: "Work Samples" },
];

const WorkSection = () => {
  const [activeTab, setActiveTab] = useState("projects");

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
          {activeTab === "projects" && <Projects />}
          {activeTab === "case-studies" && <CaseStudies />}
          {activeTab === "samples" && <WorkSamples />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

/* =========================
   PROJECTS / INITIATIVES
========================= */

const projects = [
  {
    title: "Egypt FWD – National Digital Upskilling Program",
    description:
      "Led delivery and coordination across a large-scale, multi-stakeholder digital education ecosystem.",
    scope: [
      "Program planning and execution across multiple learning tracks",
      "Alignment between government stakeholders, product teams, and delivery partners",
      "Operational cadence, reporting, and risk management",
    ],
    outcome:
      "Delivered a scalable, repeatable operating model supporting national-level rollout.",
  },
  {
    title: "Career Services & Coaching Products (Udacity)",
    description:
      "Designed and scaled career support offerings embedded within digital learning programs.",
    scope: [
      "Definition of service models and success metrics",
      "Coordination with product, mentors, and operations teams",
      "Balancing learner value with operational feasibility",
    ],
    outcome:
      "Enabled consistent learner experience while supporting program scale and delivery quality.",
  },
  {
    title: "Ptah Crafts – Two-Sided Marketplace (Early Stage)",
    description:
      "Launched and operated an early-stage marketplace connecting artisans with end customers.",
    scope: [
      "Product positioning and vendor onboarding flows",
      "Definition of early operating assumptions and constraints",
      "Hands-on iteration across product and delivery",
    ],
    outcome:
      "Validated core marketplace mechanics and informed next-stage product decisions.",
  },
];

const Projects = () => (
  <div className="grid gap-6">
    {projects.map((project, i) => (
      <motion.div
        key={project.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        className="glass-panel-elevated rounded-2xl p-6"
      >
        <h3 className="font-display text-xl font-bold text-foreground mb-2">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {project.description}
        </p>

        <div className="grid md:grid-cols-3 gap-4 text-sm mb-4">
          <div>
            <span className="text-accent font-medium block mb-1">
              Scope & Responsibilities
            </span>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              {project.scope.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <span className="text-accent font-medium block mb-1">
              Outcome
            </span>
            <p className="text-muted-foreground">{project.outcome}</p>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

/* =========================
   CASE STUDIES
========================= */

const caseStudies = [
  {
    title: "Running a National-Scale Program Under Real Constraints",
    context: "Egypt FWD",
    summary:
      "How I translated high-level objectives into an executable delivery model across multiple stakeholders, while managing dependencies, risks, and delivery pressure.",
  },
  {
    title: "Scaling Career Services Without Breaking Delivery",
    context: "Udacity",
    summary:
      "A practical look at designing, launching, and iterating service-based products within fixed operational constraints.",
  },
];

const CaseStudies = () => (
  <div className="grid md:grid-cols-2 gap-6">
    {caseStudies.map((study, i) => (
      <motion.div
        key={study.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        className="glass-panel rounded-2xl p-6 group hover:border-accent/30 transition-all"
      >
        <p className="text-accent text-sm font-medium mb-1">
          {study.context}
        </p>
        <h3 className="font-semibold text-foreground text-lg mb-2">
          {study.title}
        </h3>
        <p className="text-muted-foreground text-sm">
          {study.summary}
        </p>
        <div className="flex items-center gap-2 text-accent text-sm font-medium mt-4">
          Detailed walkthrough available on request
          <ArrowRight className="w-4 h-4" />
        </div>
      </motion.div>
    ))}
  </div>
);

/* =========================
   WORK SAMPLES
========================= */

const WorkSamples = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {[
      { label: "Program Roadmap & Delivery Plan", type: "Planning Artifact" },
      { label: "Stakeholder Update Deck", type: "Communication" },
      { label: "OKR & Metrics Framework", type: "Measurement" },
      { label: "Program Retrospective Summary", type: "Insights" },
    ].map((sample, i) => (
      <motion.div
        key={sample.label}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.05 }}
        className="glass-panel rounded-xl p-4 text-center hover:border-accent/30 transition-all cursor-default"
      >
        <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
          <ExternalLink className="w-5 h-5" />
        </div>
        <p className="font-medium text-foreground text-sm">
          {sample.label}
        </p>
        <p className="text-muted-foreground text-xs">
          {sample.type}
        </p>
      </motion.div>
    ))}
  </div>
);

export default WorkSection;
