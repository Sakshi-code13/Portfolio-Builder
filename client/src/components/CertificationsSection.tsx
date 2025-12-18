import { certifications, achievements } from "@/data/portfolioData";
import { useInView } from "@/hooks/useInView";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, Trophy, Medal, Calendar, Hash } from "lucide-react";
import { cn } from "@/lib/utils";
import oracleCert from "@assets/Oracle_Cerificate_1765995895358.png";
import oracleBadge from "@assets/OracleBadge_1765995895358.jpg";
import microsoftCert from "@assets/Microsoft_Certificate_1765995895357.png";

const certImages: Record<string, string> = {
  "/certificates/oracle-cert.png": oracleCert,
  "/certificates/oracle-badge.jpg": oracleBadge,
  "/certificates/microsoft-cert.png": microsoftCert,
};

export function CertificationsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="certifications"
      className="py-20 sm:py-24 lg:py-32"
      data-testid="section-certifications"
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
            <span className="bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">
              Certifications & Badges
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications validating expertise in cloud technologies 
            and infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {certifications.map((cert, index) => (
            <Card
              key={cert.name}
              className={cn(
                "p-6 transition-all duration-500 hover:shadow-lg",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
              data-testid={`card-cert-${cert.issuer.toLowerCase()}`}
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="relative group">
                    <img
                      src={certImages[cert.image] || cert.image}
                      alt={cert.name}
                      className="w-full sm:w-48 h-auto rounded-lg border border-border object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {cert.badge && (
                      <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full overflow-hidden border-4 border-background shadow-lg">
                        <img
                          src={certImages[cert.badge] || cert.badge}
                          alt={`${cert.issuer} Badge`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex-1 space-y-3">
                  <div>
                    <Badge className="mb-2 bg-gradient-to-r from-yellow-500 to-amber-500 text-white">
                      {cert.issuer}
                    </Badge>
                    <h3 className="font-semibold text-lg leading-tight">
                      {cert.name}
                    </h3>
                  </div>

                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Earned: {cert.date}</span>
                    </div>
                    {cert.validUntil && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>Valid until: {cert.validUntil}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs">
                      <Hash className="w-4 h-4" />
                      <span className="truncate">{cert.credentialId}</span>
                    </div>
                    {cert.certificationNumber && (
                      <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs">
                        <Hash className="w-4 h-4" />
                        <span>Cert #: {cert.certificationNumber}</span>
                      </div>
                    )}
                  </div>

                  
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div
          className={cn(
            "transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: "300ms" }}
        >
          <h3 className="text-xl font-semibold text-center mb-6">
            <span className="flex items-center justify-center gap-2">
              <Trophy className="w-5 h-5 text-amber-500" />
              Achievements
            </span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {achievements.map((achievement) => (
              <Card
                key={achievement.title}
                className="px-6 py-4 flex items-center gap-3"
                data-testid={`card-achievement-${achievement.title.toLowerCase().replace(/\s+/g, "-").slice(0, 20)}`}
              >
                {achievement.icon === "Trophy" ? (
                  <Trophy className="w-6 h-6 text-amber-500" />
                ) : (
                  <Medal className="w-6 h-6 text-gray-400" />
                )}
                <span className="font-medium">{achievement.title}</span>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
