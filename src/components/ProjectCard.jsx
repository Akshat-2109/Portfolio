import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: (index % 2) * 0.1 }}
      whileHover={{ y: -6 }}
      className="glass-card overflow-hidden group flex flex-col"
    >
      <Link to={`/project/${project.slug}`} className="block overflow-hidden">
        <div className="h-60 overflow-hidden">
          <img
            src={project.cardImage}
            alt={project.title}
            className="w-full h-full object-value group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-1">
        <Link to={`/project/${project.slug}`}>
          <h3 className="font-semibold text-xl mb-2 hover:text-primary-600 dark:hover:text-primary-300 transition-colors">
            {project.title}
          </h3>
        </Link>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-4">
          {project.description}
        </p>

        <Link
          to={`/project/${project.slug}`}
          className="text-xs font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-300 mt-4 inline-flex items-center gap-1"
        >
          Click on project for more info <HiOutlineArrowUpRight />
        </Link>

        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-200/70 dark:border-white/10">
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="btn-outline !px-3.5 !py-1.5 !text-xs"
          >
            <FaGithub /> Source Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="btn-primary !px-3.5 !py-1.5 !text-xs !shadow-none"
            >
              Live Demo <HiOutlineArrowUpRight />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
