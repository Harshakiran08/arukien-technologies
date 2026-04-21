import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const HIGHLIGHTS = [
  "Enterprise-grade software architecture",
  "AI-powered automation and intelligence",
  "Scalable cloud-native solutions",
  "24/7 dedicated support and monitoring",
  "ISO 27001 certified security practices",
  "Agile delivery with measurable outcomes",
];

const MILESTONES = [
  {
    year: "2012",
    title: "Founded",
    desc: "Established with a mission to transform enterprise software.",
  },
  {
    year: "2016",
    title: "Global Reach",
    desc: "Expanded to serve clients across 3 continents.",
  },
  {
    year: "2019",
    title: "AI Division",
    desc: "Launched dedicated AI & Machine Learning practice.",
  },
  {
    year: "2024",
    title: "200+ Clients",
    desc: "Serving over 200 enterprise organizations worldwide.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/20" data-ocid="about.section">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Badge
              variant="secondary"
              className="mb-4 font-body text-xs tracking-widest uppercase px-4 py-1"
            >
              Who We Are
            </Badge>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              Pioneering Enterprise
              <br />
              <span className="text-accent-bright">Digital Transformation</span>
            </h2>
            <p className="font-body text-muted-foreground text-base leading-relaxed mb-6">
              Arukien Technologies is a premier enterprise software company
              specializing in AI implementation, cloud infrastructure, and
              scalable digital solutions. Since 2012, we've helped industry
              leaders modernize their operations and unlock new revenue streams
              through technology.
            </p>
            <p className="font-body text-muted-foreground text-base leading-relaxed mb-8">
              Our cross-functional teams combine deep domain expertise with
              cutting-edge engineering to deliver solutions that are not just
              functional — but transformational.
            </p>

            {/* Highlights */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {HIGHLIGHTS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 font-body text-sm text-foreground"
                >
                  <CheckCircle2
                    size={16}
                    className="text-accent-bright mt-0.5 shrink-0"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — milestones timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-8 pl-20" data-ocid="about.milestones">
              {MILESTONES.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                  data-ocid={`about.milestone.${i + 1}`}
                >
                  {/* Dot */}
                  <div className="absolute -left-[3.25rem] top-2 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>

                  <div className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-smooth">
                    <span className="font-mono text-xs text-accent-bright font-semibold tracking-widest">
                      {m.year}
                    </span>
                    <h4 className="font-display font-semibold text-foreground text-base mt-1 mb-1">
                      {m.title}
                    </h4>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
