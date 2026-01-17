import { motion } from "framer-motion";
import { Download, Mail, Linkedin, Github } from "lucide-react";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="w-full py-10 md:py-14 bg-gradient-to-b from-secondary/30 to-background"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border-2 border-accent/30 flex items-center justify-center overflow-hidden">
              <span className="font-display text-4xl md:text-5xl text-accent font-bold">
                BS
              </span>
            </div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-green-500 border-4 border-background" />
          </motion.div>

          {/* Info */}
          <div className="flex-1 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                Basel Samy
              </h1>
              <p className="text-lg md:text-xl text-accent font-medium mt-1">
                Senior Product, Program & Operations Leader
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed"
            >
              I design and scale complex programs and operating models that turn
              executive strategy into real-world outcomes. With 12+ years of
              experience across technology, education, AI, and marketplaces,
              I’ve led multi-million-dollar portfolios, launched products at
              national scale, and built the systems, teams, and KPIs that make
              growth sustainable.
            </motion.p>

            <p className="text-muted-foreground text-sm md:text-base max-w-2xl">
              I work at the intersection of strategy, product, and delivery —
              where clarity, execution, and impact matter most.
            </p>

            <p className="text-emerald-600 font-medium text-sm md:text-base">
              Available for consulting, contract, and senior leadership roles
            </p>

            {/* CTAs and Social */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="https://drive.google.com/file/d/15zgXCD9ew3pfV8AuoDNMMaKPaynRWmrX/view"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-primary inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>

              <button className="btn-hero-secondary inline-flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Hire Me
              </button>

              <div className="flex items-center gap-2 ml-auto md:ml-4">
                <a
                  href="https://www.linkedin.com/in/baselsamy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/baselsamy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
