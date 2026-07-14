/**
 * Raghav Nandwani — Portfolio
 * All personal content lives in data objects below.
 */

/* -------------------------------------------------------------------------- */
/* Data                                                                        */
/* -------------------------------------------------------------------------- */

const CONTACT = {
  email: "rvnandwani@gmail.com",
  linkedin: "https://www.linkedin.com/in/raghavnandwani",
  github: "https://github.com/rvnandwani",
  resume: "resume/Raghav_Nandwani_ResumeAI.pdf",
};

const ABOUT = {
  summary: [
    "I am an Engineering Manager and Applied AI practitioner with 5+ years of experience leading the development, optimization, and deployment of AI systems spanning speech, language, vision, and multimodal domains.",
    "At Jio Platforms I lead the Core AI group—benchmarking, training, and productionizing models that power devices, smart glasses, robotics, and multimodal experiences. Earlier roles at Qualcomm XR Research, Monarch Tractor, and Uniphore deepened my work in on-device perception, autonomy, and production computer vision.",
    "I translate cutting-edge research into scalable platforms: conversational and Voice AI, agentic pipelines, edge inference, and MLOps. My focus is building complete intelligent systems—software intelligence and embodied intelligence—that ship reliably and create measurable impact.",
  ],
  personal: [
    {
      title: "Travel",
      text: "I love traveling, exploring different places, meeting people from diverse backgrounds, and understanding their perspectives and lifestyles.",
    },
    {
      title: "Sports",
      text: "I enjoy watching multiple sports. Football is my favorite, along with cricket, basketball, and occasional tennis.",
    },
    {
      title: "Reading and Gaming",
      text: "In my free time I read books about finance and productivity and enjoy playing video games.",
    },
    {
      title: "Ocean Activities",
      text: "I enjoy scuba diving and snorkeling activities.",
    },
  ],
};

const SKILLS = [
  {
    category: "AI & Machine Learning",
    items: [
      "Applied AI Research",
      "Model Prototyping",
      "Benchmarking & Ablations",
      "Deep Learning",
      "Transformers",
      "Multimodal Learning",
      "Fine-tuning",
      "Model Evaluation",
    ],
  },
  {
    category: "LLMs",
    items: [
      "Large Language Models",
      "Prompt & Context Systems",
      "Semantic Caching",
      "Memory Systems",
      "Personalization",
      "VQA",
    ],
  },
  {
    category: "Agentic AI",
    items: [
      "Voice-to-Voice Agents",
      "Agent Pipelines",
      "Tool Orchestration",
      "Conversational AI",
      "Adaptive Interactions",
    ],
  },
  {
    category: "Voice AI",
    items: [
      "Wake Word Detection",
      "Language Identification",
      "Speech-to-Text (ASR)",
      "Text-to-Speech (TTS)",
      "Voice Cloning",
      "Speaker Diarization",
    ],
  },
  {
    category: "Robotics & Physical AI",
    items: [
      "Autonomous Navigation",
      "Localization",
      "Dense Mapping",
      "Policy Learning",
      "Perception Pipelines",
      "XR Scene Understanding",
      "Human-Robot Interaction",
    ],
  },
  {
    category: "Programming",
    items: ["Python", "C++", "ROS 2", "PyTorch", "TensorFlow", "CUDA"],
  },
  {
    category: "Cloud / Infrastructure",
    items: [
      "Docker",
      "Kubernetes",
      "Databricks",
      "MLOps Pipelines",
      "Edge Deployment",
      "NVIDIA Jetson",
      "Isaac ROS",
      "TensorRT",
    ],
  },
  {
    category: "Tools",
    items: [
      "Quantization & Pruning",
      "Inference Profiling",
      "Medallion Architecture",
      "Observability Dashboards",
      "Experiment Tracking",
    ],
  },
];

const EXPERIENCE = [
  {
    id: "jio",
    organization: "Jio Platforms",
    location: "Mumbai, India",
    role: "Tech Lead (Core AI)",
    duration: "Oct 2024 – Present",
    achievements: [
      "Lead the Core AI group responsible for benchmarking, training, optimizing, and deploying state-of-the-art AI models powering Jio’s device ecosystem—including AI platforms, smart glasses, robotics, and multimodal experiences.",
      "Drive end-to-end development and productionization of AI across speech, language, and vision, collaborating with research, platform, and product teams.",
      "Evaluated, fine-tuned, and deployed Wake Word Detection, Language Identification (LID), Speech-to-Text, Voice Cloning, TTS, and Visual Question Answering systems.",
      "Improved LID accuracy for Indian languages from ~78% to 92% (+14 pp over leading cloud alternatives).",
      "Architected a low-latency Voice-to-Voice agentic AI platform (ASR, LID, diarization, LLMs, TTS) serving 10,000+ requests/hour, designed to scale beyond 1M requests/day.",
      "Established MLOps and automated model delivery pipelines, cutting deployment turnaround by 75%.",
      "Designed a Databricks data platform on Medallion Architecture for scalable experimentation and AI lifecycle management.",
      "Built observability dashboards, semantic query caching, AI note-taking, short/long-term memory, and personalization frameworks.",
      "Led cloud and edge inference optimization balancing latency, accuracy, and resource utilization; evaluated multimodal and embodied AI for next-gen devices.",
    ],
    projects: [
      "Jio Frames — AI wearable / Voice AI platform",
      "Jio Home — Agentic AI for the home",
      "Jio Humanoid — embodied AI demonstration",
      "Voice-to-Voice agentic AI platform",
      "Databricks Medallion data platform for AI lifecycle",
    ],
    technologies: [
      "LLMs",
      "ASR / STT",
      "TTS",
      "LID",
      "Speaker Diarization",
      "VQA",
      "Wake Word Detection",
      "Voice Cloning",
      "PyTorch",
      "Databricks",
      "MLOps",
      "Edge & Cloud Inference",
    ],
    media: [
      {
        type: "linkedin",
        title: "Jio Frames Voice AI at AI Summit 2026 in Delhi",
        url: "https://www.linkedin.com/posts/jio_introducing-jioframes-an-ai-wearable-platform-activity-7432776999976374272--n8P?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB6XqewB959BYnb5BpwEwdBIwI1M_ZLznRQ",
      },
      {
        type: "linkedin",
        title: "Jio Home Agentic AI at AI Summit 2026 in Delhi",
        url: "https://www.linkedin.com/posts/jio_intelligence-for-every-home-jioaihome-activity-7430570421252591617-82eA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB6XqewB959BYnb5BpwEwdBIwI1M_ZLznRQ",
      },
      {
        type: "linkedin",
        title: "Jio Humanoid demonstration at AI Summit 2026 in Delhi",
        url: "https://www.linkedin.com/posts/rahul-mohandas-495a3a12_aiimpactsummit2026-aiforindiabyindia-ugcPost-7429493227336069122-h2U3/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB6XqewB959BYnb5BpwEwdBIwI1M_ZLznRQ",
      },
    ],
  },
  {
    id: "gift-a-life",
    organization: "Gift A Life",
    location: "Delhi, India",
    role: "Senior Data Scientist (Computer Vision & DevOps)",
    duration: "Feb 2024 – Oct 2024",
    achievements: [
      "Deployed edge-optimized computer vision models for production applications, balancing accuracy, latency, and resource constraints.",
      "Improved inference performance through profiling and architecture-level optimization for efficient deployment.",
    ],
    projects: ["Edge-optimized computer vision production systems"],
    technologies: [
      "Computer Vision",
      "Edge AI",
      "Model Optimization",
      "DevOps",
      "Inference Profiling",
    ],
    media: [],
  },
  {
    id: "qualcomm",
    organization: "Qualcomm Technologies",
    location: "San Diego, CA, USA",
    role: "Senior Engineer, XR Research",
    duration: "Mar 2023 – Dec 2023",
    achievements: [
      "Conducted applied research in on-device perception and scene understanding for XR platforms under real-time and power constraints.",
      "Improved detection and segmentation accuracy by ~25% via architectural experimentation, transformer-based feature fusion, and multimodal learning.",
      "Benchmarked models across latency, accuracy, and hardware efficiency for edge accelerator deployment.",
      "Collaborated with hardware and systems teams to translate research models into production-ready implementations.",
      "Mentored engineers on applied ML research workflows, experimentation, and system-level optimization.",
    ],
    projects: [
      "On-device XR perception & scene understanding",
      "Multimodal detection and segmentation research",
    ],
    technologies: [
      "Computer Vision",
      "Transformers",
      "Multimodal Learning",
      "Edge Accelerators",
      "XR / AR",
      "PyTorch",
    ],
    media: [],
  },
  {
    id: "monarch",
    organization: "Monarch Tractor",
    location: "San Francisco Bay Area, CA, USA",
    role: "Autonomy Engineer Intern",
    duration: "Nov 2022 – Mar 2023",
    achievements: [
      "Prototyped and evaluated real-time perception and localization systems for autonomous agricultural vehicles in unstructured environments.",
      "Conducted field validation and robustness testing of perception pipelines under diverse environmental conditions.",
      "Optimized models for edge deployment through iterative accuracy–latency experimentation.",
      "Collaborated with autonomy engineers to validate system performance against real-world vehicle behavior.",
    ],
    projects: [
      "Real-time perception & localization for autonomous tractors",
      "Field validation of perception pipelines",
    ],
    technologies: [
      "Robotics Perception",
      "Localization",
      "Edge Deployment",
      "Autonomy Systems",
    ],
    media: [],
  },
  {
    id: "uniphore",
    organization: "Uniphore",
    location: "Dallas, TX, USA",
    role: "Data Scientist",
    duration: "Aug 2020 – Aug 2022",
    achievements: [
      "Developed and deployed real-time computer vision systems in customer-facing production environments with a focus on low-latency inference and operational reliability.",
      "Partnered with product and platform teams to translate customer requirements into scalable, production-ready perception pipelines.",
      "Managed end-to-end data project setup and annotation team coordination across multiple initiatives.",
    ],
    projects: [
      "Real-time computer vision in production",
      "Customer perception pipelines",
    ],
    technologies: [
      "Computer Vision",
      "Production ML",
      "Data Pipelines",
      "Python",
    ],
    media: [],
  },
];

const EDUCATION = [
  {
    id: "umd",
    university: "University of Maryland",
    degree: "Master of Engineering (M.Eng.)",
    field: "Robotics & Artificial Intelligence",
    duration: "August 2018 – May 2020",
    courses: [
      "Classical and Deep Learning Approaches for Geometric Computer Vision",
      "Advanced Techniques in Visual Learning & Recognition",
      "Perception for Autonomous Robots",
      "Sensor Systems",
      "Fundamentals of AI and Deep Learning",
      "Human-Robot Interaction",
      "Planning for Autonomous Robots",
    ],
    projects: {
      "Visual Odometry":
        "https://github.com/rvnandwani/ENPM673-P5-Visual-Odometry",
      "Traffic Sign Detection and Recognition":
        "https://github.com/rvnandwani/ENPM673-P6-Traffic-Sign-Detection-and-Recognition",
      "LiDAR Obstacle Detection":
        "https://github.com/rvnandwani/LIDAR-Obstacle-Detection-Sensor-Fusion-Udacity-Program",
      "3D Object Tracking using Sensor Fusion":
        "https://github.com/rvnandwani/3D-Object-Tracking-Sensor-Fusion-Udacity-Program",
      "Livecell Segmentation using U-Net":
        "https://github.com/rvnandwani/livecell-segmentation-U-Net",
      "Neural Network Architecture Analysis":
        "https://github.com/rvnandwani/Neural-Network-architecture-analysis-on-CIFAR10-Classification",
    },
    research: null,
  },
  {
    id: "manipal",
    university: "Manipal University Jaipur",
    degree: "Bachelor of Technology (B.Tech.)",
    field: "Mechatronics Engineering",
    duration: "July 2013 – June 2017",
    courses: [
      "Industrial Robotics",
      "Modern Control Systems",
      "Digital System Design",
      "Mechatronics System Design",
      "Engineering Physics",
    ],
    projects: {},
    research: null,
  },
];

const CERTIFICATIONS = [
  {
    name: "The Manager's Guide to Difficult Conversations",
    organization: "LinkedIn",
    year: "2026",
    credential_url:
      "https://www.linkedin.com/learning/certificates/5be15877cc16703962a8c6a94b99fb8377c9049510309db4bc17e9427f3ab701/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B7WgqT8a4SJuYIr0stZ9Vtg%3D%3D",
  },
  {
    name: "Leadership Communication in the Flow of Work",
    organization: "LinkedIn",
    year: "2026",
    credential_url:
      "https://www.linkedin.com/learning/certificates/4c32ee5a3400784cd97082eedd3a2050b95e5897726466c8c880993d42e07500/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B7WgqT8a4SJuYIr0stZ9Vtg%3D%3D",
  },
  {
    name: "Machine Learning Pipeline on AWS",
    organization: "Amazon Web Services (AWS)",
    year: "2026",
    credential_url:
      "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fwww.aws.training%2FTranscript%2FCompletionCertificateHtml%3Ftranscriptid%3DcOTGxbsolECyEOP20hX7UA2&urlhash=JVPt&mt=DpLbba7J_fNdrocWfUYXY-Jk9MWkBoApnOYuo3Ht91O6-9yOj0qMYboPU1UJ5g27z7mXwg7XnAoVHky1jCyQAdDWYkQ&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B7WgqT8a4SJuYIr0stZ9Vtg%3D%3D",
  },
  {
    name: "Sensor Fusion Nanodegree",
    organization: "Udacity",
    year: "2021",
    credential_url:
      "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fconfirm.udacity.com%2F4PQDFPAK&urlhash=8GDY&mt=oOPftbhj7L4HB2bhEBx5k7S6VarsTf2A28Y4dnhJb5PL_l5Fyp5v0nNBwyMEQnAaEHjdjyDGDsQEu1nRKKlz2hhtjo4&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B7WgqT8a4SJuYIr0stZ9Vtg%3D%3D",
  },
  {
    name: "Machine Learning by Stanford University on Coursera",
    organization: "Stanford University / Coursera",
    year: "2019",
    credential_url:
      "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fwww.coursera.org%2Faccount%2Faccomplishments%2Fcertificate%2FUQ3NFTP3ERWA&urlhash=bXHe&mt=hV1zqNL-B5CGK3hTGomvslZcFsgBgpamftXA9akNTfiyFHdxsYOlOXEKKAYiszy3uxV1PnDT59ekuhFYORH7NdvHE4M&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BSseWshPsSWe1rTEaG4hpCQ%3D%3D",
  },
];

const TESTIMONIALS = [
  {
    name: "Sebastien Mounier",
    designation: "Senior Director",
    company: "Qualcomm",
    linkedin: "https://www.linkedin.com/in/sebastien-mounier-4b09b058/",
    highlight:
      "He has a strong technical base that he can apply to a variety of tasks.",
  },
  {
    name: "Dhirendra Vashisht",
    designation: "DGM",
    company: "CNH Industrial",
    linkedin: "https://www.linkedin.com/in/dhirendra-vashisht-696361a0/",
    highlight: "He is a quick learner and takes initiatives.",
  },
  {
    name: "Hayden Kellermeyer",
    designation: "Senior Program Manager",
    company: "Uniphore",
    linkedin: "https://www.linkedin.com/in/hayden-kellermeyer/",
    highlight:
      "Raghav's technical know-how will help him succeed on any team.",
  },
];

/* -------------------------------------------------------------------------- */
/* Icons (inline SVG)                                                          */
/* -------------------------------------------------------------------------- */

const ICONS = {
  email: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-9.5 15v-7H7v7h2.5zM8.25 9.75a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM18 18v-4.25c0-2.2-1.2-3.25-2.8-3.25-1.3 0-1.9.7-2.2 1.2V11H10.5c.0 1.35 0 7 0 7H13v-3.9c0-.2 0-.4.05-.55.15-.4.5-.85 1.1-.85.8 0 1.1.6 1.1 1.5V18H18z"/></svg>`,
  github: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.8c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.48A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z"/></svg>`,
  external: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h6v2H7v10h10v-4h2v6H5V5z"/></svg>`,
  close: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M18.3 5.71 12 12.01l-6.3-6.3-1.4 1.42 6.29 6.29-6.3 6.3 1.42 1.4 6.29-6.28 6.3 6.3 1.4-1.42-6.28-6.3 6.3-6.29z"/></svg>`,
  download: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 16 7 11l1.4-1.4 2.6 2.55V4h2v8.15l2.6-2.55L17 11l-5 5zm-7 2h14v2H5v-2z"/></svg>`,
};

/* -------------------------------------------------------------------------- */
/* Helpers                                                                     */
/* -------------------------------------------------------------------------- */

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttr(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;");
}

function socialLinksHtml(className = "social-links") {
  return `
    <ul class="${className}" role="list">
      <li>
        <a href="mailto:${CONTACT.email}" aria-label="Email Raghav Nandwani" title="Email">
          ${ICONS.email}
        </a>
      </li>
      <li>
        <a href="${CONTACT.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" title="LinkedIn">
          ${ICONS.linkedin}
        </a>
      </li>
      <li>
        <a href="${CONTACT.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" title="GitHub">
          ${ICONS.github}
        </a>
      </li>
    </ul>
  `;
}

/* -------------------------------------------------------------------------- */
/* Renderers                                                                   */
/* -------------------------------------------------------------------------- */

function renderAbout() {
  const summaryEl = document.getElementById("about-summary");
  const personalEl = document.getElementById("personal-grid");
  if (!summaryEl || !personalEl) return;

  summaryEl.innerHTML = ABOUT.summary
    .map((p) => `<p>${escapeHtml(p)}</p>`)
    .join("");

  personalEl.innerHTML = ABOUT.personal
    .map(
      (item) => `
      <article class="personal-card reveal">
        <h4>${escapeHtml(item.title)}</h4>
        <p>${escapeHtml(item.text)}</p>
      </article>
    `
    )
    .join("");
}

function renderSkills() {
  const filtersEl = document.getElementById("skill-filters");
  const gridEl = document.getElementById("skills-grid");
  if (!filtersEl || !gridEl) return;

  const categories = ["All", ...SKILLS.map((s) => s.category)];

  filtersEl.innerHTML = categories
    .map(
      (cat, i) => `
      <button type="button" class="skill-filter${i === 0 ? " is-active" : ""}" data-index="${i}" aria-pressed="${i === 0}">
        ${escapeHtml(cat)}
      </button>
    `
    )
    .join("");

  function paint(activeIndex) {
    const activeCategory = categories[activeIndex] || "All";
    const groups =
      activeCategory === "All"
        ? SKILLS
        : SKILLS.filter((g) => g.category === activeCategory);

    gridEl.classList.add("is-filtering");
    gridEl.innerHTML = groups
      .map(
        (group) => `
        <div class="skill-group reveal is-visible" data-category="${escapeAttr(group.category)}">
          <h3 class="skill-group-title">${escapeHtml(group.category)}</h3>
          <div class="skill-cards">
            ${group.items
              .map(
                (skill) => `
              <article class="skill-card" tabindex="0">
                <span class="skill-card-dot" aria-hidden="true"></span>
                <span>${escapeHtml(skill)}</span>
              </article>
            `
              )
              .join("")}
          </div>
        </div>
      `
      )
      .join("");

    requestAnimationFrame(() => {
      gridEl.classList.remove("is-filtering");
    });
  }

  paint(0);

  filtersEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".skill-filter");
    if (!btn) return;
    const index = Number(btn.dataset.index);
    filtersEl.querySelectorAll(".skill-filter").forEach((b) => {
      b.classList.remove("is-active");
      b.setAttribute("aria-pressed", "false");
    });
    btn.classList.add("is-active");
    btn.setAttribute("aria-pressed", "true");
    paint(index);
  });
}

function renderExperience() {
  const listEl = document.getElementById("experience-list");
  if (!listEl) return;

  listEl.innerHTML = EXPERIENCE.map(
    (job, index) => `
    <button
      type="button"
      class="exp-card reveal"
      data-experience-id="${escapeHtml(job.id)}"
      style="--i: ${index}"
      aria-haspopup="dialog"
    >
      <div class="exp-card-main">
        <h3>${escapeHtml(job.organization)}</h3>
        <p class="exp-location">${escapeHtml(job.location)}</p>
        <p class="exp-role">${escapeHtml(job.role)}</p>
      </div>
      <div class="exp-card-meta">
        <span class="exp-duration">${escapeHtml(job.duration)}</span>
        <span class="exp-hint">View details →</span>
      </div>
    </button>
  `
  ).join("");

  listEl.addEventListener("click", (e) => {
    const card = e.target.closest("[data-experience-id]");
    if (!card) return;
    const job = EXPERIENCE.find((j) => j.id === card.dataset.experienceId);
    if (job) openExperienceModal(job);
  });
}

function renderEducation() {
  const listEl = document.getElementById("education-list");
  if (!listEl) return;

  listEl.innerHTML = EDUCATION.map(
    (edu, index) => `
    <button
      type="button"
      class="edu-card reveal"
      data-education-id="${escapeHtml(edu.id)}"
      style="--i: ${index}"
      aria-haspopup="dialog"
    >
      <h3>${escapeHtml(edu.university)}</h3>
      <p class="edu-degree">${escapeHtml(edu.degree)}${edu.field ? ` — ${escapeHtml(edu.field)}` : ""}</p>
      <p class="edu-duration">${escapeHtml(edu.duration)}</p>
      <span class="edu-hint">View details →</span>
    </button>
  `
  ).join("");

  listEl.addEventListener("click", (e) => {
    const card = e.target.closest("[data-education-id]");
    if (!card) return;
    const edu = EDUCATION.find((x) => x.id === card.dataset.educationId);
    if (edu) openEducationModal(edu);
  });
}

function renderCertifications() {
  const listEl = document.getElementById("certifications-list");
  const moreEl = document.getElementById("certifications-more");
  if (!listEl) return;

  listEl.innerHTML = CERTIFICATIONS.map(
    (cert) => `
    <a
      class="cert-card reveal"
      href="${escapeAttr(cert.credential_url)}"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="${escapeAttr(cert.name)} — open credential"
    >
      <div>
        <h3>${escapeHtml(cert.name)}</h3>
        <p class="cert-org">${escapeHtml(cert.organization)}</p>
      </div>
      <div class="cert-meta">
        <span class="cert-year">${escapeHtml(cert.year)}</span>
        <span class="cert-external" aria-hidden="true">${ICONS.external}</span>
      </div>
    </a>
  `
  ).join("");

  if (moreEl) {
    moreEl.innerHTML = `More on <a href="${escapeAttr(CONTACT.linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn profile</a>`;
  }
}

function renderTestimonials() {
  const listEl = document.getElementById("testimonials-list");
  const moreEl = document.getElementById("testimonials-more");
  if (!listEl) return;

  listEl.innerHTML = TESTIMONIALS.map(
    (t) => `
    <article class="testimonial-card reveal">
      <blockquote>
        <p>“${escapeHtml(t.highlight)}”</p>
      </blockquote>
      <footer>
        <a class="testimonial-name" href="${escapeAttr(t.linkedin)}" target="_blank" rel="noopener noreferrer">
          ${escapeHtml(t.name)}
          <span class="testimonial-linkedin" aria-hidden="true">${ICONS.linkedin}</span>
          <span class="sr-only">(LinkedIn)</span>
        </a>
        <p class="testimonial-meta">${escapeHtml(t.designation)}, ${escapeHtml(t.company)}</p>
      </footer>
    </article>
  `
  ).join("");

  if (moreEl) {
    moreEl.innerHTML = `More on <a href="${escapeAttr(CONTACT.linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn profile</a>`;
  }
}

function renderContact() {
  const iconsEl = document.getElementById("contact-icons");
  const emailEl = document.getElementById("contact-email");
  if (iconsEl) iconsEl.innerHTML = socialLinksHtml("social-links social-links--lg");
  if (emailEl) {
    emailEl.href = `mailto:${CONTACT.email}`;
    emailEl.textContent = CONTACT.email;
  }

  document.querySelectorAll("[data-resume-href]").forEach((el) => {
    el.setAttribute("href", CONTACT.resume);
    el.setAttribute("download", "Raghav_Nandwani_ResumeAI.pdf");
  });

  document.querySelectorAll("[data-contact-href]").forEach((el) => {
    el.setAttribute("href", "#contact");
  });

  const heroSocial = document.getElementById("hero-social");
  if (heroSocial) heroSocial.innerHTML = socialLinksHtml();

  const footerSocial = document.getElementById("footer-social");
  if (footerSocial) footerSocial.innerHTML = socialLinksHtml("social-links social-links--sm");
}

/* -------------------------------------------------------------------------- */
/* Modal                                                                       */
/* -------------------------------------------------------------------------- */

let lastFocused = null;

function getModalEls() {
  return {
    backdrop: document.getElementById("modal-backdrop"),
    modal: document.getElementById("modal"),
    title: document.getElementById("modal-title"),
    body: document.getElementById("modal-body"),
    closeBtn: document.getElementById("modal-close"),
  };
}

function openModal(title, bodyHtml) {
  const { backdrop, modal, title: titleEl, body, closeBtn } = getModalEls();
  if (!backdrop || !modal) return;

  lastFocused = document.activeElement;
  titleEl.textContent = title;
  body.innerHTML = bodyHtml;
  backdrop.hidden = false;
  backdrop.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  requestAnimationFrame(() => {
    backdrop.classList.add("is-open");
    modal.classList.add("is-open");
  });

  if (closeBtn) closeBtn.focus();
}

function closeModal() {
  const { backdrop, modal, body } = getModalEls();
  if (!backdrop || !modal || backdrop.hidden) return;
  if (backdrop.dataset.closing === "1") return;

  backdrop.dataset.closing = "1";
  backdrop.classList.remove("is-open");
  modal.classList.remove("is-open");

  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    backdrop.hidden = true;
    backdrop.setAttribute("aria-hidden", "true");
    delete backdrop.dataset.closing;
    body.innerHTML = "";
    document.body.classList.remove("modal-open");
    backdrop.removeEventListener("transitionend", onEnd);
    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
  };

  const onEnd = (e) => {
    if (e.target === backdrop) finish();
  };
  backdrop.addEventListener("transitionend", onEnd);
  setTimeout(finish, 320);
}

function openExperienceModal(job) {
  const mediaHtml =
    job.media && job.media.length
      ? `
      <section class="modal-block">
        <h4>LinkedIn Posts &amp; Media</h4>
        <ul class="modal-links">
          ${job.media
            .map((m) => {
              const type = String(m.type || "link").toLowerCase();
              const icon =
                type === "youtube"
                  ? ICONS.youtube
                  : type === "linkedin"
                    ? ICONS.linkedin
                    : ICONS.external;
              return `
            <li>
              <a href="${escapeAttr(m.url)}" target="_blank" rel="noopener noreferrer">
                <span class="media-type">${escapeHtml(type)}</span>
                ${escapeHtml(m.title)}
                <span class="media-icon" aria-hidden="true">${icon}</span>
              </a>
            </li>
          `;
            })
            .join("")}
        </ul>
      </section>
    `
      : "";

  const projectsHtml =
    job.projects && job.projects.length
      ? `
      <section class="modal-block">
        <h4>Associated Projects</h4>
        <ul class="modal-bullets">
          ${job.projects.map((p) => `<li>${escapeHtml(p)}</li>`).join("")}
        </ul>
      </section>
    `
      : "";

  const body = `
    <header class="modal-header-meta">
      <p class="modal-org">${escapeHtml(job.organization)}</p>
      <p>${escapeHtml(job.location)}</p>
      <p class="modal-role">${escapeHtml(job.role)}</p>
      <p class="modal-duration">${escapeHtml(job.duration)}</p>
    </header>
    <section class="modal-block">
      <h4>Key Achievements</h4>
      <ul class="modal-bullets">
        ${job.achievements.map((a) => `<li>${escapeHtml(a)}</li>`).join("")}
      </ul>
    </section>
    ${projectsHtml}
    ${mediaHtml}
    <section class="modal-block">
      <h4>Technologies Used</h4>
      <div class="modal-tags">
        ${job.technologies.map((t) => `<span>${escapeHtml(t)}</span>`).join("")}
      </div>
    </section>
  `;

  openModal(job.organization, body);
}

function openEducationModal(edu) {
  const coursesHtml =
    edu.courses && edu.courses.length
      ? `
      <section class="modal-block">
        <h4>Key Courses</h4>
        <ul class="modal-bullets">
          ${edu.courses.map((c) => `<li>${escapeHtml(c)}</li>`).join("")}
        </ul>
      </section>
    `
      : "";

  const projectEntries = Object.entries(edu.projects || {});
  const projectsHtml = projectEntries.length
    ? `
      <section class="modal-block">
        <h4>Associated Projects</h4>
        <ul class="modal-links">
          ${projectEntries
            .map(
              ([name, url]) => `
            <li>
              <a href="${escapeAttr(url)}" target="_blank" rel="noopener noreferrer">
                ${escapeHtml(name)}
                ${ICONS.external}
              </a>
            </li>
          `
            )
            .join("")}
        </ul>
      </section>
    `
      : "";

  const researchHtml = edu.research
    ? `
      <section class="modal-block">
        <h4>Research / Thesis</h4>
        <p>${escapeHtml(edu.research)}</p>
      </section>
    `
      : "";

  const body = `
    <header class="modal-header-meta">
      <p class="modal-org">${escapeHtml(edu.university)}</p>
      <p class="modal-role">${escapeHtml(edu.degree)}${edu.field ? ` — ${escapeHtml(edu.field)}` : ""}</p>
      <p class="modal-duration">${escapeHtml(edu.duration)}</p>
    </header>
    ${coursesHtml}
    ${projectsHtml}
    ${researchHtml}
  `;

  openModal(edu.university, body);
}

function initModal() {
  const { backdrop, closeBtn } = getModalEls();
  if (!backdrop) return;

  closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

/* -------------------------------------------------------------------------- */
/* Navigation & scroll reveal                                                  */
/* -------------------------------------------------------------------------- */

function initNav() {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  const header = document.getElementById("site-header");

  const closeMobileNav = () => {
    if (!menu || !toggle) return;
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  };

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("nav-open", open);
    });
  }

  document.addEventListener("click", (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const href = link.getAttribute("href");
    if (!href || href === "#") return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    closeMobileNav();

    const headerOffset = header ? header.offsetHeight + 8 : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });
    history.pushState(null, "", href);
  });

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

let revealObserver = null;

function observeReveals() {
  const nodes = document.querySelectorAll(".reveal:not(.is-visible)");
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
  }
  nodes.forEach((el) => revealObserver.observe(el));
}

function initYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = String(new Date().getFullYear());
}

/* -------------------------------------------------------------------------- */
/* Boot                                                                        */
/* -------------------------------------------------------------------------- */

function init() {
  renderAbout();
  renderSkills();
  renderExperience();
  renderEducation();
  renderCertifications();
  renderTestimonials();
  renderContact();
  initModal();
  initNav();
  initYear();
  observeReveals();

  const backdrop = document.getElementById("modal-backdrop");
  if (backdrop) {
    backdrop.setAttribute("aria-hidden", "true");
    backdrop.hidden = true;
    backdrop.classList.remove("is-open");
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
