import {
  Brain,
  Megaphone,
  Code2,
  Server,
  Layout,
  Database,
  Wrench,
  Monitor,
  Puzzle,
} from "lucide-react";

export const marquee = [
  "ASP.NET Core",
  "C#",
  "Node.js",
  "TypeScript",
  "React",
  "PostgreSQL",
  "Redis",
  "Kafka",
  "Docker",
  "MongoDB",
  "SQL Server",
  "LLM Integration",
];

export const experience = [
  {
    period: "2026 - Present",
    role: "Backend Developer",
    org: "Waybid",
    points: [
      "Develop backend services and REST APIs using ASP.NET Core (C#) in a fast-paced startup environment.",
      "Develop AI-powered features by integrating LLMs and AI APIs, including prompt engineering, structured outputs, validation, and tool calling.",
      "Develop and maintain frontend components using React and TypeScript.",
      "Implement JWT-based authentication and authorization systems to ensure secure API access.",
      "Improved API performance through systematic query optimization and Redis based caching mechanisms.",
      "Work with Docker-based development environments and automated CI/CD workflows for deployment.",
    ],
    stack: [
      "ASP.NET Core",
      "C#",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "Docker",
      "JWT",
      "xUnit",
      "Moq",
      "Microservices",
      "LLM Integration",
      "Prompt Engineering",
    ],
  },
  {
    period: "2025",
    role: "Full Stack Developer",
    org: "DE-PARK - Autonomous Parking System",
    points: [
      "Developed a real-time, full-stack autonomous parking management system for vehicles, queues, and parking slots, including interfaces for mobile and tablet devices.",
      "Built robust backend services using Node.js (Express), PostgreSQL, and Sequelize, including unit testing.",
      "Developed responsive frontend interfaces using React.js and TypeScript, ensuring a user-friendly experience.",
      "Collaborated effectively within a team environment, utilizing Git/GitHub for version control and code review.",
    ],
    stack: [
      "Node.js",
      "Express",
      "React",
      "TypeScript",
      "REST APIs",
      "PostgreSQL",
      "Sequelize",
      "Jest",
      "Git",
    ],
  },
];

export const projects = [
  {
    name: "ClickQuiz - AI Exam Creation",
    summary:
      "Web system that lets teachers create, edit, manage and export exams with AI assistance.",
    stack: ["Node.js", "Express", "React", "MongoDB", "OpenAI API"],
    icon: Brain,
    accent: "from-primary/20 to-accent/20",
    links: [
      { label: "Live demo", href: "https://click-quiz.vercel.app" },
      { label: "Source", href: "https://github.com/r1700/ClickQuiz-Creating-tests" },
    ],
  },
  {
    name: "Subscription & Advertising Platform",
    summary:
      "Full-stack platform for business subscriptions and advertisement management, designed end to end.",
    stack: ["C#", ".NET Core", "React", "Redux", "SQL Server", "Material-UI"],
    icon: Megaphone,
    accent: "from-accent/20 to-primary/20",
    links: [{ label: "Source", href: "https://github.com/r1700/advertising_project" }],
  },
  {
    name: "MultiChatSender - Chrome Extension",
    summary:
      "Chrome extension (Manifest V3) that sends one prompt to ChatGPT, Claude and Gemini at once. See all the answers together in a side panel, compare them, and send from any site. No server, no API keys.",
    stack: ["Chrome Extension", "JavaScript", "Manifest V3", "Side Panel API", "i18n"],
    icon: Puzzle,
    accent: "from-primary/20 to-accent/20",
    video: "/MultiChatSender_reel_EN.mp4",
    links: [{ label: "Source", href: "https://github.com/r1700/multi-ai-chat-extension" }],
  },
];

export const skills = [
  {
    label: "AI",
    icon: Code2,
    items:
      "LLM Integration,Prompt Engineering,Generative AI, AI APIs, OpenAI API, Structured Outputs, AI-assisted Development (Claude, GitHub Copilot, GPT)",
  },
  {
    label: "Backend",
    icon: Server,
    items:
      "ASP.NET Core, Node.js, Express.js, .NET Core, C#, Java, Python, REST APIs, Entity Framework",
  },
  {
    label: "Frontend",
    icon: Layout,
    items: "React.js, Redux, Angular, TypeScript, JavaScript, HTML5, CSS3",
  },
  { label: "Databases", icon: Database, items: "PostgreSQL, MongoDB, SQL Server, Supabase, Redis" },
  {
    label: "Tools & Testing",
    icon: Wrench,
    items:
      "Git, GitHub, Docker, CI/CD Workflows, Postman, Sequelize, JWT, Kafka, Redis, Unit Testing, Jest, xUnit, Moq",
  },
  {
    label: "Concepts",
    icon: Monitor,
    items:
      "Algorithms & Data Structures, Software Architecture, Operating Systems,\u00A0OOP, Design Patterns, Microservices",
  },
];
