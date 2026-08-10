export const site = {
  url: "https://thomasjboyd.com",
  title:
    "Thomas Boyd - Frontend engineer | Senior SaaS Developer | React, TypeScript, ",
  description:
    "Frontend engineer with 16 years building architecture, features and large-scale migrations - plus independently built, AI-first products. Open to Frontend or fullstack roles, remote or around Milton Keynes.",
};

export const person = {
  name: "Thomas Boyd",
  role: "Frontend engineer",
  subRole: "Senior SaaS Developer",
  quickStack: "React, TypeScript, Rails",
  location: "Milton Keynes, UK",
  email: "thomasboyduk@gmail.com",
  experienceYears: 16,
  links: {
    github: "",
    linkedin: "https://linkedin.com/in/thomas-boyd-61875729",
  },
} as const;

export const hero = {
  blurb: [
    "Senior front-end engineer with 16 years of commercial experience, specialising in React and TypeScript at scale. Most of my career has been spent as the person who takes ownership of a codebase and keeps it healthy - building features in modern React and TypeScript, maintaining the build and tooling, and modernising a large Backbone.js SaaS application over several years.",
    "I own work end to end, from architecture and build tooling through to CI, testing suites and release processes, and I work closely with backend, product and design teams to shape features rather than just implement them.",
    "I've invested heavily in AI-assisted development workflows - establishing them for my team, and using them to build and operate two independent products, including their infrastructure.",
  ],
  coreStack: [
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "CI/CD (Tests & Linting)",
    "Docker",
  ],
};

export const personal = {
  heading: "Away from the keyboard",
  body: "Some might call it stubbornness but I have a need to understand how things work and the drive to learn, so I find myself picking up a lot of practical skills.",
  skills:
    "I consider myself a fairly skilled self taught mechanic, I enjoy the satisfaction of taking in a broken motorbike and methodically figuring out and fixing the issue. Years later I discovered the book; Zen and the Art of Motorcycle Maintenance, which brilliantly summed up my love of the mechanical world.",
  aviation:
    "One of my first loves was aviation, my dad being an aircraft engineer meant I had the privledge of the odd weekend joining him at work. Although I didn't follow his career path I do have a healthy hanger of RC model aircraft, on which I've been perfecting the integration of autonmous flight controller systems for years.",
};

export const experience = [
  {
    company: "Sendible",
    context: "Social media management SaaS · Front-end team",
    role: "Senior Front-end Web Developer",
    period: "Feb 2017 - Aug 2026",
    current: false,
    bullets: [
      {
        label: "Migration architecture",
        text: "Architected and executed the incremental migration of a legacy Backbone.js codebase to TypeScript and React, with no downtime and a consistent user experience across old and new features.",
      },
      {
        label: "Feature architecture",
        text: "Lead developer on large feature projects, shaping them across teams through domain-driven design, requirement specs, API contracts and scope feasibility. Most recently sole front-end developer on a reporting system with drag, drop and resizable dashboards and charting, built around a generic module API.",
      },
      {
        label: "AI workflow integration",
        text: "Early AI team adopter. Helped establish AI workflows, identified suitable models for specific tasks and shaped agents. Thorough working knowledge of GitHub Copilot integrations for PR reviews and automated QA analysis. Integrated Figma MCP with Copilot for design context.",
      },
      {
        label: "Patterns and standards",
        text: "Shaped the core React patterns used across the front-end, and introduced React Query for structured data layers. Worked with our Storybook design system, extending its functionality.",
      },
      {
        label: "Build tooling",
        text: "Took ownership of and maintained the Webpack setup within the micro-frontend architecture.",
      },
      {
        label: "Testing and CI/CD",
        text: "Introduced and maintained the Playwright end-to-end suite running in CI, reducing QA workload and improving release confidence.",
      },
      {
        label: "Dependency management",
        text: "Managed Dependabot package security alerts, provided solutions for difficult dependency updates to maintain app and environment security.",
      },
      {
        label: "Third-party integrations",
        text: "Led the integration of a large third-party application, working directly with their engineers, adapting their solution to our needs.",
      },
    ],
  },
  {
    company: "Sendible",
    context: "Social media management SaaS · Front-end team",
    role: "Front-end Web Developer",
    period: "Aug 2013 - Feb 2017",
    current: false,
    bullets: [
      {
        label: "Full app deployment",
        text: "Onboarded as part of a two-person development team recruited to develop a new version of Sendible. Took an early-stage Backbone.js app through to full production. Shaped and drove the use of Backbone.js best practices and patterns.",
      },
      {
        label: "Flexibility in the stack",
        text: "Worked across the stack as the company required, developing APIs using Ruby on Rails and Express.js.",
      },
      {
        label: "Maintenance and solutions",
        text: "Traced and fixed complex bugs spanning MySQL, Ruby and Node.js, taking a holistic approach to maintenance.",
      },
      {
        label: "UI/UX contributions",
        text: "Functioned as a UI/UX developer in the absence of dedicated teams for these disciplines.",
      },
    ],
  },
  {
    company: "Flag Communication",
    context: "",
    role: "Front-end Web Developer",
    period: "Oct 2011 - Aug 2013",
    current: false,
    bullets: [
      {
        label: "Corporate reporting",
        text: "Built web-based reports for corporate clients, working to strict accessibility, performance and branding guidelines.",
      },
      {
        label: "Cross-team collaboration",
        text: "Worked closely with other teams, including proofreaders, to ensure accuracy on sensitive corporate reports.",
      },
      {
        label: "Interactive features",
        text: "Go-to developer for building interactive features.",
      },
      {
        label: "CMS integration",
        text: "Built integrations with the Umbraco C# CMS.",
      },
    ],
  },
  {
    company: "New Vision Group",
    context: "",
    role: "Web Integrator",
    period: "Feb 2010 - Oct 2011",
    current: false,
    bullets: [
      {
        label: "Tourism websites",
        text: "Built accessible tourism websites around a legacy in-house booking system.",
      },
      {
        label: "Filling system gaps",
        text: "Brought interactivity to legacy features, using JavaScript to fill gaps in the booking system.",
      },
      {
        label: "Mentoring",
        text: "Mentored and onboarded trainee staff.",
      },
    ],
  },
];

export const techStack = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Ruby"],
  },
  {
    group: "Front-end",
    items: ["React", "React Query", "Styled Components / SCSS", "i18n"],
  },
  {
    group: "Testing, build & infra",
    items: ["Docker", "Webpack", "Playwright", "Node.js", "CI/CD", "npm/Yarn"],
  },
  {
    group: "AI & automation",
    items: [
      "Agent skills",
      "Claude Code / GitHub Copilot",
      "Linear MCP",
      "n8n",
    ],
  },
  {
    group: "Workflow",
    items: ["Jira", "Linear", "Git"],
  },
  {
    group: "Tools",
    items: [
      "VSCode",
      "Chrome DevTools",
      "React Developer Tools",
      "Fedora Linux",
      "MySQL",
      "DBeaver",
    ],
  },
];

export const projectsIntro =
  "A set of independent products I build and run outside of work. These were produced with one goal in mind, testing the breadth and pitfalls of an AI-first workflow.";

export const projectsScope =
  "Having the freedom to direct the product gave me freedom to consider my own set of standards; performance, accessability, modern CI/CD tooling and analytics.";

export const projectsLimitations =
  "I had to fight a lot of bloat in the early stages, being product with unlimited scope can go to your head! I found AI highly variable in it's ambitions so I've moved to a more granular workflow to introduce features slower with more oversight.";

export const projects = [
  {
    name: "TeslaBatteryCheck",
    tagline: "Battery health check and tools for Tesla owners.",
    description:
      "A site that started as a simple single calculator that allowed me to explore and skill-up on AI workflows. Developed with Claude code, an exercise in how to get into trouble with AI and the learning process of taming a sprawling codebase.",
    url: "https://teslabatterycheck.com",
  },
  {
    name: "MyEVBuddy",
    tagline: "EV battery health check and tools for EV owners.",
    description:
      "An EV-focused tooling site designed to help people navigate the electric-vehicle market. Expanded out of TeslaBatteryCheck as an exercise in authoring shared components.",
    url: "https://myevbuddy.com",
  },
];

export const nav = [
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Away from the keyboard", href: "#personal" },
  { label: "Contact", href: "#contact" },
];

export const education = {
  degree: "BSc (First Class) Digital broadcasting technology",
  institution: "University of Hertfordshire",
  period: "2005 - 2009",
};
