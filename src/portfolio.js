/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kashir Hasnain",
  title: "Hi all, I'm Kashir",
  subTitle: emoji(
    "Experienced Quality Assurance Engineer esuring excellence: Expert in Mannual and Automation Testing, Bug Tracking and API Testing"
  ),
  resumeLink:
    "https://drive.google.com/file/d/17w4HeGBhzGJWhoRzjL3zHVUwqVW3hnxj/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kashirhasnainoffical",
  linkedin: "https://www.linkedin.com/in/kashirhasnainoffical/",
  gmail: "hasnainkashir6105@gmail.com",
  facebook: "https://www.facebook.com/kashirhasnainoffical",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SQA Engineer (Mannual, Automation and API Testing)",
  skills: [
    emoji(
      "⚡ Proficient in manual testing, creating and executing test plans, test cases, and test scripts"
    ),
    emoji("⚡ Attention to detail and ability to identify, isolate, and document bugs"),
    emoji(
      "⚡ Experience with automated testing techniques and frameworks"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [


    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },




    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },

    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Comsats University Islamabad, Attock Campus",
      logo: require("./assets/images/comsats.jpg"),
      subHeader: "Bachelor of Science in Software Engineering (BSSE)",
      duration: "September 2018 - June 2022",
      desc: "",
      descBullets: [
        "Core Team Member at Google Developer Student Club",
        "Event Manager at Microsoft Learn Student Ambassador Lahore"
      ]
    }

  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Associate SQA Engineer",
      company: "Ultracodes",
      companylogo: require("./assets/images/ultra_codes_logo.png"),
      date: "Sep 2023 - Present",
      desc: "Conducted End to End Testing of CRM - Trailer Centeral",
      descBullets: [
        "Mannual Testing", "Automation Testing using Cypress"
      ]
    },
    {
      role: "Level 1 Seller",
      company: "Fiverr",
      companylogo: require("./assets/images/fiverr_com_logo.png"),
      date: "Sep 2021 – Present",
      desc: "🌐 Fiverr.com/kashirhasnain",
      descBullets: [
        "Comprehensive Requirements Analysis, Software Design Documentation and SRS",
        "Manual and Automation Testing",
        "API Testing using Python",
        "Jira Configuration"
      ]
    },
    {
      role: "Software Quality Assurance",
      company: "Noveltysoft",
      companylogo: require("./assets/images/novelty.png"),
      date: "Dec 2022 – Sep 2023",
      desc: "Conducted extensive end-to-end testing of VoyceAdmins Product across devices, browsers and user scnerios.Transulated designs into test cases for optimal coverage, collaborated with stakeholders, and delivered detailed test reports.",
      descBullets: [
        "Mannual Testing", "Automation Testing using Selenium(Python)"
      ]


    },

    {
      role: "SQA Intern",
      company: "Afinti",
      companylogo: require("./assets/images/afiniti_com_logo.png"),
      date: "Aug 2020 – Oct 2020",
      desc: "Conducted Manual Testing of AI-based Calling Product(Cisco WebX Application), resolving issues through cross-functional collaboratiom. Ensured software quality using bug tracking and black-box testing, exceeding functional and non-functional requirements.",
      descBullets: [
        "Mannual Testing", "Cross Browser Testing", "Bug Tracking and Reporting", "Black-Box Testing", "Functional Testing"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Projects Related to SQA",
  projects: [
    {
      image: require("./assets/images/trailercentral-footer.png"),
      projectName: "CRM - Trailer Centeral",
      projectDesc: "Trailer CENTRAL optimizes online inventory management and customer relationships with a platform that simplifies inventory updates across channels, boosts web traffic & lead conversions, and manages leads efficiently for higher close rates. They also offer website design & development to maximize online presence and drive lead growth.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.trailercentral.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/voyceadmins.png"),
      projectName: "VoyceAdmins",
      projectDesc: "VoyceAdmins: AI-enabled IVR solution with advanced switching. Local machine learning enhances caller connectivity, voice, and DTMF guidance, elevating service quality and capabilities beyond regular auto-attendance.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://voyceadmins.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/cisco-removebg-preview.png"),
      projectName: "Cisco WebX Application",
      projectDesc: "Cisco Webex: Cloud-based communication & collaboration platform, offering video conferencing, web meetings, file sharing, and messaging. Ideal for remote work, enabling collaboration from anywhere, anytime, on any device.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.webex.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff!",

  achievementsCards: [
    {
      title: "Google Developer Student Club",
      subtitle:
        "Core Team Member @GDSC CUI Attock",
      image: require("./assets/images/download-removebg-preview.png"),
      imageAlt: "Google Developer Student Club",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1vOud_x6gASa32Vf36UWsC7RdfWkYvyJe/view?usp=sharing"
        }

      ]
    },
    {
      title: "Microsoft Learn Student Ambassador Lahore",
      subtitle:
        "Managed Event TechTehwar 2.0",
      image: require("./assets/images/micorosoft.png"),
      imageAlt: "Microsoft Learn Student Ambassador Lahore",
      footerLink: [

      ]
    },

    {
      title: "Fiverr",
      subtitle: "Level 1 Seller",
      image: require("./assets/images/fiverr_com_logo.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Level 1 Fiverr Seller", url: "https://drive.google.com/file/d/1IPNjfO1T_DwTOCq9CANlZg8caKPe3K09/view?usp=sharing" }

      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Services",
  subtitle:
    "Services Providing:",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.fiverr.com/kashirhasnain/design-uml-diagrams-use-case-class-sequence-dfd-er-erd-diagram",
      title: "System Modeling",
      description:
        "Unleash clarity and efficiency in your projects with comprehensive UML diagram services"
    },
    {
      url: "https://www.fiverr.com/kashirhasnain/write-srs-or-professional-software-requirement-document",
      title: "Software Requirement Specification Documentation",
      description:
        "Get Flawless Software Development & Documentation: Expert SRS, Use Cases, Testing & More!"
    },
    {
      url: "https://www.fiverr.com/kashirhasnain/install-configure-jira-and-help-you-with-jira-tasks",
      title: "JIRA Configuration",
      description:
        "Get set up for success with my expert JIRA installation, configuration, and training services."
    },
    {
      url: "https://www.fiverr.com/kashirhasnain/do-web-and-mobile-application-qa-testing-and-report-bugs",
      title: "Manual Testing",
      description:
        "Expert website & mobile app testing: Identify & fix issues with detailed reports & multi-device testing."
    },
    {
      url: "https://www.fiverr.com/kashirhasnain/do-api-testing-with-rest-assured-postman-soapui",
      title: "API Testing with Postman and SoapUI",
      description:
        "Ensure API Excellence: Expert testing for functionality, performance & reliability. Let's make your API soar!"
    },
    {
      url: "https://www.fiverr.com/kashirhasnain/do-web-automation-using-selenium-python",
      title: "Automation Testing using Selenium",
      description:
        "Automate the Web with Python & Selenium: Save Time & Effort on Testing"
    },
    {
      url: "https://www.fiverr.com/kashirhasnain/automate-test-cases-using-selenium-cypress-and-playwright",
      title: "Automation Testing using Cypress and Playwright",
      description:
        "Unleash Efficiency & Productivity: Expert Automation Solutions with Cypress.io, Selenium, & Playwright. Get a customized plan for your success."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92322-5801857",
  email_address: "hasnainkashir6105@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
