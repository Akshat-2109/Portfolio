import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { aboutParagraphs, aboutFacts, profile } from "../data/siteData";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="section-container">
        <Reveal>
          <span className="section-eyebrow">Get To Know Me</span>
          <h2 className="section-heading">About Me</h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 mt-14 items-start">
          <Reveal delay={0.1} className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary-400 to-accent opacity-30 blur-xl" />
              <motion.div
                whileHover={{ rotate: 1, scale: 1.02 }}
                className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-[1.75rem] overflow-hidden border-4 border-white dark:border-white/10 shadow-card"
              >
                <img
                  src="/images/Image.jpeg"
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.15}>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                {aboutParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                {aboutFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="glass-card px-4 py-3 flex flex-col"
                  >
                    <span className="text-xs uppercase tracking-wide text-slate-400 dark:text-slate-500">
                      {fact.label}
                    </span>
                    <span className="text-sm font-semibold mt-0.5">{fact.value}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-3 mt-6">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-outline !px-4 !py-2">
                  GitHub Profile
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline !px-4 !py-2">
                  LinkedIn Profile
                </a>
                <a href={profile.certificatesUrl} target="_blank" rel="noopener noreferrer" className="btn-outline !px-4 !py-2">
                  View Certificates
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
