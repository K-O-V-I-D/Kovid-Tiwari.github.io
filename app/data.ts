export const projects = [
  {
    id: 1,
    name: "Convo-Flow",
    technologies: ["ReactJS", "AWS", "Firebase", "WebRTC", "Tailwind CSS", "TensorFlow JS", "OpenCV"],
    description: `Developed ConvoFlow and PeerMeet, React.js and WebRTC-based video conferencing apps. Supported 50 concurrent streams within a 50GB bandwidth limit. Automated AWS deployment with CI/CD and Docker, achieving 50% faster deployments. Enhanced security by implementing AWS WAF, mitigating 98% of web attacks. Utilized AWS, Firebase, Tailwind CSS, TensorFlowJs.`,
    githubLink: "https://github.com/K-O-V-I-D/ConvoFlow",
    imagePath: "/app/public/assets/projects/project-5.png",
  },
  {
    id: 2,
    name: "Deployment of Cloud Native Monitoring Application on Kubernetes",
    technologies: ["Python", "Flask", "Docker", "Kubernetes", "AWS", "CI/CD"],
    description: `Developed and deployed a Python-based cloud-native monitoring application using Flask, Docker, and Kubernetes. Containerized the app, pushed the Docker image to AWS ECR, and managed deployments on an EKS cluster. Enhanced operational efficiency by implementing Kubernetes deployments and services, including port forwarding and exposure.`,
    githubLink: "https://github.com/K-O-V-I-D/Deployment-of-Cloud-Native-Monitoring-Application-on-Kubernetes",
    imagePath: "/app/public/assets/projects/project-2.jpeg",
  },
  {
    id: 3,
    name: "Smart Healthcare Website Testing Automation",
    technologies: ["Selenium", "JUnit", "Java", "Postman", "MySQL"],
    description: `The "Testing of Hospital Website" project focuses on enhancing the digital platform of Gem Hospital Coimbatore through comprehensive testing methodologies. Utilizing technologies like Selenium, JUnit, and Postman, the project ensures robust functionality, performance, and security. By automating UI interactions and validating APIs.`,
    githubLink: "https://github.com/K-O-V-I-D/Smart-Healthcare-Website-Testing-Automation",
    imagePath: "/app/public/assets/projects/project-1.png",
  },
  {
    id: 4,
    name: "Docker Protocol Team Project: CIAM - Container Identity Access Management",
    technologies: [
      "Flask",
      "JavaScript",
      "ReactJs",
      "NextJs",
      "Docker",
      "Bash",
      "Blockchain",
    ],
    description: `Container Identity Access Management Protocol Container Identity Access Management (CIAM) is an application designed to manage the identity and access of containers within a virtualized environment. This protocol aims to provide a secure and efficient way to control and monitor container access, ensuring that only authorized users can interact with specific containers.`,
    githubLink: "https://github.com/K-O-V-I-D/CIAM",
    imagePath: "/app/public/assets/projects/project-3.png",
  },
];

export const experienceSectionText = `Over the past 3+ years, i've had the oppurtunity to work on a wide range of complex projects, colloborate with talented individuals and learn from some of the best in the industry. Here are some of the highlights of my journey so far.`;

export type Experience = {
  id: number;
  companyName: string;
  duration: string;
  roles: string[];
  tags: string[];
  details?: {
    imagePaths?: string[];
    description: string;
    companyWebsite?: string;
  };
};

export const experiences: Experience[] = [
  {
    id: 1,
    companyName: "Operational Software, Bristol, UK, Remote",
    duration: `January 2023 - June 2024`,
    roles: ["Full stack Developer", "JavaScript Developer", "MERN Stack"],
    tags: ["NextJS", "NodeJS", "Typescript", "Tailwind", "SQLITE"],
    details: {
      companyWebsite: "https://www.operationalsoftware.co",
      imagePaths: [
        "/assets/experiences/experience-1.png",
        "/assets/experiences/experience-2.png",
        "/assets/experiences/experience-3.png",
      ],
      description: `As a Full Stack Developer at Operational Software, I specialized in creating bespoke features using TypeScript, ReactJS, NodeJS, CSS, and a variety of other technologies. My role involved handling both front-end and back-end development, ensuring seamless integration and robust functionality across the entire stack.`,
    },
  },
  {
    id: 2,
    companyName: "Bytewise Ltd, Islamabad, Pakistan",
    duration: `April 2022 - November 2022`,
    roles: ["Frontend Developer", "Innovated designs", "Motion designs"],
    tags: ["React", "Typescript", "Styled Components", "Framer Motion", "GSAP"],
    details: {
      companyWebsite: "https://www.bytewiseltd.com/",
      imagePaths: ["/assets/experiences/experience-4.png"],
      description: `As a frontend developer at Bitwise, I specialized in building modern, high-performance user interfaces with React, Styled Components, CSS, and TypeScript. I focused on responsive, seamless user experiences across devices and created dynamic components for fast rendering and efficient state management. Using Styled Components, I maintained a clean, scalable, and modular codebase for easy maintenance.`,
    },
  },
  {
    id: 3,
    companyName: "Freelancer",
    duration: `January
    2021 - March 2022`,
    roles: ["Frontend Developer", "UI/UX Designer", "Web Developer"],
    tags: ["Go", "PHP", "Wordpress", "C++", "React"],
    details: {
      description: `As a freelance developer, I worked with a variety of clients to create custom websites, web applications, and user interfaces. I specialized in React, NextJS, and TypeScript, building high-performance, responsive, and user-friendly applications that met the unique needs of each client. I collaborated closely with clients to understand their vision and goals, translating them into engaging, interactive digital experiences.`,
    },
  },
];

export const socials = {
  linkedin: "https://www.linkedin.com/in/k-o-v-i-d/",
  github: "https://github.com/K-O-V-I-D",
};
