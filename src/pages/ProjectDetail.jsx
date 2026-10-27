
import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowLeft, HiXMark, HiOutlineCheckCircle } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import { getProjectBySlug } from "../data/projects";
import Reveal from "../components/Reveal";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const [lightbox, setLightbox] = useState(null);

  if (!project) return <Navigate to="/" replace />;

  const { modelResults } = project;

  return (
    <div className="pt-24 pb-20">
      <div className="section-container">
        <Link
          to="/#portfolio"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 dark:text-primary-300 mb-6"
        >
          <HiArrowLeft /> Back to Portfolio
        </Link>

        <Reveal>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">{project.title}</h1>
          <p className="mt-3 text-lg text-slate-500 dark:text-slate-400 max-w-2xl">{project.tagline}</p>

          <div className="flex flex-wrap gap-3 mt-6">
            <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
              <FaGithub /> Source Code
            </a>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Live Demo
              </a>
            )}
          </div>

          <div className="mt-8 rounded-2xl overflow-hidden shadow-card max-w-4xl mx-auto">
            <img src={project.heroImage} alt={project.title} className="w-full max-h-[420px] object-cover object-top" />
          </div>
        </Reveal>

        {/* Overview */}
        <Reveal delay={0.1}>
          <SectionHeading>Overview</SectionHeading>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">{project.description}</p>
        </Reveal>

        {/* Key Features */}
        <Reveal delay={0.15}>
          <SectionHeading>Key Features</SectionHeading>
          <ul className="space-y-3 max-w-3xl">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <HiOutlineCheckCircle className="text-emerald-500 dark:text-emerald-400 text-xl mt-0.5 shrink-0" />
                <span className="text-slate-600 dark:text-slate-300">{f}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Model & Results */}
        {modelResults && (
          <Reveal delay={0.2}>
            <SectionHeading>Model &amp; Results</SectionHeading>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {modelResults.stats.map((s) => (
                <div key={s.label} className="glass-card p-4 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary-600 dark:text-primary-300">
                    {s.value}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mb-5">
              {modelResults.intro}
            </p>
            <div className="overflow-x-auto glass-card p-0">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-600 text-white">
                    {modelResults.columns.map((c) => (
                      <th key={c} className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {modelResults.rows.map((row, i) => (
                    <tr
                      key={i}
                      className={
                        row.best
                          ? "bg-primary-50 dark:bg-primary-500/10 font-semibold"
                          : "border-t border-slate-200 dark:border-white/10"
                      }
                    >
                      {row.values.map((v, j) => (
                        <td key={j} className="px-4 py-3 whitespace-nowrap">
                          {v}
                          {j === 0 && row.best && (
                            <span className="ml-2 inline-block text-[10px] font-bold uppercase tracking-wide bg-emerald-500 text-white px-2 py-0.5 rounded-full">
                              Best
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {modelResults.note && (
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-3">{modelResults.note}</p>
            )}
          </Reveal>
        )}

        {/* Tech Stack */}
        <Reveal delay={0.25}>
          <SectionHeading>Technology Used</SectionHeading>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="badge-pill !bg-primary-600 !text-white !border-primary-600">
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Screenshots */}
        {project.screenshots.length > 0 && (
          <Reveal delay={0.3}>
            <SectionHeading>Screenshots</SectionHeading>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {project.screenshots.map((s) => (
                <motion.img
                  key={s}
                  whileHover={{ scale: 1.03 }}
                  src={`/screenshots/${s}`}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  onClick={() => setLightbox(`/screenshots/${s}`)}
                  className="w-full h-40 object-cover rounded-xl cursor-pointer shadow-card"
                />
              ))}
            </div>
          </Reveal>
        )}

        <div className="mt-14 pt-6 border-t border-slate-200 dark:border-white/10">
          <Link
            to="/#portfolio"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 dark:text-primary-300"
          >
            <HiArrowLeft /> Back to Portfolio
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-8"
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-white text-3xl"
              aria-label="Close"
            >
              <HiXMark />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={lightbox}
              alt="Screenshot preview"
              className="max-w-[90%] max-h-[85vh] rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SectionHeading({ children }) {
  return (
    <h2 className="text-2xl font-bold mb-5 mt-12 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-10 after:h-1 after:rounded-full after:bg-primary-500">
      {children}
    </h2>
  );
}
