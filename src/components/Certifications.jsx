import { motion } from "framer-motion";
import { HiBadgeCheck } from "react-icons/hi";
import Reveal from "./Reveal";
import { certifications } from "../data/siteData";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <div className="section-container">
        <Reveal>
          <span className="section-eyebrow">Continuous Learning</span>
          <h2 className="section-heading">Internships, Training &amp; Certifications</h2>
          <p className="text-center text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Ongoing learning through certified programs — certificates linked below.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                className="glass-card p-6 text-center h-full flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-600 dark:text-primary-300 text-2xl mb-4">
                  <HiBadgeCheck />
                </div>
                <h3 className="font-semibold text-sm mb-1">{cert.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">{cert.issuer}</p>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto btn-outline !px-4 !py-1.5 !text-xs"
                >
                  View Certificate
                </a>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
