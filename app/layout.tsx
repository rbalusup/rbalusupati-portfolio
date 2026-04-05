import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RAJA SEKHAR BALUSUPATI | Technology Leader",
  description:
    "Portfolio of Rajasekhar Balusupati - Technology Leader specialized in multi-agent systems, RAG pipelines, Distributed Systems, Full-Stack Development,and enterprise cloud infrastructure.",
  keywords: [
    "AI",
    "ML",
    "Software Engineer",
    "AWS",
    "GenAI",
    "System Design",
    "Multi-Agent Systems",
    "RAG Pipelines",
    "LangChain",
    "Claude API",
    "Bedrock",
    "Kubernetes",
    "Docker",
    "Serverless",
    "Distributed Systems",
    "Data Engineering",
  ],
  authors: [{ name: "Raj Balusupati" }],
  openGraph: {
    title: "Rajasekhar Balusupati | Technology Leader",
    description:
      "Portfolio showcasing AI/ML projects and professional experience",
    type: "website",
    url: "https://rbalusupati.net",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="bg-white text-slate-900">{children}</body>
    </html>
  );
}
