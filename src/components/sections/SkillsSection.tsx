import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SecondaryTabs from "../SecondaryTabs";
import {
  Target,
  Users,
  TrendingUp,
  BarChart3,
  Layers,
  Workflow,
  Figma,
  Slack,
  GitBranch,
  Trello,
  Database,
  Cloud,
} from "lucide-react";

const secondaryTabs = [
  { id: "product", label: "Product & Program" },
  { id: "execution", label: "Execution & Analysis" },
  { id: "tools", label: "Tools & Platforms" },
];

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("product");

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
          {activeTab === "product" && <ProductProgram />}
          {activeTab === "execution" && <ExecutionAnalysis />}
          {activeTab === "tools" && <ToolsPlatforms />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

/* =========================
   PRODUCT & PROGRAM
========================= */

const ProductProgram = () => (
  <div className="space-y-6">
    <div className="grid md:grid-cols-3 gap-4">
      {[
        {
          icon: <Target className="w-6 h-6" />,
          title: "Product Strategy",
          skills: [
            "Problem Framing",
            "Roadmap Definition",
            "Prioritisation & Trade-offs",
            "Outcome Definition",
          ],
        },
        {
          icon: <Workflow className="w-6 h-6" />,
          title: "Program Delivery",
          skills: [
            "Initiative Planning",
            "Cross-functional Coordination",
            "Dependency Management",
            "Delivery Governance",
          ],
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Stakeholder Management",
          skills: [
            "Executive Communication",
            "Expectation Alignment",
            "Decision Facilitation",
            "Risk & Constraint Management",
          ],
        },
      ].map((category, i) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="glass-panel rounded-2xl p-6"
        >
          <div className="w-12 h-12 mb-4 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
            {category.icon}
          </div>
          <h4 className="font-semibold text-foreground mb-3">
            {category.title}
          </h4>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span key={skill} className="skill-chip text-xs">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

/* =========================
   EXECUTION & ANALYSIS
========================= */

const ExecutionAnalysis = () => (
  <div className="space-y-6">
    <div className="grid md:grid-cols-2 gap-6">
      {[
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Strategy Execution",
          skills: [
            "Translating Strategy into Plans",
            "OKRs & Success Metrics",
            "Execution Tracking",
            "Continuous Improvement",
          ],
        },
        {
          icon: <BarChart3 className="w-6 h-6" />,
          title: "Data & Insights",
          skills: [
            "KPI Definition",
            "Performance Analysis",
            "Insight Generation",
            "Decision Support",
          ],
        },
        {
          icon: <Layers className="w-6 h-6" />,
          title: "Operating Models",
          skills: [
            "Delivery Frameworks",
            "Team Rituals & Cadence",
            "Governance Design",
            "Scalable Processes",
          ],
        },
        {
          icon: <Cloud className="w-6 h-6" />,
          title: "Technical Fluency",
          skills: [
            "Working with Engineering Teams",
            "System Constraints Awareness",
            "Data & Platform Literacy",
            "AI / Tech Product Context",
          ],
        },
      ].map((category, i) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="glass-panel rounded-2xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
              {category.icon}
            </div>
            <h4 className="font-semibold text-foreground">
              {category.title}
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span key={skill} className="skill-chip">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

/* =========================
   TOOLS & PLATFORMS
========================= */

const ToolsPlatforms = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { icon: <Figma className="w-8 h-8" />, name: "Figma", category: "Design" },
        { icon: <Slack className="w-8 h-8" />, name: "Slack", category: "Communication" },
        { icon: <GitBranch className="w-8 h-8" />, name: "GitHub", category: "Version Control" },
        { icon: <Trello className="w-8 h-8" />, name: "Jira", category: "Program Management" },
        { icon: <BarChart3 className="w-8 h-8" />, name: "Amplitude", category: "Analytics" },
        { icon: <Database className="w-8 h-8" />, name: "SQL / Data Tools", category: "Data" },
        { icon: <Cloud className="w-8 h-8" />, name: "Cloud Platforms", category: "Infrastructure" },
        { icon: <Layers className="w-8 h-8" />, name: "Documentation & Planning", category: "Delivery" },
      ].map((tool, i) => (
        <motion.div
          key={tool.name}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.05 }}
          className="glass-panel rounded-xl p-4 text-center hover:border-accent/30 transition-all cursor-default"
        >
          <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-secondary flex items-center justify-center text-foreground">
            {tool.icon}
          </div>
          <p className="font-medium text-foreground text-sm">
            {tool.name}
          </p>
          <p className="text-muted-foreground text-xs">
            {tool.category}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
);

export default SkillsSection;
