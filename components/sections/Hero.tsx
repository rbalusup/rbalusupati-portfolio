"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="container-width section-spacing pt-24">
      <div className="max-w-2xl">
        <h1 className="mb-6">Senior AI/ML Engineer</h1>
        <p className="text-lg mb-8 text-slate-600">
          Building production AI systems at scale. Multi-agent orchestration,
          RAG pipelines, and cloud-native infrastructure. Currently at Centene,
          previously at Franklin Templeton and Target.
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
