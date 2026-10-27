import { motion } from "framer-motion";
import {
  HiCodeBracketSquare,
  HiGlobeAlt,
  HiPresentationChartLine,
  HiWrenchScrewdriver,
  HiShieldCheck,
  HiUserGroup,
} from "react-icons/hi2";
import Reveal from "./Reveal";
import { skillCategories } from "../data/siteData";

const iconMap = {
  code: HiCodeBracketSquare,
  globe: HiGlobeAlt,
  chart: HiPresentationChartLine,
  tools: HiWrenchScrewdriver,
  shield: HiShieldCheck,
  people: HiUserGroup,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-surfaceAlt dark:bg-surfaceAlt-dark">
      <div className="section-container">
        <Reveal>
          <span className="section-eyebrow">What I Know</span>
          <h2 className="section-heading">Skills</h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon];
            return (
              <Reveal key={cat.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="glass-card p-6 h-full"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-600 dark:text-primary-300 text-xl">
                      <Icon />
                    </div>
                    <h3 className="font-semibold text-lg">{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span key={skill} className="badge-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
