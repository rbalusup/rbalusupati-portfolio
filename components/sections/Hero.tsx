"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="container-width section-spacing pt-24">
      <div className="max-w-2xl">
        <h1 className="mb-6">Technology Leader</h1>
        <p className="text-lg mb-8 text-slate-600">
          Building scalable distributed systems and production AI solutions that
          drive business transformation. Deep expertise in multi-agent
          orchestration, RAG pipelines, cloud-native infrastructure, and
          enterprise modernization across cloud security, data engineering,
          healthcare, fintech, and retail.
        </p>
        <div className="flex gap-4">
          <Link href="#projects" className="button-primary">
            View Projects
          </Link>
          <a
            href="mailto:rbalusupati777@gmail.com"
            className="button-secondary"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
