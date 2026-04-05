"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <nav className="container-width flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold">
          Rajasekhar Balusupati
        </Link>
        <div className="flex gap-6">
          <Link
            href="#about"
            className="text-sm font-medium hover:text-slate-600"
          >
            About
          </Link>
          <Link
            href="#experience"
            className="text-sm font-medium hover:text-slate-600"
          >
            Professional Experience
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium hover:text-slate-600"
          >
            Personal Projects
          </Link>
          <Link
            href="#skills"
            className="text-sm font-medium hover:text-slate-600"
          >
            Skills
          </Link>
          <Link
            href="#certifications"
            className="text-sm font-medium hover:text-slate-600"
          >
            Certifications
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-slate-600"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
