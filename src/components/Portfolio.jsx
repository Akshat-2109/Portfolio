import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-surfaceAlt dark:bg-surfaceAlt-dark">
      <div className="section-container">
        <Reveal>
          <span className="section-eyebrow">My Work</span>
          <h2 className="section-heading">Portfolio (Projects)</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-14">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
