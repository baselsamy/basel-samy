import { motion } from "framer-motion";

interface SecondaryTabsProps {
  tabs: { id: string; label: string }[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const SecondaryTabs = ({ tabs, activeTab, onTabChange }: SecondaryTabsProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`tab-secondary relative ${activeTab === tab.id ? "tab-secondary-active" : ""}`}
        >
          {tab.label}
          {activeTab === tab.id && (
            <motion.div
              layoutId="secondaryTabBg"
              className="absolute inset-0 bg-primary rounded-lg -z-10"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default SecondaryTabs;
