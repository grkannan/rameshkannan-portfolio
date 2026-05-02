export const portfolioData = {
  profile: {
    name: "Ramesh Kannan G",
    title: "Aspiring Software Engineer",
    education: "M.Sc. CS · 2026", // From your avatar badge
    tagline: "Aspiring Software Engineer crafting scalable backend systems & elegant web applications."
  },
  projects: [
    {
      id: 1,
      title: "Secure API Gateway",
      tag: "Spring Boot · Microservices",
      icon: "🔐",
      description: "Microservices-based API Gateway handling 10+ REST endpoints with JWT authentication.",
      tech: ["Spring Boot", "JWT", "PostgreSQL", "Docker"]
    },
    {
      id: 2,
      title: "E-Learning Platform",
      tag: "Full Stack · Django + React",
      icon: "📚",
      description: "Full-stack e-learning platform with 3 user roles and 10+ REST APIs[cite: 1].",
      tech: ["React", "Django", "Django REST", "PostgreSQL", "JWT"]
    },
    {
        id: 3,
        title: "Online Voting Platform",
        tag: "PHP · MYSQL · HTML · CSS · JavaScript",
        icon: "🗳️",
        description: "Developed a comprehensive online voting platform using PHP for the backend and HTML/CSS/JavaScript for the frontend, providing a secure and efficient voting experience with user authentication and vote management.",
        tech: ["PHP", "MYSQL", "HTML", "CSS", "JavaScript"],
    },
    
  ],
  skills: [
    { category: "Languages", 
        items: [ 
            { name: "Java", level: "85%" }, 
            { name: "Python", level: "82%" },
            { name: "JavaScript", level: "80%" },
            { name: "PHP", level: "78%"},
            { name: "SQL", level: "80%"},
            { name: "HTML/CSS", level: "80%"},
            { name: "C++", level: "75%"},
            { name: "C", level: "70%"},
        ] 
    },
    { category: "Frameworks", 
        items: [ 
            { name: "Spring Boot", level: "82%" }, 
            { name: "Django", level: "84%" }, 
            { name: "React", level: "80%" },
            { name: "Django REST Framework", level: "80%" },
            { name: "Bootstrap", level: "78%" },
            { name: "Laravel", level: "75%"},
            { name: "Express.js", level: "70%"},
        ] 
    },
    { category: "Tools & Databases", items: [
            { name: "Git", level: "85%" },
            { name: "PostgreSQL", level: "80%" },
            { name: "MySQL", level: "80%" },
            { name: "MongoDB", level: "75%" },
            { name: "Redis", level: "70%" },
            { name: "github", level: "85%" },
            { name: "Docker", level: "80%" },
        ] 
    },
    { category: "Concepts ", items: [
            { name: "Object-Oriented Programming", level: "85%" },
            { name: "Data Structures & Algorithms", level: "80%" },
            { name: "RESTful API Design", level: "80%" },
            { name: "Microservices Architecture", level: "75%" },
            { name: "Agile Methodologies", level: "80%" },
            { name: "Unit Testing & TDD", level: "75%" },
    ]}
  ]
};