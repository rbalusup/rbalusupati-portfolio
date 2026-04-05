"use client";

import { certifications } from "@/lib/portfolio-data";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="container-width section-spacing border-t border-slate-200"
    >
      <h2 className="section-title">Certifications</h2>
      <div className="space-y-3">
        {certifications.map((cert) => (
          <div key={cert.id} className="card py-4">
            <p className="font-semibold text-slate-900">{cert.name}</p>
            <p className="text-sm text-slate-600 mt-1">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
