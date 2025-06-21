import type { PortfolioData } from "../src/types";

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Samuel A Takele",
    tagline: "Electrical & Computer Engineer | Software Developer",
    profilePictureUrl: "https://picsum.photos/seed/samueltakele/300/300",
    dateOfBirth: "18/05/1999",
    nationality: "Ethiopian",
    gender: "Male",
    phone: "(+251) 962918534",
    email: "samuelalehegn1@gmail.com",
    linkedin: "https://www.linkedin.com/in/samuel-alehegn/",
    github: "https://github.com/SamuelAlehegn",
    address: "Addis Ababa, Ethiopia",
    cvUrl: "src/assets/Samuel Alehegn-cv.pdf",
  },
  aboutMe:
    "I am a graduate of Electrical and Computer Engineering with expertise in both hardware and software development. I design and integrate hardware components into software applications, combining my passion for both fields. My interdisciplinary skills allow me to tackle complex problems from a broad perspective. I'm eager to prove my worth on challenging technology projects. My hands-on experience in circuit design and programming enables me to solve technical issues comprehensively and effectively.",
  workExperience: [
    {
      role: "Application Developer",
      company: "EZ SOFTWARES",
      period: "02/05/2023 - Current",
      location: "Addis Ababa, Ethiopia",
      responsibilities: [
        "Designed and developed front-end user interfaces using Angular framework.",
        "Implemented back-end business logic and RESTful APIs with Java and Spring Boot.",
        "Collaborated with cross-functional teams in an Agile environment.",
        "Automated build, testing, and deployment processes using DevOps tools, including OpenShift (OCP).",
      ],
    },
    {
      role: "Hardware Engineer",
      company: "MINNOVATION",
      period: "06/11/2022 - Current",
      location: "Addis Ababa, Ethiopia",
      responsibilities: [
        "Designed and developed IoT device firmware using C/C++ and embedded systems knowledge.",
        "Integrated IoT devices with cloud platforms.",
        "Monitored device performance and implemented measures to ensure reliability and security.",
      ],
    },
    {
      role: "Networking Engineer Intern",
      company: "WEBSPRIX",
      period: "03/01/2022 - 30/06/2022",
      location: "Addis Ababa, Ethiopia",
      responsibilities: [
        "Assisted in the design and configuration of LAN, WAN, and wireless network infrastructures.",
        "Configured and troubleshot routing protocols, switching technologies, and network security.",
        "Gained hands-on experience with network management tools and protocols.",
      ],
    },
    {
      role: "Robotics and Automation Intern",
      company: "4K LABS",
      period: "05/03/2019 - 10/02/2020",
      location: "Addis Ababa, Ethiopia",
      responsibilities: [
        "Programmed Arduino devices in C/C++ to interface with various sensors and actuators.",
        "Gained hands-on experience with Arduino IDE, ROS (Robot Operating System), and common electronic/mechanical components.",
      ],
    },
  ],
  projects: [
    {
      title: "Weather App",
      period: "02/06/2024 - 17/06/2024",
      description:
        "The app automatically detects the user's city using device location services, retrieves the current weather data, and displays it to the user. Also includes functionality to manually search for weather in other cities. Leverages reliable weather data APIs to fetch accurate, up-to-date information.",
      technologies: ["Angular", "TypeScript", "Weather API", "Geolocation API"],
      githubLink: "https://github.com/SamuelAlehegn/Weather-App",
      liveLink: "#",
    },
    {
      title: "PyCommLab",
      period: "11/03/2023 - 13/06/2023",
      description:
        "Python-based web application designed to simulate and visualize a range of digital communication system concepts. It uses Streamlit framework, to create an intuitive and interactive user interface that allows users to explore and experiment with different digital communication system concepts easily.",
      technologies: ["Python", "Streamlit"],
      githubLink: "https://github.com/SamuelAlehegn/PyCommLab",
      liveLink: "#",
    },
    {
      title: "Java-based Desktop Application",
      period: "06/03/2021 - 04/04/2022",
      description:
        "This Java-based desktop application provides a comprehensive solution for users to purchase movie and stadium tickets, as well as browse and purchase books from an integrated online bookstore.",
      technologies: ["Java", "Java Swing/FX"],
      githubLink: "https://github.com/SamuelAlehegn/java_project1",
      liveLink: "#",
    },
  ],
  skills: {
    programmingLanguages: [
      "C++",
      "Java",
      "Python",
      "TypeScript",
    ],
    frameworksLibraries: [
      "Angular",
      "Spring Boot",
      "Streamlit",
      "React",
    ],
    tools: [
      "Git",
      "Docker",
      "OpenShift (OCP)",
      "JIRA",
      "Confluence",
    ],
    microsoftOffice: ["Microsoft Word", "Excel", "PowerPoint", "Access"],
    other: [
      "IoT",
      "Network Protocols",
      "Agile Methodologies",
      "DevOps",
      "RESTful APIs",
    ],
  },
  education: [
    {
      degree: "BSc in Electrical and Computer Engineering",
      institution: "Addis Ababa University",
      period: "21/10/2018 - 19/07/2023",
      location: "Addis Ababa, Ethiopia",
      website: "https://www.aau.edu.et",
      details: "EQF Level 8",
    },
    {
      degree: "Python Network Programming for Network Engineers (Python 3)",
      institution: "Udemy",
      period: "03/03/2022 - 03/06/2022",
      location: "Online",
      website: "https://www.udemy.com/",
      details: "EQF Level 2",
    },
  ],
  languages: [
    { name: "AMHARIC", level: "Mother tongue" },
    {
      name: "ENGLISH",
      proficiency:
        "C1 Proficient User (Listening, Reading, Spoken Production, Spoken Interaction, Writing)",
    },
  ],
  volunteering: [
    {
      role: "Coordinator of Theory and Experimental",
      organization: "Solvers Innovation Club",
      period: "05/11/2021 - 30/12/2022",
      location: "Addis Ababa",
      description: [
        "Spearheaded the integration of theoretical concepts and hands-on experimentation within the club's diverse projects and activities.",
        "Designed and implemented captivating projects that challenged members to apply classroom learning, think critically, and push the boundaries of their understanding.",
      ],
      link: "https://www.linkedin.com/company/solvers-innovation-club/",
    },
    {
      role: "Ambassador for Peace",
      organization: "Universal Peace Federation",
      period: "10/03/2018 - 06/06/2023",
      location: "Addis Ababa",
      description: [
        "Served as a representative and advocate for the Universal Peace Federation's mission of promoting lasting peace and reconciliation globally.",
        "Organized and participated in inter-faith and cross-cultural dialogues, panel discussions, and community outreach events to foster mutual understanding and cooperation.",
      ],
    },
  ],
};
