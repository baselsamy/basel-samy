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
      <SecondaryTabs tabs={secondaryTabs} activeTab={activeTab} onTabChange={setActiveTab} />

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
        Crafting Digital Excellence
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        I'm a seasoned product and technology leader with over 15 years of experience building 
        and scaling digital products. My journey spans from early-stage startups to Fortune 500 
        companies, always with a focus on creating meaningful user experiences.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Currently based in San Francisco, I work with innovative companies to define product 
        strategy, build high-performing teams, and deliver solutions that make a real impact.
      </p>
    </div>
    <div className="glass-panel rounded-2xl p-6 space-y-4">
      <h4 className="font-semibold text-foreground">Quick Facts</h4>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-muted-foreground">Location</span>
          <p className="font-medium text-foreground">San Francisco, CA</p>
        </div>
        <div>
          <span className="text-muted-foreground">Experience</span>
          <p className="font-medium text-foreground">15+ Years</p>
        </div>
        <div>
          <span className="text-muted-foreground">Specialization</span>
          <p className="font-medium text-foreground">Product & Engineering</p>
        </div>
        <div>
          <span className="text-muted-foreground">Availability</span>
          <p className="font-medium text-accent">Open to opportunities</p>
        </div>
      </div>
    </div>
  </div>
);

const ExperienceHighlights = () => (
  <div className="space-y-6">
    <div className="grid md:grid-cols-3 gap-4">
      {[
        { metric: "50M+", label: "Users Impacted", icon: <Target className="w-6 h-6" /> },
        { metric: "12", label: "Products Launched", icon: <Award className="w-6 h-6" /> },
        { metric: "$200M+", label: "Revenue Generated", icon: <Heart className="w-6 h-6" /> },
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
          <p className="font-display text-3xl font-bold text-foreground">{item.metric}</p>
          <p className="text-muted-foreground text-sm mt-1">{item.label}</p>
        </motion.div>
      ))}
    </div>

    <div className="glass-panel rounded-2xl p-6">
      <h4 className="font-semibold text-foreground mb-4">Career Timeline</h4>
      <div className="space-y-4">
        {[
          { year: "2020-Present", role: "VP of Product", company: "TechScale Inc." },
          { year: "2017-2020", role: "Director of Engineering", company: "InnovateCo" },
          { year: "2014-2017", role: "Senior Product Manager", company: "StartupXYZ" },
          { year: "2010-2014", role: "Software Engineer", company: "Enterprise Corp" },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-4">
            <span className="text-sm text-accent font-medium min-w-[120px]">{item.year}</span>
            <div>
              <p className="font-medium text-foreground">{item.role}</p>
              <p className="text-muted-foreground text-sm">{item.company}</p>
            </div>
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
        title: "User-Centric Design",
        description: "Every decision starts with understanding the user. I believe in building products that solve real problems elegantly.",
      },
      {
        title: "Data-Driven Decisions",
        description: "Intuition informed by data. I combine quantitative insights with qualitative research to make impactful decisions.",
      },
      {
        title: "Collaborative Leadership",
        description: "Great products come from great teams. I focus on building environments where creativity and excellence thrive.",
      },
      {
        title: "Continuous Learning",
        description: "The tech landscape evolves rapidly. I stay curious, experiment often, and embrace new challenges as opportunities.",
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
        <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
      </motion.div>
    ))}
  </div>
);

export default OverviewSection;
