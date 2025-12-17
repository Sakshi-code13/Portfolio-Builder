import { interpersonalSkills } from "@/data/portfolioData";
import { useInView } from "@/hooks/useInView";
import {
  Users, Crown, ClipboardList, Target,
  Lightbulb, MessageCircle, Puzzle, Brain
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, typeof Users> = {
  Users,
  Crown,
  ClipboardList,
  Target,
  Lightbulb,
  MessageCircle,
  Puzzle,
  Brain,
};

const gradientColors = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-green-500 to-emerald-500",
  "from-orange-500 to-red-500",
  "from-indigo-500 to-violet-500",
  "from-amber-500 to-yellow-500",
  "from-rose-500 to-pink-500",
  "from-teal-500 to-cyan-500",
];

export function InterpersonalSkills() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="interpersonal"
      className="py-20 sm:py-24 lg:py-32"
      data-testid="section-interpersonal"
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
            <span className="bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">
              Interpersonal Skills
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Beyond technical expertise, these soft skills drive successful collaboration 
            and project delivery. Hover over each card to see real-world applications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {interpersonalSkills.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            const gradientColor = gradientColors[index % gradientColors.length];

            return (
              <div
                key={item.skill}
                className={cn(
                  "group perspective-1000 h-48 transition-all duration-500",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 75}ms` }}
                data-testid={`card-interpersonal-${item.skill.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                  <div className="absolute inset-0 backface-hidden">
                    <div className="h-full rounded-lg border border-border bg-card p-6 flex flex-col items-center justify-center text-center shadow-sm">
                      <div
                        className={cn(
                          "w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br text-white mb-4",
                          gradientColor
                        )}
                      >
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <h3 className="font-semibold text-lg">{item.skill}</h3>
                      <p className="text-xs text-muted-foreground mt-2">
                        Hover to see example
                      </p>
                    </div>
                  </div>

                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <div
                      className={cn(
                        "h-full rounded-lg p-4 flex items-center justify-center text-center bg-gradient-to-br text-white shadow-lg",
                        gradientColor
                      )}
                    >
                      <p className="text-sm leading-relaxed">
                        {item.example}
                      </p>
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
