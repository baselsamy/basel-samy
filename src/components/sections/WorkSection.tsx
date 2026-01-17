import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SecondaryTabs from "../SecondaryTabs";
import { ExternalLink, FileText } from "lucide-react";

/* =========================
   TABS CONFIG
========================= */

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

const imageBase = import.meta.env.BASE_URL;

const initiatives = [
  {
    title: "Egypt FWD — National Digital Upskilling Program",
    image: `${imageBase}images/egypt-fwd.jpg`,
    description:
      "Led delivery across a national-scale digital upskilling initiative, coordinating multiple stakeholders across government, education partners, and delivery teams.",
    scope: [
      "Program planning, execution, and delivery governance",
      "Cross-stakeholder alignment and operational coordination",
      "Progress tracking, risk management, and reporting cadence",
    ],
    outcome:
      "Enabled consistent delivery across a complex, multi-track program operating at national scale.",
  },
  {
    title: "Udacity — Career Services & Coaching Products",
    image: `${imageBase}images/udacity-careers.jpg`,
    description:
      "Designed and scaled career services embedded within large-scale digital learning programs, balancing learner value with operational feasibility.",
    scope: [
      "Service design and delivery models",
      "Success metrics and performance tracking",
      "Collaboration with product, data, and delivery teams",
    ],
    outcome:
      "Supported scalable career outcomes while maintaining quality and operational control.",
  },
  {
    title: "Ptah Crafts — Two-Sided Marketplace (Founder-led)",
    image: `${imageBase}images/ptah-crafts.jpg`,
    description:
      "Launched and operated an early-stage, video-first marketplace connecting premium artisans with end customers in the Middle East.",
    scope: [
      "Product positioning and marketplace concept definition",
      "Vendor onboarding and early operating assumptions",
      "Hands-on execution across product and program delivery",
    ],
    outcome:
      "Validated marketplace dynamics and informed roadmap and go-to-market decisions.",
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
        className="glass-panel-elevated rounded-2xl overflow-hidden grid md:grid-cols-5 gap-0"
      >
        <div className="md:col-span-2 overflow-hidden bg-muted">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>

        <div className="md:col-span-3 p-6 flex flex-col justify-between">
          <div>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">
              {item.title}
            </h3>

            <p className="text-muted-foreground text-sm mb-4">
              {item.description}
            </p>

            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-accent font-medium block mb-1">Scope</span>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                {item.scope.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-accent font-medium block mb-1">Outcome</span>
              <p className="text-muted-foreground">{item.outcome}</p>
            </div>
          </div>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

/* =========================
   WORK SAMPLES – ARTEFACTS
========================= */

const artefacts = [
  {
    title:
      "Program Delivery Model & Execution Plan (Pathway Delivery Lead Assessment)",
    description:
      "A structured program delivery plan outlining execution approach, governance cadence, risk management, and success metrics. Created as part of a take-home assessment for a senior delivery leadership role.",
    tag: "Interview / Take-home Assessment",
    pdf: "https://docs.google.com/document/d/12nFeOQsDwiescT2AZQBfKEVsbOCoEvrrGxBMyAsSMBY/edit?tab=t.0#heading=h.csjkra8tsszr",
  },
  {
    title:
      "Strategic Growth & Execution Plan (SandTech Hiring Assignment)",
    description:
      "Strategic planning exercise focused on growth levers, prioritisation, and execution sequencing. Developed as part of a senior role interview process.",
    tag: "Interview / Take-home Assessment",
    pdf: "https://docs.google.com/presentation/d/1jhiNLJwbBvJFp2jpmX7Ii_jHKKSCjbWZCfgNkzZPH7Q/edit?slide=id.p#slide=id.p",
  },
  {
    title:
      "Operational Planning & Risk Assessment Framework",
    description:
      "Operational planning artefact detailing delivery timelines, dependencies, and risk mitigation strategies. Produced as a structured hiring assignment.",
    tag: "Interview / Take-home Assessment",
    pdf: "https://docs.google.com/document/d/1-2u1hpeMIkOePlnyCcxeFFGLPq5mKbj3-mU7KIc9X3k/edit?tab=t.0#heading=h.jeia4svhey2j",
  },
  {
    title:
      "Ptah Crafts: Marketplace Concept, Strategy & Early Execution",
    description:
      "Internal product and strategy deck covering problem framing, market opportunity, positioning, business model, and execution roadmap for Ptah Crafts.",
    tag: "Company Work (Ptah Crafts)",
    pdf: "https://docs.google.com/presentation/d/1Y4F5CpJ5fQJijpcQ_6DKwD7AUJPDY6N_kutaZxBUcAY/edit?slide=id.g3829522de4a_0_1362#slide=id.g3829522de4a_0_1362",
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
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="font-semibold text-foreground text-lg leading-snug">
              {item.title}
            </h3>
            <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent whitespace-nowrap">
              {item.tag}
            </span>
          </div>

          <p className="text-muted-foreground text-sm mb-4">
            {item.description}
          </p>

          {item.tag.includes("Interview") && (
            <p className="text-muted-foreground text-xs italic mb-4">
              Created as part of an interview or take-home assessment
            </p>
          )}
        </div>

        <div className="mt-auto">
          <a
            href={item.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero-primary inline-flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            View Document
          </a>
        </div>
      </motion.div>
    ))}
  </div>
);

/* =========================
   WORK SAMPLES – DATA VIZ
========================= */

const DataViz = () => (
  <div className="space-y-10">
    <TableauCard
      title="Program Performance & Outcome Analysis"
      description="Exploratory dashboard focused on performance trends and outcome analysis."
      src="https://public.tableau.com/shared/6MFJGM55P?:showVizHome=no&embed=true"
    />

    <TableauCard
      title="Population & Income Group Trends"
      description="Visual exploration of population distribution across income groups over time."
      src="https://public.tableau.com/shared/GRYC69YWB?:showVizHome=no&embed=true"
    />

    <TableauCard
      title="Business Performance Analysis (Hiring Assessment)"
      description="Dashboard developed as part of a data-focused hiring assignment."
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
    <h3 className="font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm mb-4">{description}</p>

    <iframe
      src={src}
      width="100%"
      height="520"
      loading="lazy"
      className="rounded-xl border"
    />
  </div>
);

export default WorkSection;
