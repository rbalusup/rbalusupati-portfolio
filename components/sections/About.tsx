"use client";

import { about, socialLinks } from "@/lib/portfolio-data";

export default function About() {
  return (
    <section
      id="about"
      className="container-width section-spacing border-t border-slate-200"
    >
      <h2 className="section-title">About</h2>

      <div className="space-y-6 max-w-3xl">
        <div className="space-y-4">
          {about.bio.map((paragraph, idx) => (
            <p key={idx} className="text-slate-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-6 text-slate-600">
          <span className="font-medium">📍 {about.location}</span>
          <span className="text-green-700 font-medium">
            ✓ {about.openToWork}
          </span>
        </div>

        <div className="flex gap-6 pt-4 border-t border-slate-200">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors"
            >
              {link.name} →
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
