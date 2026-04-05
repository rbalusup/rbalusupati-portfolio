"use client";

import { projects } from "@/lib/portfolio-data";

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section
      id="projects"
      className="container-width section-spacing border-t border-slate-200"
    >
      <h2 className="section-title">Featured Projects</h2>
      <div className="space-y-8">
        {featuredProjects.map((project) => (
          <div key={project.id} className="card">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
              <div>
                <h3 className="mt-0 mb-1">{project.title}</h3>
                <p className="text-sm text-slate-600 font-medium">
                  {project.company} • {project.period}
                </p>
              </div>
              <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded font-medium whitespace-nowrap">
                {project.role}
              </span>
            </div>

            <p className="text-slate-600 text-sm mb-4">{project.description}</p>

            <div className="mb-4 p-3 bg-slate-50 rounded border border-slate-200">
              <p className="text-sm text-slate-700">{project.highlights}</p>
            </div>

            <div className="mb-4">
              <p className="text-sm font-semibold text-slate-700 mb-2">
                Key Achievements
              </p>
              <ul className="space-y-1">
                {project.impact.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-slate-700 flex items-start"
                  >
                    <span className="mr-2 text-slate-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap">
              {project.technologies.map((tech, tIdx) => (
                <span key={tIdx} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
