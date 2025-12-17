import { projects } from "@/data/portfolioData";
import { useInView } from "@/hooks/useInView";
import { Badge } from "@/components/ui/badge";
import { 
  Server, ShoppingCart, Utensils, Heart, Shield, Watch,
  ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils";

const projectIcons: Record<string, typeof Server> = {
  "DevOps Quest": Server,
  "E-Commerce Website": ShoppingCart,
  "FOODISTA": Utensils,
  "Patient Care System": Heart,
  "Cyber Attacks on UPI": Shield,
  "Smart Rings Research": Watch,
};

const categoryColors: Record<string, string> = {
  DevOps: "from-blue-500 to-cyan-500",
  Frontend: "from-indigo-500 to-violet-500",
  "Full Stack": "from-purple-500 to-pink-500",
  Healthcare: "from-red-500 to-rose-500",
  Research: "from-amber-500 to-orange-500",
};

export function ProjectsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="projects"
      className="py-20 sm:py-24 lg:py-32"
      data-testid="section-projects"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={cn(
            "text-center mb-12 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Projects & Research
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of hands-on projects spanning DevOps, full-stack development, 
            healthcare tech, and academic research. Hover to explore features and tech stack.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const IconComponent = projectIcons[project.name] || Server;
            const gradientColor = categoryColors[project.category] || "from-gray-500 to-slate-500";

            return (
              <div
                key={project.name}
                className={cn(
                  "group perspective-1000 h-72 transition-all duration-500",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
                data-testid={`card-project-${project.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                  <div className="absolute inset-0 backface-hidden">
                    <div className="h-full rounded-lg border border-border bg-card p-6 flex flex-col shadow-sm">
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={cn(
                            "w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br text-white",
                            gradientColor
                          )}
                        >
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {project.category}
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-lg mb-1">{project.name}</h3>
                      <p className="text-xs text-muted-foreground mb-2">{project.type}</p>
                      <p className="text-sm text-muted-foreground flex-1 line-clamp-3">
                        {project.description}
                      </p>
                      <p className="text-xs text-muted-foreground mt-4">
                        {project.period}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2 italic">
                        Hover to see features
                      </p>
                    </div>
                  </div>

                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <div
                      className={cn(
                        "h-full rounded-lg p-5 flex flex-col bg-gradient-to-br text-white shadow-lg overflow-y-auto",
                        gradientColor
                      )}
                    >
                      <h4 className="font-semibold text-sm uppercase tracking-wider mb-3 opacity-90">
                        Key Features
                      </h4>
                      <ul className="space-y-2 flex-1 text-sm">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0" />
                            <span className="opacity-95">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 pt-3 border-t border-white/20">
                        <p className="text-xs uppercase tracking-wider mb-2 opacity-75">
                          Tech Stack
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.tech.slice(0, 5).map((t) => (
                            <span
                              key={t}
                              className="text-xs px-2 py-0.5 rounded-full bg-white/20"
                            >
                              {t}
                            </span>
                          ))}
                          {project.tech.length > 5 && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-white/20">
                              +{project.tech.length - 5}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
