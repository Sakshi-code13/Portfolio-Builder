import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Coding", href: "#coding" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

interface NavigationProps {
  onResumeClick: () => void;
}

export function Navigation({ onResumeClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-transparent"
      )}
      data-testid="nav-main"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#about");
            }}
            className="font-serif font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
            data-testid="link-home"
          >
            Sakshi.
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  activeSection === link.href.slice(1)
                    ? "text-foreground bg-accent"
                    : "text-muted-foreground hover:text-foreground"
                )}
                data-testid={`link-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
            <Button
              size="sm"
              onClick={onResumeClick}
              className="ml-2 bg-gradient-to-r from-blue-500 to-purple-500"
              data-testid="button-resume-nav"
            >
              <Download className="w-4 h-4 mr-1" />
              Resume
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-background/95 backdrop-blur-lg border-b border-border",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                activeSection === link.href.slice(1)
                  ? "text-foreground bg-accent"
                  : "text-muted-foreground"
              )}
              data-testid={`link-mobile-nav-${link.name.toLowerCase()}`}
            >
              {link.name}
            </a>
          ))}
          <Button
            size="sm"
            onClick={() => {
              setIsMobileMenuOpen(false);
              onResumeClick();
            }}
            className="w-full mt-2 bg-gradient-to-r from-blue-500 to-purple-500"
            data-testid="button-resume-mobile"
          >
            <Download className="w-4 h-4 mr-1" />
            Download Resume
          </Button>
        </div>
      </div>
    </nav>
  );
}
