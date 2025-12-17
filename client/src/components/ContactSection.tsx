import { personalInfo } from "@/data/portfolioData";
import { useInView } from "@/hooks/useInView";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import { SiWhatsapp, SiLinkedin, SiGithub } from "react-icons/si";
import { cn } from "@/lib/utils";

const contactMethods = [
  {
    name: "Phone",
    icon: Phone,
    value: personalInfo.phone,
    action: () => {
      window.location.href = `tel:${personalInfo.phone}`;
    },
    color: "from-blue-500 to-cyan-500",
    description: "Call me directly"
  },
  {
    name: "WhatsApp",
    icon: SiWhatsapp,
    value: personalInfo.phone,
    action: () => {
      window.open(
        `https://wa.me/${personalInfo.phone.replace("+", "")}?text=Hi Sakshi! I found your portfolio and would like to connect with you.`,
        "_blank"
      );
    },
    color: "from-green-500 to-emerald-500",
    description: "Send a message"
  },
  {
    name: "Email",
    icon: Mail,
    value: personalInfo.email,
    action: () => {
      window.location.href = `mailto:${personalInfo.email}?subject=Portfolio Inquiry&body=Hi Sakshi,%0D%0A%0D%0AI found your portfolio and would like to connect with you.`;
    },
    color: "from-red-500 to-rose-500",
    description: "Drop me an email"
  },
  {
    name: "LinkedIn",
    icon: SiLinkedin,
    value: "Sakshi Jha",
    action: () => {
      window.open(personalInfo.linkedin, "_blank");
    },
    color: "from-blue-600 to-blue-400",
    description: "Connect professionally"
  },
  {
    name: "GitHub",
    icon: SiGithub,
    value: "Sakshi-code13",
    action: () => {
      window.open(personalInfo.github, "_blank");
    },
    color: "from-gray-700 to-gray-500",
    description: "View my code"
  },
];

export function ContactSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-accent/20 to-background"
      data-testid="section-contact"
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
            <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about tech. 
            Reach out through any of the channels below!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;

            return (
              <Card
                key={method.name}
                className={cn(
                  "p-6 cursor-pointer transition-all duration-500 hover:shadow-lg hover:-translate-y-1 text-center",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 75}ms` }}
                onClick={method.action}
                data-testid={`card-contact-${method.name.toLowerCase()}`}
              >
                <div
                  className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br text-white mx-auto mb-4 transition-transform hover:scale-110",
                    method.color
                  )}
                >
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{method.name}</h3>
                <p className="text-sm text-muted-foreground mb-1">{method.description}</p>
                <p className="text-xs font-mono text-muted-foreground/70 truncate">
                  {method.value}
                </p>
              </Card>
            );
          })}
        </div>

        <div
          className={cn(
            "text-center transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: "400ms" }}
        >
          <Card className="inline-block p-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{personalInfo.location}</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
