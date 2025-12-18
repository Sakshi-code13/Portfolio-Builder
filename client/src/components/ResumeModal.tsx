import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Server, Cloud, Code, Activity, Layout, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const resumeOptions = [
  {
    role: "DevOps Engineer",
    file: "Sakshi_DevOps_Engineer.pdf",
    icon: Server,
    color: "from-blue-500 to-cyan-500",
    description: "CI/CD, Docker, Kubernetes, IaC"
  },
  {
    role: "Cloud Engineer",
    file: "Sakshi_Cloud_Engineer.pdf",
    icon: Cloud,
    color: "from-purple-500 to-pink-500",
    description: "AWS, Azure, Cloud Infrastructure"
  },
  {
    role: "Software Developer",
    file: "Sakshi_Software_Developer.pdf",
    icon: Code,
    color: "from-green-500 to-emerald-500",
    description: "React, Node.js, Full Stack"
  },
  {
    role: "Site Reliability Engineer",
    file: "Sakshi_Site_Reliability_Engineer.pdf",
    icon: Activity,
    color: "from-orange-500 to-red-500",
    description: "Monitoring, SLOs, Reliability"
  },
  {
    role: "Frontend Developer",
    file: "SDE.pdf",
    icon: Layout,
    color: "from-indigo-500 to-violet-500",
    description: "React, CSS, UI/UX, Responsive"
  },
];

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [downloadedResume, setDownloadedResume] = useState<string | null>(null);

  const handleDownload = (file: string, role: string) => {
    const link = document.createElement("a");
    link.href = `/resumes/${file}`;
    link.download = file;
    link.click();
    setDownloadedResume(role);
    setTimeout(() => setDownloadedResume(null), 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg" data-testid="modal-resume">
        <DialogHeader>
          <DialogTitle className="text-xl font-serif flex items-center gap-2">
            <Download className="w-5 h-5" />
            Download Resume
          </DialogTitle>
          <DialogDescription>
            Select a role-specific resume tailored to highlight relevant skills and experience.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-3 py-4">
          {resumeOptions.map((option) => {
            const IconComponent = option.icon;
            const isDownloaded = downloadedResume === option.role;

            return (
              <Card
                key={option.role}
                className={cn(
                  "p-4 cursor-pointer transition-all duration-300 hover-elevate",
                  isDownloaded && "ring-2 ring-green-500"
                )}
                onClick={() => handleDownload(option.file, option.role)}
                data-testid={`card-resume-${option.role.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br text-white transition-transform",
                      option.color,
                      isDownloaded && "scale-110"
                    )}
                  >
                    {isDownloaded ? (
                      <Check className="w-6 h-6" />
                    ) : (
                      <IconComponent className="w-6 h-6" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{option.role}</h4>
                    <p className="text-sm text-muted-foreground">
                      {option.description}
                    </p>
                  </div>
                  <Download className="w-5 h-5 text-muted-foreground" />
                </div>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-end">
          <Button variant="outline" onClick={onClose} data-testid="button-close-modal">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
