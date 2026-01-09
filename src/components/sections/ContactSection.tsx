import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SecondaryTabs from "../SecondaryTabs";
import { Send, Calendar, Linkedin, Github, Twitter, Mail } from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const secondaryTabs = [
  { id: "form", label: "Contact Form" },
  { id: "call", label: "Book a Call" },
  { id: "social", label: "Social Links" },
];

const ContactSection = () => {
  const [activeTab, setActiveTab] = useState("form");

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
          {activeTab === "form" && <ContactForm />}
          {activeTab === "call" && <BookCall />}
          {activeTab === "social" && <SocialLinks />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-xl"
    >
      <div className="glass-panel-elevated rounded-2xl p-8">
        <h3 className="font-display text-2xl font-bold text-foreground mb-2">
          Let's Connect
        </h3>
        <p className="text-muted-foreground mb-6">
          Have a project in mind or just want to chat? I'd love to hear from you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
              <Input
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-secondary/50 border-border"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
              <Input
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-secondary/50 border-border"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Subject</label>
            <Input
              placeholder="What's this about?"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="bg-secondary/50 border-border"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
            <Textarea
              placeholder="Tell me about your project..."
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-secondary/50 border-border resize-none"
            />
          </div>
          <button type="submit" className="btn-hero-primary w-full">
            <Send className="w-4 h-4" />
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  );
};

const BookCall = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="max-w-md"
  >
    <div className="glass-panel-elevated rounded-2xl p-8 text-center">
      <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center">
        <Calendar className="w-10 h-10 text-accent" />
      </div>
      
      <h3 className="font-display text-2xl font-bold text-foreground mb-2">
        Schedule a Call
      </h3>
      <p className="text-muted-foreground mb-6">
        Book a 30-minute discovery call to discuss your project needs and how I can help.
      </p>

      <button className="btn-hero-primary w-full">
        <Calendar className="w-4 h-4" />
        Book on Calendly
      </button>

      <p className="text-muted-foreground text-sm mt-4">
        Free 30-minute consultation • No obligation
      </p>
    </div>
  </motion.div>
);

const SocialLinks = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="max-w-md"
  >
    <div className="space-y-4">
      {[
        { icon: <Linkedin className="w-6 h-6" />, name: "LinkedIn", handle: "@johndoe", url: "https://linkedin.com" },
        { icon: <Github className="w-6 h-6" />, name: "GitHub", handle: "@johndoe", url: "https://github.com" },
        { icon: <Twitter className="w-6 h-6" />, name: "Twitter", handle: "@johndoe", url: "https://twitter.com" },
        { icon: <Mail className="w-6 h-6" />, name: "Email", handle: "john@example.com", url: "mailto:john@example.com" },
      ].map((social, i) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="glass-panel rounded-xl p-4 flex items-center gap-4 group hover:border-accent/30 transition-all block"
        >
          <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
            {social.icon}
          </div>
          <div>
            <p className="font-semibold text-foreground">{social.name}</p>
            <p className="text-muted-foreground text-sm">{social.handle}</p>
          </div>
        </motion.a>
      ))}
    </div>
  </motion.div>
);

export default ContactSection;
