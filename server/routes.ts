import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", message: "Portfolio API is running" });
  });

  app.get("/api/portfolio/info", (_req, res) => {
    res.json({
      name: "Sakshi Jha",
      roles: [
        "DevOps Engineer",
        "Cloud Engineer",
        "Software Development Engineer",
        "Site Reliability Engineer",
        "Front-end Developer"
      ],
      email: "sakshi132728@gmail.com",
      phone: "+919258473367",
      linkedin: "https://www.linkedin.com/in/-sakshi-jha-/",
      github: "https://github.com/Sakshi-code13"
    });
  });

  return httpServer;
}
