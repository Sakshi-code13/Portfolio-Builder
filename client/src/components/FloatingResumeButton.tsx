import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingResumeButtonProps {
  onClick: () => void;
}

export function FloatingResumeButton({ onClick }: FloatingResumeButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Button
      onClick={onClick}
      className={cn(
        "fixed bottom-6 right-6 z-40 rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
      size="lg"
      data-testid="button-floating-resume"
    >
      <Download className="w-5 h-5 mr-2" />
      Resume
    </Button>
  );
}
