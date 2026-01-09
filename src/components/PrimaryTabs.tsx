import { motion } from "framer-motion";
import { User, Layers, Briefcase, Sparkles, FileText, MessageCircle } from "lucide-react";

export type PrimaryTab = "overview" | "skills" | "work" | "services" | "resume" | "contact";

interface PrimaryTabsProps {
  activeTab: PrimaryTab;
  onTabChange: (tab: PrimaryTab) => void;
}

const tabs: { id: PrimaryTab; label: string; icon: React.ReactNode }[] = [
  { id: "overview", label: "Overview", icon: <User className="w-5 h-5" /> },
  { id: "skills", label: "Skills", icon: <Layers className="w-5 h-5" /> },
  { id: "work", label: "Work", icon: <Briefcase className="w-5 h-5" /> },
  { id: "services", label: "Services", icon: <Sparkles className="w-5 h-5" /> },
  { id: "resume", label: "Resume", icon: <FileText className="w-5 h-5" /> },
  { id: "contact", label: "Contact", icon: <MessageCircle className="w-5 h-5" /> },
];

const PrimaryTabs = ({ activeTab, onTabChange }: PrimaryTabsProps) => {
  return (
    <div className="w-full border-y border-border bg-card/80 backdrop-blur-xl sticky top-0 z-40">
      <div className="max-w-5xl mx-auto px-6">
        <nav className="flex items-center justify-center gap-2 overflow-x-auto scrollbar-hide py-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative px-5 py-3.5 text-base font-medium transition-all duration-300 flex items-center gap-2.5 whitespace-nowrap rounded-xl ${
                activeTab === tab.id 
                  ? "text-foreground bg-secondary/80" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
              }`}
            >
              <span className={activeTab === tab.id ? "text-accent" : ""}>{tab.icon}</span>
              <span>{tab.label}</span>
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default PrimaryTabs;
