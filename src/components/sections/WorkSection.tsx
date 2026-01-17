import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SecondaryTabs from "../SecondaryTabs";
import { ExternalLink, FileText } from "lucide-react";

const secondaryTabs = [
  { id: "initiatives", label: "Key Initiatives" },
  { id: "artefacts", label: "Work Samples (Artefacts)" },
  { id: "dataviz", label: "Work Samples (Data Viz)" },
];

const WorkSection = () => {
  const [activeTab, setActiveTab] = useState("initiatives");

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
          transition={{ duration: 0.25 }}
        >
          {activeTab === "initiatives" && <KeyInitiatives />}
          {activeTab === "artefacts" && <Artefacts />}
          {activeTab === "dataviz" && <DataViz />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

/* =========================
   KEY INITIATIVES
========================= */

const initiatives = [
  {
    title: "Egypt FWD – National Digital Upskilling Program",
    image: "/images/egypt-fwd.jpg",
    description:
      "Led delivery and coordination across a national-scale, multi-stakeholder digital education ecosystem.",
    scope: [
      "Program planning and execution across multiple learning tracks",
      "Alignment between government stakeholders and delivery partners",
      "Operational cadence, reporting, and risk management",
    ],
    outcome:
      "Established a scalable delivery model supporting complex program rollouts.",
  },
  {
    title: "Udacity – Career Services & Coaching Products",
    image: "/images/udacity-careers.jpg",
    description:
      "Designed and scaled career support offerings embedded within global digital learning programs.",
    scope: [
      "Service model definition and success metrics",
      "Coordination with product, mentors, and delivery teams",
      "Balancing learner value with operational feasibility",
    ],
    outcome:
      "Enabled consistent learner experience while supporting program scale.",
  },
  {
    title: "Ptah Crafts – Two-Sided Marketplace",
    image: "/images/ptah-crafts.jpg",
    description:
      "Launched and operated an early-stage marketplace connecting artisans with end customers.",
    scope: [
      "Product positioning and vendor onboarding",
      "Early operating assumptions and constraints",
      "Hands-on iteration across product and delivery",
    ],
    outcome:
      "Validated marketplace mechanics and informed next-stage decisions.",
  },
];

const KeyInitiatives = () => (
  <div className="grid gap-6">
    {initiatives.map((item, i) => (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        className="glass-panel-elevated rounded-2xl overflow-hidden"
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-cover"
        />

        <div className="p-6">
          <h3 className="font-display text-xl font-bold mb-2">
            {item.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4">
            {item.description}
          </p>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-accent font-medium block mb-1">
                Scope
              </span>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                {item.scope.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2">
              <span className="text-accent font-medium block mb-1">
                Outcome
              </span>
              <p className="text-muted-foreground">{item.outcome}</p>
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

/* =========================
   ARTEFACTS
========================= */

const artefacts = [
  {
    title: "Product Strategy & Execution Proposal",
    description:
      "Product direction and execution plan created as part of an interview take-home assessment.",
    link:
      "https://docs.google.com/document/d/12nFeOQsDwiescT2AZQBfKEVsbOCoEvrrGxBMyAsSMBY",
  },
  {
    title: "Program Delivery & Metrics Framework",
    description:
      "End-to-end delivery model and measurement approach from a hiring assessment.",
    link:
      "https://docs.google.com/presentation/d/1jhiNLJwbBvJFp2jpmX7Ii_jHKKSCjbWZCfgNkzZPH7Q",
  },
  {
    title: "Operational Planning & Risk Analysis",
    description:
      "Structured planning and risk evaluation exercise from a program leadership interview.",
    link:
      "https://docs.google.com/document/d/1-2u1hpeMIkOePlnyCcxeFFGLPq5mKbj3-mU7KIc9X3k",
  },
  {
    title: "Strategic Roadmap & Execution Narrative",
    description:
      "Roadmap and execution narrative developed during a product leadership interview.",
    link:
      "https://docs.google.com/presentation/d/1Y4F5CpJ5fQJijpcQ_6DKwD7AUJPDY6N_kutaZxBUcAY",
  },
];

const Artefacts = () => (
  <div className="grid md:grid-cols-2 gap-6">
    {artefacts.map((item, i) => (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        className="glass-panel rounded-2xl p-6 flex flex-col justify-between"
      >
        <div>
          <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
          <p className="text-muted-foreground text-sm mb-4">
            {item.description}
          </p>
          <p className="text-muted-foreground text-xs italic mb-4">
            Created as part of an interview or take-home assessment
          </p>
        </div>

        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-auto btn-hero-secondary"
        >
          <FileText className="w-4 h-4" />
          View Document
        </a>
      </motion.div>
    ))}
  </div>
);

/* =========================
   DATA VISUALISATION
========================= */

const DataViz = () => (
  <div className="space-y-10">
    <TableauCard
      title="Program Performance & Outcome Analysis"
      description="Exploratory dashboard focused on understanding performance trends and outcomes."
      src="https://public.tableau.com/shared/6MFJGM55P?:showVizHome=no&embed=true"
    />
    <TableauCard
      title="Population & Income Group Trends"
      description="Visual exploration of population distribution across income groups over time."
      src="https://public.tableau.com/shared/GRYC69YWB?:showVizHome=no&embed=true"
    />
    <TableauCard
      title="Business Performance Analysis (Assessment)"
      description="Dashboard developed as part of a data-focused hiring assessment."
      src="https://public.tableau.com/views/SandtechAssignment/Sheet1?:showVizHome=no&embed=true"
    />
  </div>
);

const TableauCard = ({
  title,
  description,
  src,
}: {
  title: string;
  description: string;
  src: string;
}) => (
  <div className="glass-panel rounded-2xl p-4">
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm mb-4">{description}</p>
    <iframe
      src={src}
      width="100%"
      height="500"
      loading="lazy"
      className="rounded-xl border"
    />
  </div>
);

export default WorkSection;
