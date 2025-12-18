export const personalInfo = {
  name: "Sakshi",
  fullName: "Sakshi Jha",
  tagline: "Building the infrastructure of tomorrow, one pipeline at a time",
  email: "sakshi132728@gmail.com",
  phone: "+919258473367",
  location: "Vadodara, Gujarat, India",
  dob: "13th February 2003",
  linkedin: "https://www.linkedin.com/in/-sakshi-jha-/",
  github: "https://github.com/Sakshi-code13",
  portfolio: "https://sakshi-code13.github.io/Portfolio/",
};

export const roles = [
  "DevOps Engineer",
  "Cloud Engineer",
  "Software Development Engineer",
  "Site Reliability Engineer",
  "Front-end Developer",
];

export const professionalSummary = `Computer Science Engineering student specializing in DevOps, with hands-on experience in AWS, Azure, Docker, Kubernetes, and various cloud-native tools. Strong in problem-solving, team collaboration, and delivering scalable, cloud-based solutions that drive real business impact.`;

export const technicalSkillsData = {
  devops: {
    title: "DevOps Engineer",
    icon: "Server",
    color: "from-blue-500 to-cyan-500",
    skills: [
      "AWS (EC2, S3, Lambda, VPC)", "Azure (Monitor, DevOps)", "GCP", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "GitLab CI/CD",
      "Terraform", "Ansible", "Prometheus", "Grafana", "ELK Stack",
      "Python", "Bash Scripting", "PowerShell", "Linux (RHEL, Ubuntu)", "Shell Scripting", "Version Control Systems (Git)", "Continuous Integration", "Root Cause Analysis", "Troubleshooting",
      "Pipeline Management"
    ],
    projects: [
      {
        name: "DevOps Quest",
        description: "Gamified learning platform with CI/CD pipelines using Jenkins and GitHub Actions",
        tech: ["React", "Firebase", "MongoDB", "Docker", "Kubernetes"],
        highlight: "Reduced deployment errors by 90%"
      },
      {
        name: "E-Commerce Website",
        description: "Dockerized deployment with security best practices and DevSecOps integration",
        tech: ["Docker", "NGINX", "Python", "Bash"],
        highlight: "Integrated security checks into pipeline"
      }
    ],
    certifications: [
      { name: "Oracle Cloud Infrastructure GenAI Professional", year: "2024" },
      { name: "Microsoft Azure Fundamentals", year: "2023" }
    ],
    resumeFile: "Sakshi_DevOps_Engineer.pdf"
  },
  cloud: {
    title: "Cloud Engineer",
    icon: "Cloud",
    color: "from-purple-500 to-pink-500",
    skills: [
      "Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform (GCP)",
      "Jenkins", "GitHub Actions", "Azure DevOps", "Docker", "Kubernetes", "Git",
      "Terraform", "CloudFormation", "Ansible", "Python", "Bash Scripting",
      "RDS", "DynamoDB", "S3", "Blob Storage", "Cloud Database Management",
      "CloudWatch", "Prometheus", "Grafana", "Azure Monitor",
      "IAM Policy Enforcement", "Linux/Windows Admin", "Security Groups", "VPC"
    ],
    projects: [
      {
        name: "DevOps Quest",
        description: "Deployed on AWS and Azure using Terraform and CloudFormation",
        tech: ["AWS", "Azure", "Terraform", "CloudFormation"],
        highlight: "Multi-cloud deployment architecture"
      },
      {
        name: "FOODISTA",
        description: "Optimized Azure cloud infrastructure for 500+ daily users",
        tech: ["Azure", "Cloud Infrastructure"],
        highlight: "99.9% system uptime achieved"
      }
    ],
    certifications: [
      { name: "Oracle Cloud Infrastructure GenAI Professional", year: "2024" },
      { name: "Microsoft Azure Fundamentals", year: "2023" }
    ],
    resumeFile: "Sakshi_Cloud_Engineer.pdf"
  },
  sde: {
    title: "Software Development Engineer",
    icon: "Code",
    color: "from-green-500 to-emerald-500",
    skills: [
      "C++", "C", "JavaScript (ES6+)", "Python", "Bash Scripting", "React.js",
      "HTML5", "CSS3", "Node.js", "JSON", "RESTful APIs", "MySQL", "MongoDB",
      "Data Structures & Algorithms(DSA)", "Git", "Docker", "Jenkins", "AWS (EC2, S3)", "Linux", "VS Code"
    ],
    projects: [
      {
        name: "DevOps Quest",
        description: "Interactive web platform using React, Firebase, and MongoDB",
        tech: ["React", "Node.js", "Firebase", "MongoDB"],
        highlight: "Reduced load times by 25%, increased retention by 30%"
      },
      {
        name: "FOODISTA",
        description: "Full-stack solution for campus dining with real-time features",
        tech: ["React", "JavaScript", "Real-time APIs"],
        highlight: "Reduced wait times by 40% for 500+ daily users"
      },
      {
        name: "Patient Care System",
        description: "Healthcare portal with secure patient management",
        tech: ["React", "RBAC", "Admin Dashboards"],
        highlight: "Decreased check-in time by 50%"
      }
    ],
    certifications: [
      { name: "Oracle Cloud Infrastructure GenAI Professional", year: "2024" },
      { name: "Microsoft Azure Fundamentals", year: "2023" }
    ],
    resumeFile: "Sakshi_Software_Developer.pdf"
  },
  sre: {
    title: "Site Reliability Engineer",
    icon: "Activity",
    color: "from-orange-500 to-red-500",
    skills: [
      "Prometheus", "Grafana", "ELK Stack", "Azure Monitor",
      "Root Cause Analysis", "Troubleshooting", "High Availability",
      "Incident Management", "Performance Optimization", "SLOs/SLIs"
    ],
    projects: [
      {
        name: "DevOps Quest",
        description: "Monitoring and logging systems using Prometheus and Grafana",
        tech: ["Prometheus", "Grafana", "Monitoring"],
        highlight: "Ensured platform health and performance"
      },
      {
        name: "FOODISTA",
        description: "System troubleshooting and maintenance procedures",
        tech: ["Troubleshooting", "Performance Optimization"],
        highlight: "Achieved 99.9% uptime during peak hours"
      }
    ],
    certifications: [
      { name: "Oracle Cloud Infrastructure GenAI Professional", year: "2024" },
      { name: "Microsoft Azure Fundamentals", year: "2023" }
    ],
    resumeFile: "Sakshi_Site_Reliability_Engineer.pdf"
  },
  frontend: {
    title: "Front-end Developer",
    icon: "Layout",
    color: "from-indigo-500 to-violet-500",
    skills: [
      "React.js", "HTML5", "CSS3", "JavaScript (ES6+)",
      "Responsive Design", "UI/UX Design", "Tailwind CSS",
      "Web Accessibility", "Performance Optimization"
    ],
    projects: [
      {
        name: "E-Commerce Website",
        description: "Responsive frontend with optimized performance",
        tech: ["HTML5", "CSS3", "JavaScript"],
        highlight: "98/100 Lighthouse performance score"
      },
      {
        name: "Patient Care System",
        description: "Secure patient portal with visualization dashboards",
        tech: ["React", "Admin Dashboards", "RBAC"],
        highlight: "2x faster data retrieval for medical staff"
      }
    ],
    certifications: [
      { name: "Oracle Cloud Infrastructure GenAI Professional", year: "2024" },
      { name: "Microsoft Azure Fundamentals", year: "2023" }
    ],
    resumeFile: "Sakshi_Site_Reliability_Engineer.pdf"
  }
};

export const interpersonalSkills = [
  {
    skill: "Team Skills",
    icon: "Users",
    example: "Led cross-functional teams in DevOps Quest project, coordinating between frontend, backend, and infrastructure teams to deliver seamless integrations."
  },
  {
    skill: "Leadership",
    icon: "Crown",
    example: "Spearheaded the FOODISTA project from concept to deployment, guiding a team of 4 developers and ensuring timely delivery."
  },
  {
    skill: "Management & Coordination",
    icon: "ClipboardList",
    example: "Managed sprint planning and task allocation for multiple academic projects, ensuring 100% on-time delivery."
  },
  {
    skill: "Decision Making",
    icon: "Target",
    example: "Made critical architecture decisions for DevOps Quest, choosing between AWS and Azure based on cost-performance analysis."
  },
  {
    skill: "Critical & Creative Thinking",
    icon: "Lightbulb",
    example: "Designed innovative digital token system for FOODISTA that reduced queue wait times by 40%."
  },
  {
    skill: "Communication Skills",
    icon: "MessageCircle",
    example: "Presented research paper on UPI security at technical symposium, receiving positive feedback from industry experts."
  },
  {
    skill: "Problem Solving",
    icon: "Puzzle",
    example: "Debugged and resolved complex deployment pipeline issues, reducing deployment errors by 90% in production."
  },
  {
    skill: "Reasoning",
    icon: "Brain",
    example: "Analyzed performance bottlenecks in Patient Care System, implementing solutions that improved data retrieval by 2x."
  }
];

export const education = [
  {
    degree: "B.E./B.Tech - Computer Science & Engineering",
    specialization: "DevOps",
    institution: "Chandigarh University, Gharuan",
    period: "2022 - 2026",
    score: "8.21 CGPA",
    courses: ["Cloud Computing", "DevOps Methodologies", "Linux Administration", "Network Security"]
  },
  {
    degree: "12th / Intermediate",
    specialization: "Science Stream (PCM + Biology)",
    institution: "Kendriya Vidyalaya AFS Thane Kolshet",
    period: "2021",
    score: "90%",
    board: "CBSE"
  },
  {
    degree: "10th / Matriculation",
    specialization: "",
    institution: "Kendriya Vidyalaya AFS Thane Kolshet",
    period: "2018",
    score: "77%",
    board: "CBSE"
  }
];

export const projects = [
  {
    name: "DevOps Quest",
    type: "Gamified Learning Platform",
    period: "July 2025 - Ongoing",
    description: "A gamified web platform for progressive DevOps education and skill development",
    features: [
      "Interactive quests and simulations for hands-on learning",
      "CI/CD pipeline demonstrations with Docker, Kubernetes, Jenkins",
      "Multi-cloud deployment on AWS and Azure",
      "Automated backend with Linux, Bash scripting"
    ],
    tech: ["React", "Firebase", "MongoDB", "Docker", "Kubernetes", "AWS", "Azure", "Terraform"],
    category: "DevOps"
  },
  {
    name: "E-Commerce Website",
    type: "Dockerized Web Application",
    period: "Jan 2025 - Mar 2025",
    description: "Responsive e-commerce frontend with containerized deployment",
    features: [
      "98/100 Lighthouse performance score",
      "Dockerized with NGINX for portability",
      "Asset compression for faster load times",
      "Cross-environment deployment support"
    ],
    tech: ["HTML", "CSS", "JavaScript", "Docker", "NGINX"],
    category: "Frontend"
  },
  {
    name: "FOODISTA",
    type: "Campus Food Services Platform",
    period: "July 2024 - Dec 2024",
    description: "Web and app-based platform modernizing food services at Chandigarh University",
    features: [
      "Digital token system reducing wait times by 40%",
      "Real-time order tracking and menu browsing",
      "Ratings, reviews, and discount integration",
      "99.9% system uptime during peak hours"
    ],
    tech: ["React", "JavaScript", "Real-time APIs", "Azure"],
    category: "Full Stack"
  },
  {
    name: "Patient Care System",
    type: "Healthcare Portal",
    period: "Jan 2024 - May 2024",
    description: "Secure patient portal for digital record management",
    features: [
      "Role-Based Access Control (RBAC)",
      "50% reduction in check-in time",
      "Admin dashboards with visualization",
      "2x faster data retrieval"
    ],
    tech: ["React", "Admin Dashboards", "RBAC", "Security"],
    category: "Healthcare"
  },
  {
    name: "Cyber Attacks on UPI",
    type: "Research Paper",
    period: "Jan 2024 - May 2024",
    description: "Analysis of UPI security vulnerabilities and proposed countermeasures",
    features: [
      "Identified 5 major phishing vectors",
      "Proposed encryption-based security measures",
      "Analyzed fraud trends in digital payments",
      "Technical report on mitigation strategies"
    ],
    tech: ["Cybersecurity", "Research", "Encryption", "Security Analysis"],
    category: "Research"
  },
  {
    name: "Smart Rings Research",
    type: "Academic Study",
    period: "Feb 2023",
    description: "Future of wearable tech - analyzing smart ring capabilities",
    features: [
      "Compared 10+ wearable architectures",
      "Evaluated hardware constraints",
      "Analyzed sensor efficiency",
      "Health monitoring integration study"
    ],
    tech: ["Wearables", "IoT", "Health Tech", "Research"],
    category: "Research"
  }
];

export const codingProfiles = [
  {
    platform: "LeetCode",
    username: "Sakshiii___",
    url: "https://leetcode.com/u/Sakshiii___/",
    color: "from-amber-500 to-orange-500",
    icon: "Code2"
  },
  {
    platform: "HackerRank",
    username: "sakshi132728",
    url: "https://www.hackerrank.com/profile/sakshi132728",
    color: "from-green-500 to-emerald-500",
    icon: "Terminal"
  },
  {
    platform: "CodeChef",
    username: "sakshi_here",
    url: "https://www.codechef.com/users/sakshi_here",
    color: "from-amber-600 to-yellow-500",
    icon: "ChefHat"
  },
  {
    platform: "GeeksforGeeks",
    username: "sakshihere",
    url: "https://www.geeksforgeeks.org/profile/sakshihere",
    color: "from-green-600 to-lime-500",
    icon: "BookOpen"
  }
];

export const certifications = [
  {
    name: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    issuer: "Oracle",
    date: "July 22, 2024",
    validUntil: "July 22, 2026",
    credentialId: "100729138OCI2024GAIOCP",
    image: "/certificates/oracle-cert.png",
    badge: "/certificates/oracle-badge.jpg",
    verifyUrl: "#"
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "June 29, 2023",
    credentialId: "1EBD09DE25347A90",
    certificationNumber: "29FT33-4CD4A9",
    image: "/certificates/microsoft-cert.png",
    verifyUrl: "#"
  }
];

export const achievements = [
  { title: "Runner-up @ GFG Hackathon", icon: "Trophy" },
  { title: "Silver Medal in Technical Poster Presentation", icon: "Award" }
];

export const languages = ["English", "Hindi", "Maithili"];

export const interests = [
  "Exploring Cloud Tools",
  "Web UI/UX Design",
  "Infrastructure as Code",
  "Container Orchestration",
  "Open Source Contribution"
];
