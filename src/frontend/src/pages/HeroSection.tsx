import { Button } from "@/components/ui/button";
import { ChevronRight, Play } from "lucide-react";
import { motion } from "motion/react";

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      data-ocid="hero.section"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1400x700.jpg')",
        }}
      />
      {/* Light overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(oklch(var(--primary) / 0.4) 1px, transparent 1px), linear-gradient(90deg, oklch(var(--primary) / 0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative container mx-auto px-6 lg:px-8 pt-28 pb-20 text-center">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-accent-bright text-xs font-body font-medium tracking-wider uppercase mb-8"
          data-ocid="hero.tag"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Enterprise Software Innovation
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-foreground tracking-tight leading-[1.05] mb-6"
          data-ocid="hero.headline"
        >
          ARUKIEN
          <br />
          <span className="text-accent-bright">TECHNOLOGIES</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          data-ocid="hero.subheadline"
        >
          Building the Future of Enterprise Software.
          <br />
          Scalable, AI-driven solutions for modern business innovation.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="min-w-[160px] font-body font-semibold text-base gap-2 shadow-elevated"
            onClick={() => scrollTo("#contact")}
            data-ocid="hero.cta_primary_button"
          >
            Get Started
            <ChevronRight size={18} />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="min-w-[160px] font-body font-semibold text-base gap-2 border-border hover:bg-muted/50"
            onClick={() => scrollTo("#services")}
            data-ocid="hero.cta_secondary_button"
          >
            <Play size={16} />
            Learn More
          </Button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          data-ocid="hero.stats"
        >
          {[
            { value: "200+", label: "Enterprise Clients" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "12+", label: "Years Experience" },
            { value: "50+", label: "Tech Experts" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center p-4 rounded-xl bg-card border border-border shadow-subtle"
              data-ocid={`hero.stat.${i + 1}`}
            >
              <span className="font-display font-bold text-2xl text-accent-bright">
                {stat.value}
              </span>
              <span className="font-body text-xs text-muted-foreground mt-1 text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => scrollTo("#services")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-smooth"
        aria-label="Scroll down"
        data-ocid="hero.scroll_button"
      >
        <span className="text-xs font-body tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/60 to-transparent" />
      </motion.button>
    </section>
  );
}
