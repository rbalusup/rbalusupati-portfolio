"use client";

import { experience } from "@/lib/portfolio-data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="container-width section-spacing border-t border-slate-200"
    >
      <h2 className="section-title">Experience</h2>
      <div className="space-y-12">
        {experience.map((exp) => (
          <div
            key={exp.id}
            className="pb-8 border-b border-slate-100 last:border-b-0"
          >
            <div className="flex justify-between items-start mb-3 gap-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {exp.title}
                </h3>
                <p className="text-slate-600 font-medium">{exp.company}</p>
              </div>
              <span className="text-sm font-medium text-slate-600 whitespace-nowrap">
                {exp.period}
              </span>
            </div>
            <p className="text-slate-700 mb-4">{exp.description}</p>
            <ul className="space-y-2">
              {exp.achievements.map((achievement, aIdx) => (
                <li key={aIdx} className="text-sm text-slate-700 flex gap-3">
                  <span className="text-slate-400 mt-1 flex-shrink-0">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
