import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const SERVICES = [
  {
    id: "ai",
    icon: "🤖",
    title: "AI Implementation",
    description:
      "AI representations customized to automatically optimize business operations and unlock exponentially improved competitive advantages and operations.",
  },
  {
    id: "cloud",
    icon: "☁️",
    title: "Cloud Infrastructure",
    description:
      "Cloud creators and cloud infrastructure services. Build resilient, scalable cloud environments that grow with your business and reduce operational overhead.",
  },
  {
    id: "data",
    icon: "📊",
    title: "Data Analytics",
    description:
      "Transform raw data into actionable business intelligence. Advanced analytics, visualization, and machine learning for data-driven decision making.",
  },
  {
    id: "cyber",
    icon: "🛡️",
    title: "Cyber Security",
    description:
      "Comprehensive proton security combining proactive threat detection and automated remediation to protect your critical digital assets and infrastructure.",
  },
  {
    id: "custom",
    icon: "⚙️",
    title: "Custom Development",
    description:
      "Custom development solutions tailored to compete and outcompete. Enterprise-grade software built to your exact specifications and requirements.",
  },
  {
    id: "devsecops",
    icon: "🔄",
    title: "DevSecOps",
    description:
      "DevSecOps on-time development to empower enterprise teams. Integrate security seamlessly into every stage of your development lifecycle.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 bg-background"
      data-ocid="services.section"
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge
            variant="secondary"
            className="mb-4 font-body text-xs tracking-widest uppercase px-4 py-1"
          >
            What We Do
          </Badge>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Our Services
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            End-to-end technology services that accelerate growth and drive
            digital transformation.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="services.list"
        >
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-elevated transition-smooth cursor-pointer"
              data-ocid={`services.item.${i + 1}`}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-2xl mb-4 group-hover:bg-primary/20 transition-smooth">
                {service.icon}
              </div>

              {/* Text */}
              <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-accent-bright transition-smooth">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {service.description}
              </p>

              {/* CTA */}
              <div className="mt-4 flex items-center gap-1.5 text-sm font-body font-medium text-accent-bright opacity-0 group-hover:opacity-100 transition-smooth">
                Explore Service
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-smooth"
                />
              </div>

              {/* Accent border glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
