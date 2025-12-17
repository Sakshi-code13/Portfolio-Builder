import { codingProfiles } from "@/data/portfolioData";
import { useInView } from "@/hooks/useInView";
import { Card } from "@/components/ui/card";
import { Code2, Terminal, ChefHat, BookOpen, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, typeof Code2> = {
  Code2,
  Terminal,
  ChefHat,
  BookOpen,
};

export function CodingProfiles() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="coding"
      className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-background to-accent/20"
      data-testid="section-coding"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={cn(
            "text-center mb-12 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Coding Profiles
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Active on multiple competitive programming platforms. Click on any card 
            to visit my profile and see my problem-solving journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {codingProfiles.map((profile, index) => {
            const IconComponent = iconMap[profile.icon];

            return (
              <a
                key={profile.platform}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group block transition-all duration-500",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
                data-testid={`link-coding-${profile.platform.toLowerCase()}`}
              >
                <Card className="p-6 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-visible">
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        "w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br text-white transition-transform duration-300 group-hover:scale-110",
                        profile.color
                      )}
                    >
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-lg">{profile.platform}</h3>
                        <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-sm text-muted-foreground font-mono truncate">
                        @{profile.username}
                      </p>
                    </div>
                  </div>
                  <div
                    className={cn(
                      "mt-4 h-1.5 rounded-full bg-gradient-to-r opacity-50 group-hover:opacity-100 transition-opacity",
                      profile.color
                    )}
                  />
                </Card>
              </a>
            );
          })}
        </div>

        <div
          className={cn(
            "mt-8 text-center text-sm text-muted-foreground transition-all duration-700",
            isInView ? "opacity-100" : "opacity-0"
          )}
          style={{ transitionDelay: "400ms" }}
        >
          <p>
            Practicing Data Structures & Algorithms across multiple platforms 
            to sharpen problem-solving skills.
          </p>
        </div>
      </div>
    </section>
  );
}
