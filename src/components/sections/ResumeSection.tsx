import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SecondaryTabs from "../SecondaryTabs";
import { Download, FileText, Eye } from "lucide-react";

const secondaryTabs = [
  { id: "preview", label: "Resume Preview" },
  { id: "download", label: "Download Resume" },
];

const ResumeSection = () => {
  const [activeTab, setActiveTab] = useState("preview");

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
          {activeTab === "preview" && <ResumePreview />}
          {activeTab === "download" && <ResumeDownload />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const ResumePreview = () => (
  <div className="glass-panel-elevated rounded-2xl p-8 max-w-3xl">
    <div className="border-b border-border pb-6 mb-6">
      <h2 className="font-display text-3xl font-bold text-foreground">John Doe</h2>
      <p className="text-accent text-lg font-medium">Senior Product & Technology Leader</p>
      <p className="text-muted-foreground mt-2">San Francisco, CA • john@example.com • linkedin.com/in/johndoe</p>
    </div>

    <div className="space-y-6">
      <section>
        <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
          <div className="w-6 h-0.5 bg-accent rounded-full" />
          Professional Summary
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          Seasoned product and technology leader with 15+ years of experience building and scaling digital products. 
          Track record of transforming complex challenges into elegant solutions, leading high-performing teams, 
          and driving significant business impact across startups and Fortune 500 companies.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
          <div className="w-6 h-0.5 bg-accent rounded-full" />
          Experience
        </h3>
        <div className="space-y-4">
          {[
            {
              title: "VP of Product",
              company: "TechScale Inc.",
              period: "2020 - Present",
              highlights: ["Led product strategy resulting in 50x revenue growth", "Built and scaled a 30-person product team", "Launched 8 major product initiatives"],
            },
            {
              title: "Director of Engineering",
              company: "InnovateCo",
              period: "2017 - 2020",
              highlights: ["Modernized platform architecture", "Reduced deployment time by 90%", "Established engineering excellence culture"],
            },
          ].map((job) => (
            <div key={job.title} className="pl-4 border-l-2 border-border">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-foreground">{job.title}</h4>
                  <p className="text-accent text-sm">{job.company}</p>
                </div>
                <span className="text-muted-foreground text-sm">{job.period}</span>
              </div>
              <ul className="mt-2 space-y-1">
                {job.highlights.map((h) => (
                  <li key={h} className="text-muted-foreground text-sm">• {h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
          <div className="w-6 h-0.5 bg-accent rounded-full" />
          Education
        </h3>
        <div className="pl-4 border-l-2 border-border">
          <h4 className="font-semibold text-foreground">MBA, Technology Management</h4>
          <p className="text-accent text-sm">Stanford Graduate School of Business</p>
          <p className="text-muted-foreground text-sm">2008 - 2010</p>
        </div>
      </section>
    </div>
  </div>
);

const ResumeDownload = () => (
  <div className="max-w-md">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-panel-elevated rounded-2xl p-8 text-center"
    >
      <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center">
        <FileText className="w-10 h-10 text-accent" />
      </div>
      
      <h3 className="font-display text-xl font-bold text-foreground mb-2">
        Download My Resume
      </h3>
      <p className="text-muted-foreground text-sm mb-6">
        Get my complete professional history, skills, and achievements in a beautifully formatted PDF.
      </p>

      <div className="space-y-3">
        <button className="btn-hero-primary w-full">
          <Download className="w-4 h-4" />
          Download PDF
        </button>
        <button className="btn-hero-secondary w-full">
          <Eye className="w-4 h-4" />
          View Full Resume
        </button>
      </div>

      <p className="text-muted-foreground text-xs mt-4">
        Last updated: January 2026
      </p>
    </motion.div>
  </div>
);

export default ResumeSection;
