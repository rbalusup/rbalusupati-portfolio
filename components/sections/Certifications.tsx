"use client";

interface SkillCategory {
  category: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "AI/ML & LLM Systems",
    skills: [
      "Multi-Agent Orchestration",
      "RAG Pipelines",
      "LangChain/CrewAI",
      "Claude API/Bedrock",
      "LLM Evaluation",
      "Prompt Engineering",
      "Vector Databases",
      "Semantic Search",
    ],
  },
  {
    category: "Cloud & Infrastructure",
    skills: [
      "AWS (EC2, Lambda, Step Functions, Bedrock)",
      "Kubernetes",
      "Docker",
      "Serverless Architecture",
      "GovCloud",
      "Microservices",
      "Event-Driven Systems",
      "Infrastructure as Code",
    ],
  },
  {
    category: "Backend & System Design",
    skills: [
      "Java",
      "Kotlin",
      "Go",
      "Python",
      "Distributed Systems",
      "Database Design",
      "Message Queues (Kafka)",
      "System Architecture",
      "Performance Optimization",
    ],
  },
  {
    category: "Data & Analytics",
    skills: [
      "Data Warehousing",
      "Snowflake",
      "OpenSearch",
      "SQL",
      "ETL/ELT",
      "Stream Processing",
      "Observability/Monitoring",
      "Data Pipeline Design",
    ],
  },
  {
    category: "Developer Tools & Practices",
    skills: [
      "Git",
      "CI/CD Pipelines",
      "Testing",
      "Code Review",
      "Documentation",
      "Agile/Scrum",
      "Cross-functional Leadership",
      "Technical Mentoring",
    ],
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="container-width section-spacing border-t border-slate-200"
    >
      <h2 className="section-title">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((cat, idx) => (
          <div key={idx}>
            <h3 className="text-base font-semibold mb-4">{cat.category}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, sIdx) => (
                <span key={sIdx} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
