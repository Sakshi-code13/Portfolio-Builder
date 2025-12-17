import { education } from "@/data/portfolioData";
import { useInView } from "@/hooks/useInView";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const icons = [GraduationCap, Award, BookOpen];

export function EducationTimeline() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="education"
      className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-accent/20 to-background"
      data-testid="section-education"
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
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey from CBSE schooling to Computer Science Engineering 
            with specialization in DevOps.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-orange-500 to-red-500 transform sm:-translate-x-1/2" />

          <div className="space-y-8 sm:space-y-12">
            {education.map((edu, index) => {
              const IconComponent = icons[index];
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={edu.degree}
                  className={cn(
                    "relative flex items-center transition-all duration-700",
                    isInView ? "opacity-100" : "opacity-0",
                    isInView && isLeft ? "sm:translate-x-0" : "",
                    isInView && !isLeft ? "sm:translate-x-0" : "",
                    !isInView && isLeft ? "sm:-translate-x-8" : "",
                    !isInView && !isLeft ? "sm:translate-x-8" : ""
                  )}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  data-testid={`timeline-item-${index}`}
                >
                  <div className="absolute left-8 sm:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 transform -translate-x-1/2 z-10 ring-4 ring-background" />

                  <div
                    className={cn(
                      "ml-16 sm:ml-0 w-full sm:w-[calc(50%-2rem)]",
                      isLeft ? "sm:mr-auto sm:pr-8" : "sm:ml-auto sm:pl-8"
                    )}
                  >
                    <Card className="p-6 hover-elevate transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white flex-shrink-0">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                              {edu.period}
                            </Badge>
                            <Badge variant="outline" className="font-bold">
                              {edu.score}
                            </Badge>
                          </div>
                          <h3 className="font-semibold text-lg leading-tight mb-1">
                            {edu.degree}
                          </h3>
                          {edu.specialization && (
                            <p className="text-sm text-muted-foreground mb-1">
                              {edu.specialization}
                            </p>
                          )}
                          <p className="text-sm text-muted-foreground">
                            {edu.institution}
                          </p>
                          {edu.board && (
                            <p className="text-xs text-muted-foreground mt-1">
                              {edu.board} Board
                            </p>
                          )}
                          {edu.courses && (
                            <div className="flex flex-wrap gap-1 mt-3">
                              {edu.courses.map((course) => (
                                <Badge
                                  key={course}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {course}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
