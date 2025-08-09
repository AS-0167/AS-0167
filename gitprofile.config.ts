// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'AS-0167', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['AS-0167/SHA-256', 
          'AS-0167/D3-CNN', 
          'AS-0167/D3-CNN-2', 
          'AS-0167/red-finger-mouse',
          'AS-0167/ legal-fillings', 
          'AS-0167/FAT-FS', 
        ], 
      },
    },
    external : {
      header: 'My Projects',
      projects: [
        {
          title: 'Plunger Lift Optimization – Qult.ai',
          description:
            'At Qult.ai, developed an AI-driven asset-optimization system to optimize plunger lift operations by analyzing real-time well telemetry and historical production data. Leveraging machine learning and time-series forecasting, the solution improves cycle timing, reduces downtime, and extends equipment life, supported by interactive dashboards for performance monitoring.',
          
        },
        {
          title: 'Sand Extraction Automation – Qult.ai',
          description:
            'At Qult.ai, built a computer vision-based solution for automating sand removal in oil operations using thermal imaging. The system detects sand build-up through heat pattern anomalies and triggers automated cleaning, improving safety, reducing manual inspections, and preventing equipment failures.',
          
        },
        {
          title: 'Lease Bot – AiBee.pk',
          description:
            'At AiBee.pk, created an AI-powered platform to automate the extraction, summarization, and amendment tracking of complex lease documents. Utilizing advanced NLP and LLMs, the system processes scanned or digital agreements, structures key clauses, and dynamically updates abstracts, significantly reducing manual review time while ensuring accuracy and compliance.',
          
        },
        {
          title: 'Hawk AI – AiBee.pk',
          description:
            'At AiBee.pk, developed a custom computer vision model for detecting impurities on tobacco conveyor belts, combining object detection and segmentation techniques. Integrated with a robotic arm for automated impurity removal, enhancing quality control and reducing manual intervention.',
        }
      ]
    }
  },
  seo: { title: 'Portfolio of Ayesha Siddiqa', description: '', imageURL: '' },
  social: {
    linkedin: 'as0167',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: 'as_0167',
    telegram: '',
    website: 'https://www.as.com',
    phone: '',
    email: 'ayeshasiddiqa0167@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    "Computer Vision",
    "Machine Learning",
    "Deep Learning",
    "Artificial Intelligence",
    "Large Language Models",
    "AI Agents",
    "LangChain",
    "MLOps",
    "Data Engineering",
    "Data Analysis",
    "Web Scraping",
    "Backend Development",
    "FastAPI",
    "Streamlit",
    "Solution Architecture",
    "DevOps",
    "AWS",
    "Azure DevOps",
    "Docker",
    "Git",
    "GitHub",
    "Python",
    "C++",
    "C",
    "Algorithms",
    "Object-Oriented Programming",
    "Neural Networks",
    "Linux",
    "Operating Systems",
    "Assembly",
    "SQL",
    "NoSQL Databases",
    "Neo4j",
    "Problem Solving",
    "Project Management",
    "Educational Leadership",
    "Teaching"
],
experiences : [
  {
    company: 'Qult Technologies',
    position: 'AI/ML Engineer (Internship)',
    from: 'June 2025',
    to: 'Present',
    companyLink: 'https://qult.ai'
  },
  {
    company: 'AiBee.pk',
    position: 'AI & Backend Developer (Internship)',
    from: 'January 2025',
    to: 'Present',
    companyLink: 'https://aibee.pk/'
  },
  {
    company: 'Google Developer Student Club - Information Technology University, Pakistan',
    position: 'Dev/Tech Team Lead',
    from: 'November 2024',
    to: 'Present',
    companyLink: 'https://gdg.community.dev/gdg-on-campus-information-technology-university-lahore-pakistan/'
  },
  {
    company: 'Google Developer Student Club - Information Technology University, Pakistan',
    position: 'Secretary General | Co Lead Dev/Tech Team and CP Team',
    from: 'October 2024',
    to: 'October 2024',
    companyLink: 'https://gdg.community.dev/gdg-on-campus-information-technology-university-lahore-pakistan/'
  },
  {
    company: 'Veritus Software',
    position: 'AI & Backend Engineer (Internship)',
    from: 'January 2025',
    to: 'May 2025',
    companyLink: ''
  },
  {
    company: 'Veritus Software',
    position: 'AI & Backend Engineer (Internship)',
    from: 'July 2024',
    to: 'November 2024',
    companyLink: ''
  },
  {
    company: 'Information Technology University',
    position: 'Teaching Assistant - Object-Oriented Programming',
    from: 'January 2024',
    to: 'June 2024',
    companyLink: 'https://itu.edu.pk/'
  },
  {
    company: 'Information Technology University',
    position: 'Teaching Assistant - Programming Fundamentals',
    from: 'August 2023',
    to: 'December 2023',
    companyLink: 'https://itu.edu.pk/'
  }
],
  certifications: [
    // {
    //   name: 'Lorem ipsum',
    //   body: 'Lorem ipsum dolor sit amet',
    //   year: 'March 2022',
    //   link: 'https://example.com',
    // },
  ],
  educations: [
    {
      institution: 'Infomation Technoloy University, Lahore',
      degree: 'BS Computer Science',
      from: '2022',
      to: '2026',
    },
    {
      institution: 'Lahore Collage For Women University, Lahore',
      degree: 'F.Sc Pre-Medical',
      from: '2020',
      to: '2022',
    },
    // {
    //   institution: 'Institution Name',
    //   degree: 'Degree',
    //   from: '2012',
    //   to: '2014',
    // },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'procyon-dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
      'procyon-dark'
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
