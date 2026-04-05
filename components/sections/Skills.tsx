"use client";

interface SkillCategory {
  category: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Java", "Kotlin", "Python 3", "Golang", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "AI/ML & Agentic",
    skills: [
      "Agentic AI (CrewAI, LangGraph, LangChain)",
      "Model Context Protocol (MCP)",
      "AWS Bedrock",
      "Claude APIs",
      "RAG Pipelines",
      "Multi-Agent Orchestration",
      "PyTorch",
      "TensorFlow",
      "Vertex AI",
      "SageMaker AI",
      "HuggingFace",
      "Prompt Engineering",
      "Vector Databases",
      "Semantic Search",
    ],
  },
  {
    category: "Cloud & Big Data",
    skills: [
      "AWS",
      "GCP",
      "Azure",
      "IBM Cloud",
      "Snowflake",
      "Databricks",
      "Kafka",
      "Apache Spark",
      "Hadoop",
      "BigQuery",
    ],
  },
  {
    category: "AWS Services",
    skills: [
      "Lambda",
      "EC2",
      "API Gateway",
      "S3",
      "OpenSearch",
      "Glue",
      "Athena",
      "Step Functions",
      "DynamoDB",
      "Bedrock",
      "CloudWatch",
      "KMS",
    ],
  },
  {
    category: "Microservices & Backend Frameworks",
    skills: [
      "Spring Boot",
      "Micronaut",
      "FastAPI",
      "Gin",
      "Express.js",
      "OpenAPI",
      "RESTful APIs",
      "GraphQL",
      "gRPC",
      "SOAP",
    ],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "Redux", "Tailwind CSS"],
  },
  {
    category: "Databases",
    skills: [
      "Oracle",
      "PostgreSQL",
      "MySQL",
      "DB2",
      "MongoDB",
      "Cassandra",
      "Redis",
      "DynamoDB",
      "AWS RDS",
      "Neo4J",
    ],
  },
  {
    category: "Infra & DevOps",
    skills: [
      "Docker",
      "Kubernetes",
      "Terraform (IaC)",
      "Jenkins",
      "GitHub Actions",
      "GitLab CI/CD",
      "Drone",
      "Spinnaker",
      "Vault",
      "Consul",
      "Vagrant",
    ],
  },
  {
    category: "Middleware",
    skills: ["Apache Kafka", "Confluent Kafka", "Apache Spark", "Apache Camel"],
  },
  {
    category: "Data Serialization & Interchange",
    skills: ["JSON", "XML", "Avro", "Protobuf", "FlatBuffers", "Parquet", "ORC"],
  },
  {
    category: "Testing",
    skills: ["JUnit", "Spock Framework", "Kotest", "K6", "JMeter", "Gatling"],
  },
  {
    category: "Observability",
    skills: ["Grafana", "Prometheus", "ELK Stack", "Splunk", "Datadog"],
  },
  {
    category: "AI Tools",
    skills: ["Claude", "Gemini", "Cursor", "GitHub Copilot"],
  },
  {
    category: "Exploring",
    skills: ["Rust", "Web3", "LLMs", "Account Abstraction"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="container-width section-spacing border-t border-slate-200"
    >
      <h2 className="section-title">Technical Skills</h2>
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
