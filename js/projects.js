/* ===== Your projects live here. Edit this file to add or change projects. =====
   Rules: only write things that are true.
   - features: things seen on the live site (leave [] if none)
   - plannedFeatures: ideas not built yet
   - checked: one honest sentence on how the details were verified
   - repoUrl: leave "" until you have the real repository link */
const PROJECTS = [
  {
    id: "tomatoguard-ai",
    name: "TomatoGuard AI",
    category: "AI + Agriculture",
    status: "Live website",
    team: true,
    featured: true,
    summary: "A team project about tomato plant disease detection with AI/ML. I built the frontend.",
    tech: ["HTML", "CSS", "JavaScript"],
    contribution: "I developed the frontend with AI coding assistance and deployed it to GitHub Pages. My teammates worked on the backend and the remaining tasks, including the AI/ML side. I did not train a machine-learning model.",
    features: [
      "Symptom-based detection: choose the symptoms you see on a tomato plant",
      "Disease information pages with symptoms, causes and prevention",
      "Basic care and prevention suggestions",
      "A detection history page",
      "Pages for Home, Detect Disease, Disease Information, History and About"
    ],
    checked: "Read from the pages of the live site. I did not run a detection, so the accuracy and the results are not verified here.",
    liveUrl: "https://hetuprajapati22.github.io/plant-disease-detection-system/",
    repoUrl: ""
  },
  {
    id: "study-nest",
    name: "StudyNest",
    category: "Student Productivity",
    status: "Live website",
    featured: true,
    summary: "A student-focused website to support study planning and productivity, including timetable planning.",
    tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    contribution: "I planned the concept and requirements, used AI coding assistance and published the website.",
    features: [
      "Assignment tracker with filters for subject, status and priority, and sorting",
      "Timetable: pick a branch and division for a college schedule, view the week, add your own class",
      "Daily study goals with progress and a history of earlier days",
      "Dashboard with assignment counts",
      "Dark mode, plus sample data you can load or clear",
      "Data stays in your browser (LocalStorage). No login and no backend."
    ],
    checked: "Read from the live site. I did not click through every feature.",
    liveUrl: "https://hetuprajapati22.github.io/StudyNest/",
    repoUrl: ""
  },
  {
    id: "glow-grace-salon",
    name: "Glow & Grace Salon",
    category: "Business Website / Frontend Design",
    status: "Live demo",
    featured: true,
    summary: "A fictional luxury salon website made as a portfolio and freelance demonstration. Not a real client project.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    contribution: "Frontend styling and business website design: black navigation and footer, ivory and cream backgrounds, champagne-gold accents, Cormorant Garamond headings, Jost body text, hover effects, smooth scrolling and subtle scroll animations.",
    features: [
      "Six service sections with sample prices",
      "Photo gallery (the site says photos enlarge on click)",
      "Sample reviews, clearly marked as not real",
      "An appointment enquiry form that is a demo and does not send enquiries",
      "Skip-to-content link for keyboard users"
    ],
    checked: "Read from the live site. Address, phone, prices and reviews are placeholders, and there is no real booking or payment.",
    liveUrl: "https://hetuprajapati22.github.io/glow-grace-salon/",
    repoUrl: ""
  },
  {
    id: "lovebug",
    name: "LoveBug",
    category: "Interactive Couples Game",
    status: "In development",
    featured: false,
    summary: "A couples game concept for two partners playing on separate devices. Planned, not built yet.",
    tech: [],
    contribution: "I developed the concept, game rules, synchronization requirements, user experience and feature planning. AI tools assist with coding.",
    features: [],
    plannedFeatures: [
      "Google sign-in and private couple rooms",
      "Both partners ready before a game starts",
      "Synchronization between the two players",
      "Questions advance only after both partners answer",
      "A waiting state when a partner is offline",
      "Game modes: This or That, How Well Do You Know Me?, Truth or Dare",
      "Levels, scores, history and results"
    ],
    checked: "No feature is confirmed as working yet. There is no live link or public source code.",
    liveUrl: "",
    repoUrl: ""
  },
  {
    id: "the-cozy-table",
    name: "The Cozy Table",
    category: "Café Management System",
    status: "Deployed",
    featured: false,
    summary: "A café management project for menu information, customer orders and bill generation.",
    highlight: "Shows Python logic, calculations and backend exposure with Flask.",
    tech: ["Python", "Flask", "HTML", "CSS"],
    contribution: "I wrote the core Python logic myself, used AI assistance for the UI design, uploaded the project to GitHub and deployed it on Render.",
    features: ["Menu information", "Customer orders", "Bill generation"],
    checked: "These three features come from my own project description. The live site blocks automated checking, so open it to see them yourself.",
    liveNote: "This site is hosted on Render and may take a short while to load the first time you open it.",
    liveUrl: "https://hetuprajapati-the-cozy-table.onrender.com/",
    repoUrl: ""
  }
];
