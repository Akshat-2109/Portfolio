// Central source of truth for all portfolio projects.
// Ordered by priority — most impressive / relevant project first.

export const projects = [
  {
    slug: "mern-job-portal",
    title: "MERN Job Portal",
    tagline: "Full-stack job portal connecting job seekers with recruiters.",
    cardImage: "/images/Mern.png",
    heroImage: "/images/Mern2.jpg",
    description:
      "A full-stack job portal built using the MERN stack that enables job seekers to explore job opportunities and apply for positions, while recruiters can manage companies, post jobs, and review applicants.",
    features: [
      "User authentication with separate Student and Recruiter roles",
      "Job browsing, job descriptions, and application management",
      "Recruiter dashboard for company and job management",
      "MongoDB database integration with Express.js and Node.js APIs",
      "React frontend with Redux Toolkit for application state management",
    ],
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    sourceUrl: "",
    liveUrl: null,
    screenshots: [],
    modelResults: null,
  },

  {
    slug: "student-performance-analyzer",
    title: "Student Performance Analyzer",
    tagline:
      "Full-stack ML web app predicting student exam scores with 96% accuracy.",
    cardImage: "/images/SPA.png",
    heroImage: "/images/SPA.png",
    description:
      "EduPredict is a full-stack machine learning web application that predicts student exam scores using a large-scale dataset. It manages the complete ML pipeline — from preprocessing to deployment — and presents insights through an interactive analytics dashboard.",
    features: [
      "Trained on a dataset of 30,000 students and 180,000 records",
      "Benchmarks 4 regression models — Linear, Decision Tree, Random Forest, Gradient Boosting",
      "Achieves R² = 0.96 with automated selection of the best-performing model",
      "Interactive Chart.js dashboard for grade distribution, attendance trends and at-risk students",
    ],
    tech: ["Python", "Flask", "Scikit-learn", "Pandas", "Chart.js"],
    sourceUrl:
      "https://github.com/Akshat-2109/Student-Performance-analyser.git",
    liveUrl: "https://edu-predict-nine.vercel.app/",
    screenshots: ["SPA1.png", "SPA2.png", "SPA3.png", "SPA4.png", "SPA5.png"],
    modelResults: {
      intro:
        "Four regression models were trained on the same preprocessed dataset and evaluated using R², MAE, and RMSE. Model performance was benchmarked automatically, and the best-performing model was selected for deployment.",
      stats: [
        { value: "0.960", label: "Best R² Score" },
        { value: "4", label: "Models Benchmarked" },
        { value: "30,000", label: "Students in Dataset" },
        { value: "180,000", label: "Records Processed" },
      ],
      columns: ["Model", "MAE", "RMSE", "R²"],
      rows: [
        { best: true, values: ["Linear Regression", "2.03", "2.35", "0.960"] },
        { best: false, values: ["Gradient Boosting", "2.15", "2.55", "0.953"] },
        { best: false, values: ["Random Forest", "3.14", "3.88", "0.891"] },
        { best: false, values: ["Decision Tree", "3.38", "4.21", "0.872"] },
      ],
      note: null,
    },
  },
  {
    slug: "inventory-control-system",
    title: "Inventory Control System",
    tagline:
      "Desktop inventory & sales management system with real-time tracking.",
    cardImage: "/images/ICS.jpg",
    heroImage: "/images/ICS.jpg",
    description:
      "A full-stack desktop application built with Python and Tkinter for managing inventory, sales, and staff. SQLite powers the backend, keeping stock, billing and supplier records in sync in real time.",
    features: [
      "Role-based login with OTP email authentication",
      "Product billing with automatic discount calculation",
      "Employee and supplier management modules",
      "CSV-database synchronization for real-time inventory tracking",
    ],
    tech: ["Python", "Tkinter", "SQLite"],
    sourceUrl: "https://github.com/Akshat-2109/inventory_control_system.git",
    liveUrl: null,
    screenshots: [
      "ICS1.png",
      "ICS2.png",
      "ICS3.png",
      "ICS4.png",
      "ICS5.png",
      "ICS6.png",
      "ICS7.png",
    ],
    modelResults: null,
  },
  {
    slug: "file-encryption-decryption",
    title: "File Encryption & Decryption System",
    tagline:
      "Java desktop tool for secure file encryption with an interactive GUI.",
    cardImage: "/images/FileED.jpg",
    heroImage: "/images/FileED.jpg",
    description:
      "A Java-based desktop tool built with AWT and Swing for secure file management. The tool implements AES encryption and decryption in a modular architecture, giving users a simple, secure way to protect sensitive files.",
    features: [
      "AES encryption and decryption for secure file handling",
      "User authentication before accessing sensitive operations",
      "Modular architecture built with AWT and Swing",
      "Simple, intuitive GUI designed for non-technical users",
    ],
    tech: ["Java", "AWT", "Swing", "AES Encryption"],
    sourceUrl:
      "https://github.com/Akshat-2109/File-Encryption-Decryption-Tool.git",
    liveUrl: null,
    screenshots: [
      "FileED1.png",
      "FileED2.png",
      "FileED3.png",
      "FileED4.png",
      "FileED5.png",
      "FileED6.png",
    ],
    modelResults: null,
  },
  {
    slug: "phishguard-ai",
    title: "PhishGuard AI",
    tagline:
      "ML-powered phishing URL detector with a real-time analytics dashboard.",
    cardImage: "/images/PhishGuard_AI.jpg",
    heroImage: "/images/PhishGuard_AI.jpg",
    description:
      "PhishGuard AI is a full-stack phishing detection system built with Flask and scikit-learn. A Random Forest model analyzes lexical URL features to classify URLs as phishing or legitimate in real time, backed by an interactive dashboard for monitoring scan activity.",
    features: [
      "Random Forest classifier trained on 242,000+ URLs, achieving 94% accuracy",
      "Extracts 15 lexical URL features — entropy, subdomains, suspicious keywords, IP usage",
      "Real-time confidence scoring for every scanned URL",
      "Interactive dashboard with scan history and live analytics",
    ],
    tech: ["Python", "Flask", "Scikit-learn", "Random Forest", "HTML/CSS/JS"],
    sourceUrl: "https://github.com/Akshat-2109/PhishGuard_AI.git",
    liveUrl: "https://phish-guard-ai-rosy.vercel.app/",
    screenshots: ["PhishGuard1.png", "PhishGuard2.png", "PhishGuard3.png"],
    modelResults: {
      intro:
        "Three classification models were trained and evaluated on a balanced dataset of phishing and legitimate URLs. Random Forest was selected for deployment, offering the best ROC AUC and precision while keeping recall strong.",
      stats: [
        { value: "94%", label: "Detection Accuracy" },
        { value: "0.986", label: "ROC AUC Score" },
        { value: "48,412", label: "URLs in Test Set" },
        { value: "15", label: "Lexical Features" },
      ],
      columns: [
        "Model",
        "Accuracy",
        "Precision",
        "Recall",
        "F1 Score",
        "ROC AUC",
      ],
      rows: [
        {
          best: true,
          values: [
            "Random Forest",
            "94.0%",
            "95.8%",
            "92.1%",
            "93.9%",
            "0.986",
          ],
        },
        {
          best: false,
          values: [
            "Decision Tree",
            "94.0%",
            "94.4%",
            "93.5%",
            "94.0%",
            "0.942",
          ],
        },
        {
          best: false,
          values: [
            "Logistic Regression",
            "88.1%",
            "90.0%",
            "85.7%",
            "87.8%",
            "0.945",
          ],
        },
      ],
      note: "Evaluated on a held-out test set of 48,412 URLs (24,206 phishing, 24,206 legitimate).",
    },
  },
  {
    slug: "mynotebook",
    title: "MyNotebook",
    tagline:
      "A clean, distraction-free digital notebook for notes and reminders.",
    cardImage: "/images/Notebook.jpg",
    heroImage: "/images/Notebook.jpg",
    description:
      "MyNotebook is a personal digital notebook for capturing thoughts, ideas, reminders, and important information in a simple, organized way, accessible from anywhere in the browser.",
    features: [
      "Create notes in paragraphs or bullet points",
      "Simple, organized note management",
      "Access notes anytime, anywhere via the browser",
      "Minimal, distraction-free interface",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    sourceUrl: "https://github.com/Akshat-2109/MyNotebook.git",
    liveUrl: "https://my-notebook-gray.vercel.app/",
    screenshots: [
      "MyNotebook1.png",
      "MyNotebook2.png",
      "MyNotebook3.png",
      "MyNotebook4.png",
    ],
    modelResults: null,
  },
  {
    slug: "qr-scanner-generator",
    title: "QR Scanner And Generator",
    tagline:
      "Simple, responsive QR code generator built as a first front-end project.",
    cardImage: "/images/QR_image.jpg",
    heroImage: "/images/QR_image.jpg",
    description:
      "QR World is my first front-end project, built with HTML, CSS and JavaScript. It provides a simple, user-friendly interface for generating QR codes and was a hands-on introduction to responsive design and GitHub Pages deployment.",
    features: [
      "Generate QR codes instantly from any text or link",
      "Responsive design that works across devices",
      "Deployed and hosted using GitHub Pages",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    sourceUrl: "https://github.com/Akshat-2109/QR-World.git",
    liveUrl: "https://qr-code-h49v.onrender.com",
    screenshots: ["QR1.png", "QR2.png", "QR3.png", "QR4.png"],
    modelResults: null,
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    tagline:
      "This personal portfolio site — built to showcase my projects and skills.",
    cardImage: "/images/photo1.jpg",
    heroImage: "/images/photo1.jpg",
    description:
      "This is the personal portfolio website you're currently exploring — designed to showcase my skills, projects, and achievements in Software Development and Data Science, and rebuilt using a modern React + Tailwind + Framer Motion stack.",
    features: [
      "Responsive design with a dark mode toggle",
      "Dedicated case-study page for every project",
      "Smooth scroll animations powered by Framer Motion",
      "Working contact form for recruiters and collaborators to reach out",
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "React Icons"],
    sourceUrl: "https://github.com/Akshat-2109/Portfolio.git",
    liveUrl: "https://portfolio-q81d.onrender.com",
    screenshots: [],
    modelResults: null,
  },
];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
