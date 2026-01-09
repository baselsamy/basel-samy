import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SecondaryTabs from "../SecondaryTabs";
import { 
  Target, Users, TrendingUp, Code, Database, Cloud, 
  Figma, Slack, GitBranch, Trello, BarChart3, Zap 
} from "lucide-react";

const secondaryTabs = [
  { id: "strategy", label: "Strategy & Leadership" },
  { id: "technical", label: "Technical Skills" },
  { id: "tools", label: "Tools & Platforms" },
];

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("strategy");

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
          {activeTab === "strategy" && <StrategyLeadership />}
          {activeTab === "technical" && <TechnicalSkills />}
          {activeTab === "tools" && <ToolsPlatforms />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const StrategyLeadership = () => (
  <div className="space-y-6">
    <div className="grid md:grid-cols-3 gap-4">
      {[
        { icon: <Target className="w-6 h-6" />, title: "Product Strategy", skills: ["Roadmap Planning", "Market Analysis", "OKR Definition", "Vision Setting"] },
        { icon: <Users className="w-6 h-6" />, title: "Team Leadership", skills: ["Team Building", "Mentorship", "Agile Coaching", "Cross-functional Collaboration"] },
        { icon: <TrendingUp className="w-6 h-6" />, title: "Growth & Scale", skills: ["GTM Strategy", "User Acquisition", "Retention Optimization", "Revenue Growth"] },
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
          <h4 className="font-semibold text-foreground mb-3">{category.title}</h4>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span key={skill} className="skill-chip text-xs">{skill}</span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const TechnicalSkills = () => (
  <div className="space-y-6">
    <div className="grid md:grid-cols-2 gap-6">
      {[
        { 
          icon: <Code className="w-6 h-6" />, 
          title: "Frontend Development",
          skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "Redux"]
        },
        { 
          icon: <Database className="w-6 h-6" />, 
          title: "Backend & Data",
          skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"]
        },
        { 
          icon: <Cloud className="w-6 h-6" />, 
          title: "Cloud & DevOps",
          skills: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "Terraform"]
        },
        { 
          icon: <Zap className="w-6 h-6" />, 
          title: "Emerging Tech",
          skills: ["AI/ML Integration", "LLMs", "Web3", "IoT", "Edge Computing"]
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
            <h4 className="font-semibold text-foreground">{category.title}</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span key={skill} className="skill-chip">{skill}</span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const ToolsPlatforms = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { icon: <Figma className="w-8 h-8" />, name: "Figma", category: "Design" },
        { icon: <Slack className="w-8 h-8" />, name: "Slack", category: "Communication" },
        { icon: <GitBranch className="w-8 h-8" />, name: "GitHub", category: "Version Control" },
        { icon: <Trello className="w-8 h-8" />, name: "Jira", category: "Project Management" },
        { icon: <BarChart3 className="w-8 h-8" />, name: "Amplitude", category: "Analytics" },
        { icon: <Database className="w-8 h-8" />, name: "Mixpanel", category: "Analytics" },
        { icon: <Cloud className="w-8 h-8" />, name: "Vercel", category: "Deployment" },
        { icon: <Zap className="w-8 h-8" />, name: "Linear", category: "Project Management" },
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
          <p className="font-medium text-foreground text-sm">{tool.name}</p>
          <p className="text-muted-foreground text-xs">{tool.category}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

export default SkillsSection;
