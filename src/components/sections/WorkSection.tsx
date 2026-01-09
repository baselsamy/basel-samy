import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SecondaryTabs from "../SecondaryTabs";
import { ExternalLink, ArrowRight } from "lucide-react";

const secondaryTabs = [
  { id: "projects", label: "Projects" },
  { id: "case-studies", label: "Case Studies" },
  { id: "samples", label: "Work Samples" },
];

const WorkSection = () => {
  const [activeTab, setActiveTab] = useState("projects");

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
          {activeTab === "projects" && <Projects />}
          {activeTab === "case-studies" && <CaseStudies />}
          {activeTab === "samples" && <WorkSamples />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const projects = [
  {
    title: "FinanceFlow Platform",
    description: "Led the development of a comprehensive financial management platform serving 2M+ users.",
    problem: "Complex financial workflows with poor UX",
    solution: "Rebuilt the entire platform with modern architecture",
    impact: "200% increase in user engagement, 40% reduction in support tickets",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "HealthTech Mobile App",
    description: "Designed and launched a patient-centric healthcare application.",
    problem: "Fragmented health data across multiple providers",
    solution: "Unified health dashboard with AI-powered insights",
    impact: "1M+ downloads, 4.8★ rating, 30% improved health outcomes",
    tech: ["React Native", "Python", "ML/AI", "HIPAA Compliant"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
  },
  {
    title: "E-commerce Transformation",
    description: "Transformed a legacy e-commerce platform into a modern, scalable solution.",
    problem: "Outdated tech stack limiting growth",
    solution: "Complete platform modernization with microservices",
    impact: "300% performance improvement, $50M additional revenue",
    tech: ["Next.js", "GraphQL", "Kubernetes", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
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
        className="glass-panel-elevated rounded-2xl overflow-hidden group"
      >
        <div className="grid md:grid-cols-3 gap-0">
          <div className="aspect-video md:aspect-auto">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="md:col-span-2 p-6 flex flex-col">
            <h3 className="font-display text-xl font-bold text-foreground mb-2">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
            
            <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
              <div>
                <span className="text-accent font-medium block mb-1">Problem</span>
                <span className="text-muted-foreground">{project.problem}</span>
              </div>
              <div>
                <span className="text-accent font-medium block mb-1">Solution</span>
                <span className="text-muted-foreground">{project.solution}</span>
              </div>
              <div>
                <span className="text-accent font-medium block mb-1">Impact</span>
                <span className="text-muted-foreground">{project.impact}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((t) => (
                <span key={t} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

const caseStudies = [
  {
    title: "Scaling a SaaS from $1M to $50M ARR",
    company: "TechScale Inc.",
    duration: "2020-2023",
    summary: "A deep dive into product-led growth strategies that 50x'd revenue in 3 years.",
  },
  {
    title: "Building a Product Team from Scratch",
    company: "InnovateCo",
    duration: "2017-2020",
    summary: "How I hired and developed a 30-person product organization that shipped 8 major features.",
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
        className="glass-panel rounded-2xl p-6 group cursor-pointer hover:border-accent/30 transition-all"
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-accent text-sm font-medium">{study.company}</p>
            <p className="text-muted-foreground text-xs">{study.duration}</p>
          </div>
          <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
        </div>
        <h3 className="font-semibold text-foreground text-lg mb-2">{study.title}</h3>
        <p className="text-muted-foreground text-sm">{study.summary}</p>
        <button className="flex items-center gap-2 text-accent text-sm font-medium mt-4 group-hover:gap-3 transition-all">
          Read Case Study <ArrowRight className="w-4 h-4" />
        </button>
      </motion.div>
    ))}
  </div>
);

const WorkSamples = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {[
      { label: "Product Roadmap Template", type: "Template" },
      { label: "UX Audit Framework", type: "Framework" },
      { label: "Team OKR Dashboard", type: "Dashboard" },
      { label: "Feature Spec Document", type: "Document" },
    ].map((sample, i) => (
      <motion.div
        key={sample.label}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.05 }}
        className="glass-panel rounded-xl p-4 text-center group cursor-pointer hover:border-accent/30 transition-all"
      >
        <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
          <ExternalLink className="w-5 h-5" />
        </div>
        <p className="font-medium text-foreground text-sm">{sample.label}</p>
        <p className="text-muted-foreground text-xs">{sample.type}</p>
      </motion.div>
    ))}
  </div>
);

export default WorkSection;
