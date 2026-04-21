import { Badge } from "@/components/ui/badge";
import { Linkedin, Twitter } from "lucide-react";
import { motion } from "motion/react";

const TEAM = [
  {
    id: "1",
    name: "Ian Hamcs",
    role: "Chief Executive Officer",
    bio: "Ian is a profhensible transformative change agent providing inspirational direction to the team and drive enterprise growth.",
    initials: "IH",
    gradient: "from-primary/80 to-accent/60",
  },
  {
    id: "2",
    name: "Mattie Heistein",
    role: "CTO",
    bio: "Three boonera fan bar bial optimization that creates artificial solutions and provides all inclusive cloud on technology.",
    initials: "MH",
    gradient: "from-secondary/80 to-primary/60",
  },
  {
    id: "3",
    name: "John Borish",
    role: "VP Engineering",
    bio: "Anderson as an entrepreneur once helped to build and transform cloud solutions that combine AI and blockchain technology.",
    initials: "JB",
    gradient: "from-accent/70 to-secondary/50",
  },
  {
    id: "4",
    name: "Jahn Colnes",
    role: "CXO",
    bio: "Janhier is a commissioned at an impressive consumer enterprise domain and banking technology to scale international company.",
    initials: "JC",
    gradient: "from-primary/60 to-accent/80",
  },
  {
    id: "5",
    name: "Sbert Wattson",
    role: "Lead Architect",
    bio: "Develops a professional-scale data technology to organize, compile and network to leverage digital transformation strategy.",
    initials: "SW",
    gradient: "from-secondary/60 to-primary/70",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-24 bg-background" data-ocid="team.section">
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
            Our People
          </Badge>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            Visionary leaders and engineers driving the next generation of
            enterprise technology.
          </p>
        </motion.div>

        {/* Team grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          data-ocid="team.list"
        >
          {TEAM.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-elevated overflow-hidden transition-smooth"
              data-ocid={`team.item.${i + 1}`}
            >
              {/* Avatar area */}
              <div
                className={`relative h-36 bg-gradient-to-br ${member.gradient} flex items-center justify-center`}
              >
                <div className="w-16 h-16 rounded-full bg-background/20 backdrop-blur-sm border-2 border-foreground/20 flex items-center justify-center">
                  <span className="font-display font-bold text-xl text-foreground">
                    {member.initials}
                  </span>
                </div>
                {/* Social links */}
                <div className="absolute bottom-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-smooth">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="w-7 h-7 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary transition-smooth"
                  >
                    <Linkedin size={12} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter"
                    className="w-7 h-7 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary transition-smooth"
                  >
                    <Twitter size={12} />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-display font-semibold text-foreground text-sm mb-0.5">
                  {member.name}
                </h3>
                <span className="font-body text-xs text-accent-bright font-medium mb-2">
                  {member.role}
                </span>
                <p className="font-body text-xs text-muted-foreground leading-relaxed line-clamp-3">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
