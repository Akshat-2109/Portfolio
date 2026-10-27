import { motion } from "framer-motion";
import {
  HiOutlineComputerDesktop,
  HiOutlineArrowTrendingUp,
  HiOutlineCodeBracket,
  HiOutlineShieldCheck,
} from "react-icons/hi2";
import Reveal from "./Reveal";
import { services } from "../data/siteData";

const iconMap = {
  laptop: HiOutlineComputerDesktop,
  trending: HiOutlineArrowTrendingUp,
  codeSlash: HiOutlineCodeBracket,
  shieldFill: HiOutlineShieldCheck,
};

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="section-container">
        <Reveal>
          <span className="section-eyebrow">What I Can Do</span>
          <h2 className="section-heading">Services</h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <Reveal key={service.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6, borderColor: "rgba(59,102,245,0.5)" }}
                  className="glass-card p-8 h-full text-center flex flex-col items-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-accent flex items-center justify-center text-white text-2xl mb-5 shadow-glow">
                    <Icon />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
