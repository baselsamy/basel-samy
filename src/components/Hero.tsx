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
                Product & Program Delivery Leader
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed"
            >
              I work on complex product and program initiatives where strategy
              needs to translate into clear plans, execution, and measurable
              outcomes. With 12+ years of experience across technology,
              education, and marketplace environments, I help teams move from
              ambiguity to delivery through focused execution and
              insight-driven decisions.
            </motion.p>

            <p className="text-muted-foreground text-sm md:text-base max-w-2xl">
              My work sits at the intersection of product thinking, program
              management, and data-informed execution — supporting teams as they
              prioritise, deliver, and learn in complex, cross-functional
              environments.
            </p>

            <p className="text-emerald-600 font-medium text-sm md:text-base">
              Open to full-time roles & consulting work
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
