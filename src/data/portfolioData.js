export const portfolioData = {
  profile: {
    firstName: "Ramesh",
    lastName: "Kannan G",
    initials: "RK",
    badge: "🎓 M.Sc. CS · 2026",
    role: "Aspiring Software Engineer",
    tagline: "Aspiring Software Engineer crafting scalable backend systems & elegant web applications with Java, Python, and a passion for clean architecture.",
    stats: [
      { number: "3+", label: "Projects Built" },
      { number: "10+", label: "REST APIs" },
      { number: "35", label: "Days Interned" }
    ],
    contact: {
      email: "grameshkannan322@gmail.com",
      phone: "+91 8668 036 368",
      github: "github.com/grkannan",
      linkedin: "grameshkannan322"
    }
  },
  skills: [
    {
      category: "Languages",
      items: [
        { name: "Java", level: "85%" },
        { name: "Python", level: "82%" },
        { name: "JavaScript", level: "78%" },
        { name: "C / C++", level: "70%" }
      ]
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "Spring Boot", level: "82%" },
        { name: "Django / DRF", level: "84%" },
        { name: "React", level: "75%" },
        { name: "Laravel", level: "65%" }
      ]
    },
    {
      category: "Databases & DevOps",
      items: [
        { name: "PostgreSQL", level: "80%" },
        { name: "MySQL", level: "76%" },
        { name: "MongoDB", level: "68%" },
        { name: "Docker & Git", level: "72%" }
      ]
    },
    {
      category: "Concepts",
      items: [
        { name: "REST APIs", level: "88%" },
        { name: "Microservices", level: "78%" },
        { name: "OOP & DSA", level: "85%" },
        { name: "JWT / Auth", level: "82%" }
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Secure API Gateway",
      tag: "Spring Boot · Microservices",
      icon: "🔐",
      iconBg: "#e4eff8",
      desc: "Microservices-based API Gateway handling 10+ REST endpoints with JWT authentication, RBAC, and centralized routing — improving request efficiency by ~30%.",
      tech: ["Spring Boot", "JWT", "REST", "PostgreSQL", "Docker"]
    },
    {
      id: 2,
      title: "E-Learning Platform",
      tag: "Full Stack · Django + React",
      icon: "📚",
      iconBg: "#e8f4f0",
      desc: "Full-stack e-learning platform with 3 user roles, 10+ REST APIs, JWT auth, course enrollment, progress tracking, and a responsive React frontend.",
      tech: ["React", "Django REST", "PostgreSQL", "JWT"]
    },
    {
      id: 3,
      title: "Online Voting Platform",
      tag: "Web App · PHP + MySQL",
      icon: "🗳️",
      iconBg: "#f5e8e4",
      desc: "Role-based voting portal with registration, session handling, and admin controls. Tested by 50 users — 90% satisfaction, delivered 15 days ahead of schedule.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    }
  ],
  experience: [
    {
      id: 1,
      years: "2024 – 2026",
      type: "Education",
      badgeClass: "be",
      title: "M.Sc. Computer Science",
      place: "St. Xavier's College, Palayamkottai · CGPA: 7.4*",
      desc: "Pursuing a Master's degree focused on advanced algorithms, distributed systems, and full-stack development."
    },
    {
      id: 2,
      years: "2024",
      type: "Experience",
      badgeClass: "bw",
      title: "Python Full-Stack Intern",
      place: "Team Info-Soft, Tirunelveli · 35 Days",
      desc: "Built production-ready features across the complete web development stack during an intensive internship in Python full-stack development."
    },
    {
      id: 3,
      years: "2020 – 2023",
      type: "Education",
      badgeClass: "be",
      title: "B.Sc. Computer Science",
      place: "St. Xavier's College, Palayamkottai · CGPA: 6.8",
      desc: "Undergraduate studies covering data structures, algorithms, OOP, and database management systems."
    }
  ]
};