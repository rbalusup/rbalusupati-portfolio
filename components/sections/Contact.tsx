"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="container-width section-spacing border-t border-slate-200"
    >
      <div className="max-w-2xl">
        <h2 className="section-title">Get In Touch</h2>
        <p className="text-slate-700 mb-8">
          I'm always interested in discussing AI/ML engineering, system design,
          and innovative technical challenges. Feel free to reach out—whether
          you want to collaborate, interview, or just chat about technology.
        </p>
        <div className="flex gap-4 mb-12">
          <a href="mailto:rbalusupati777@gmail.com" className="button-primary">
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/rbalusupati"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/rbalusup"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="divider" />

      <footer className="py-8 text-center text-sm text-slate-600">
        <p>© 2025 Rajasekhar Balusupati. Built with Next.js + Tailwind CSS.</p>
        <p className="mt-2">
          <a href="https://rbalusupati.net" className="hover:text-slate-900">
            rbalusupati.net
          </a>
        </p>
      </footer>
    </section>
  );
}
