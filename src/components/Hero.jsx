import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { profile } from "../data/siteData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background grid + blobs */}
      <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-400/30 dark:bg-primary-500/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-accent/30 dark:bg-accent/10 rounded-full blur-3xl animate-blob [animation-delay:4s]" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-blob [animation-delay:8s]" />

      <div className="section-container relative z-10 py-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="badge-pill mx-auto mb-6"
        >
          👋 Welcome to my portfolio
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05]"
        >
          Hi, I'm <span className="gradient-text">{profile.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-5 text-lg sm:text-2xl font-medium text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
        >
          Aspiring Software Developer | Full-Stack Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-4 text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto"
        >
          B.Tech CSE student passionate about building impactful digital
          solutions.
          <span className="block mt-3 font-semibold text-primary-600 dark:text-primary-300">
            🏆 GATE 2026 Qualified
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#portfolio"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#portfolio")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="btn-primary"
          >
            View My Work <HiArrowDown />
          </a>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Download Resume <HiOutlineDocumentArrowDown />
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-600"
      >
        <HiArrowDown size={22} />
      </motion.div>
    </section>
  );
}
