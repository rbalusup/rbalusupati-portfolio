export const about = {
  headline:
    " specialized in production-grade AI systems, multi-agent orchestration, distributed systems, Full-Stack Development, and cloud-native infrastructure.",
  bio: "I build AI systems that scale. With 15+ years in software engineering and deep expertise in LLMs, RAG pipelines, and distributed systems, I partner with engineering teams to ship reliable AI products — from prototype to production. I've led AI/ML initiatives at Centene, Franklin Templeton, and Target, delivering measurable impact across healthcare, fintech, and retail.",
  location: "Tracy, CA",
  openToWork:
    "Open to senior AI/ML, Principal Engineer, and staff engineering roles",
};

export const socialLinks = [
  { name: "LinkedIn", url: "https://linkedin.com/in/rbalusupati" },
  { name: "GitHub", url: "https://github.com/rbalusup" },
  { name: "Email", url: "mailto:rbalusupati777@gmail.com" },
];

export const experience = [
  {
    id: "centene",
    title: "Lead Application Engineer / Cloud Architect",
    company: "Centene Corporation (via APEX Systems LLC)",
    period: "Mar 2025 – Feb 2026",
    description:
      "Lead AI/ML engineer building Serverless Intelligent Document Processing (IDP) Platform, production LLM systems, and multi-agent pipelines for healthcare operations at scale.",
    achievements: [
      "Architected end-to-end serverless OCR document processing platform on AWS leveraging Lambda, Step Functions, EventBridge, and Textract to automate enrollment data extraction from healthcare PDFs",
      "Designed asynchronous multi-document processing, PDF boundary detection, and parallel execution; validated extracted data against ground truth datasets achieving 96% accuracy.",
      "Implemented multi-stage document transformation: PDF ingestion via email (AWS SES) → Textract OCR processing → image conversion → Claude Sonnet 3.7 entity extraction → Pydantic schema-based structuring → CSV template output with validation; integrated IaC (Terraform, CloudFormation) for reproducible drift-free environments across all deployment stages.",
      "Automated deployment via GitLab CI/CD pipelines with Docker Containerization and AWS ECR registry integration.",
      "Designed event-driven data persistence architecture using S3 for document storage, DynamoDB for metadata and audit logging, and VPC security endpoints for network isolation.",
      "Built real-time event streaming pipeline publishing granular events at each transformation stage to Confluent Cloud Kafka topics, synced to Snowflake for analytics visibility and compliance reporting; managed 1000+ daily document operations with production-grade reliability and observability.",
      "Implemented RAG framework using hierarchical document chunking strategies, AWS Titan embedding model to generate vector embeddings from chunked segments, and AWS OpenSearch vector database for persistent semantic storage and similarity-based retrieval; enabled intelligent contextual understanding for multi-agent workflows.",
      "Evolved platform from single-purpose enrollment processing to multi-agent (document classification, entity extraction & validation), object orchestration system using AWS Bedrock Knowledge Base with RAG semantic search capabilities; extended capabilities to hospital bills, claims processing, and general document workflows with vector-based retrieval.",
    ],
  },
  {
    id: "franklin-templeton",
    title: "Full-Stack Engineer / GenAI Engineer",
    company: "Franklin Templeton (via Blend360  LLC)",
    period: "Oct 2024 – Jan 2025",
    description:
      "Built data intelligence and ML systems for global investment operations across 30+ markets.",
    achievements: [
      "Built full-stack RAG summarization platform combining FastAPI backend (Python 3.12, CrewAI) with 5 specialized pipelines (ODD, Board, Research, PMSR, Putnam Trading) for MosaiQ compute and data platform.",
      "Engineered audio-enhanced RAG with AWS Transcribe speaker diarization and Claude 3.5 Sonnet via AWS Bedrock; developed evasion detection classifier using few-shot prompting with 9-category Q&A classification and risk scoring (1-10); persisted outputs in DynamoDB with style personalization and automated citations.",
      "Built full-stack Next.js 14/15, Typescript, GraphQL application with Redux Toolkit state management, RTK Query API layer, react-hook-form validation, and Tailwind CSS styling; worked on real-time WebSocket notifications, PDF/DOCX multi-format generation, and DynamoDB-backed ACL authorization with SAML SSO authentication for institutional-grade security.",
      "Deployed using AWS provided CI/CD (CodePipeline, CodeBuild, CodeDeploy) orchestrating FastAPI backend, Next.js frontend.",
    ],
  },
  {
    id: "target",
    title: "Lead Software Engineer",
    company: "Target Corporation",
    period: "Jun 2015 – Aug 2024",
    description:
      "Backend engineer building high-traffic retail systems serving millions of customers. Built 30+ microservices in Java, Kotlin, Python & Go, contributing to Target's digital transformation and cloud migration initiatives.",
    achievements: [
      "Led the strategic transformation of Inventory & Allocation modules on Target.com from legacy IBM Sterling to a distributed, cloud-native architecture, enabling 5x throughput increase and reducing operational complexity.",
      "Engineered high-performance backend microservices using Java/Kotlin (SpringBoot/Micronaut), Go, and Python on GCP, containerized with Docker and orchestrated via Kubernetes to ensure auto scaling and high availability.",
      "Led the strategic re-architecture of the Connected Commerce Platform from AWS monoliths to hybrid GCP and event-driven architectures, generating $1B in revenue growth.",
      "Built 3+ production microservices in Go using Gin framework with concurrent goroutine-based request handlers, gRPC/Protocol Buffers for inter-service communication; Also engineered integration test data setup pipelines using Golang.",
      "Engineered CI/CD automation and infrastructure orchestration: certificate rotation, secret management, and infrastructure provisioning; and managed Jenkins→Drone→Spinnaker→Vela pipeline evolution.",
      "Designed distributed systems resilience patterns (circuit breakers, bulkheads, exponential backoff); architected multi-layer caching (Fastly CDN, Redis, Hazelcast) delivering sub-millisecond response times for P1 inventory and guest fulfillment APIs handling 1M+ concurrent member requests.",
      "Led Kafka transformation from Zookeeper+brokers to managed Confluent Cloud; designed Avro/Protobuf schema evolution; architected Kafka Streams-based real-time monitoring/alerting pipeline integration with Slack.",
      "Implemented reactive programming frameworks (RxJava, Spring WebFlux) and non-blocking I/O patterns across Java/Kotlin microservices; paired with comprehensive observability (Prometheus, Grafana, distributed tracing, logging) and synthetic monitoring (Runscope) for proactive incident detection. Built performance testing framework using JMeter & Gatling.",
      "Established enterprise-scale DevSecOps practices: automated vulnerability scanning (OWASP), static/dynamic code analysis (SAST/DAST), certificate management (PEM→JKS rotation), and Vault integration; led security vulnerability management and compliance across open-source dependencies.",
      "Led technology integration of acquired companies in stores & supply chain portfolio: established unified coding standards, integrated third-party mobile activations (AT&T, Consumer Cellular, Cricket), and trained engineers on cloud-native patterns.",
      "Built reusable libraries for rate limiting, distributed request tracing, and Prometheus/Grafana observability; adopted by 15+ teams with measurable impact (60% reduction in MTTR, 40% reduction in code duplication) enabling self-service deployment patterns across the organization.",
    ],
  },
  {
    id: "ciphercloud",
    title: "Software Development Manager / Technical Manager",
    company: "CipherCloud Inc. (Acquired by Lookout Inc.)",
    period: "Jun 2012 – May 2015",
    description:
      "Directed end-to-end development and delivery of the product's Management Console from the scratch. Managed a 3 scrum teams (12 engineers)",
    achievements: [
      "Directed the end-to-end development and delivery of a Management Console across Salesforce, ServiceNow, Box, and SuccessFactors, increasing customer engagement and reducing project delivery timelines through unified cloud management capabilities.",
      "Designed and deployed a responsive SPA using Twitter Bootstrap, BackboneJS, ReactJS, and Java.",
      "Led and developed a high-performing engineering team through strategic hiring, mentoring, performance evaluations, and career development programs, achieving increase in team productivity by and aligning ambitious growth objectives.",
    ],
  },
  {
    id: "prokarma",
    title: "Technical Lead",
    company: "Prokarma Inc. (Acquired by Concentrix Corporation.)",
    period: "Mar 2006 – Jun 2012",
    description:
      "Technical lead for various clients: Union Pacific Rail Roads (UPRR), DEX Media, Hughes Telematics Inc (Verizon Telematics)",
    achievements: [
      "Technical Stack: Java, Spring, Hibernate, JavaScript, SOAP-based Webservices, JMS, CMS, IBM Mainframe.",
    ],
  },
  {
    id: "optimos",
    title: "Senior Java Consultant",
    company: "Optimos Inc.",
    period: "Aug 2004 – Feb 2006",
    description:
      "Sr. Java Consultant for various clients: GE Healthcare, Lafarge NA",
    achievements: [
      "Technical Stack: Java, Struts, JSP, Oracle, Jasper Reports, JavaScript.",
    ],
  },
];

export const projects = [
  {
    id: "multi-agent-claims",
    featured: true,
    title: "Multi-Agent Claims Processing Platform",
    company: "Centene Corporation",
    period: "2023 – Present",
    role: "Lead Engineer",
    description:
      "End-to-end multi-agent system automating prior authorization and claims adjudication using LLMs, RAG, and AWS Bedrock.",
    highlights:
      "Reduced manual review time by 60% and processing costs by $2M annually by orchestrating specialized AI agents for intake, policy lookup, and decision reasoning.",
    impact: [
      "Processes 50K+ prior auth requests monthly with 94% accuracy vs. human reviewers.",
      "Integrated Claude 3 via Amazon Bedrock with custom guardrails for HIPAA compliance.",
      "Zero-downtime deployments via blue-green strategy on ECS Fargate.",
      "P99 latency under 3 seconds for end-to-end agent pipeline.",
    ],
    technologies: [
      "Python",
      "CrewAI",
      "AWS Bedrock",
      "Claude 3",
      "LangChain",
      "RAG",
      "OpenSearch",
      "PostgreSQL",
      "ECS Fargate",
      "Step Functions",
    ],
  },
  {
    id: "rag-policy-search",
    featured: true,
    title: "Healthcare Policy RAG System",
    company: "Centene Corporation",
    period: "2022 – 2023",
    role: "AI/ML Engineer",
    description:
      "Retrieval-Augmented Generation system enabling natural language search over 500K+ clinical policy and coverage documents.",
    highlights:
      "Replaced a keyword-based search tool with a semantic RAG pipeline, increasing relevant result quality by 3x and reducing clinician query time by 45%.",
    impact: [
      "Indexed 500K+ documents using chunking, embedding, and OpenSearch vector storage.",
      "Fine-tuned retrieval with hybrid BM25 + dense vector search for coverage determination queries.",
      "Deployed on serverless Lambda with auto-scaling, handling 10K requests/day at $0.003/query.",
      "Integrated LLM evaluation harness to track factual accuracy and citation quality over time.",
    ],
    technologies: [
      "Python",
      "LangChain",
      "OpenSearch",
      "AWS Lambda",
      "S3",
      "Titan Embeddings",
      "PostgreSQL",
      "FastAPI",
    ],
  },
  {
    id: "fintech-semantic-search",
    featured: true,
    title: "Investment Research Semantic Search",
    company: "Franklin Templeton",
    period: "2021 – 2022",
    role: "AI/ML Engineer",
    description:
      "Semantic search platform enabling portfolio managers to query 10 years of fund research, filings, and analyst notes in natural language.",
    highlights:
      "Replaced legacy keyword search with embedding-based retrieval, surfacing relevant documents 3x faster and improving analyst productivity by 30%.",
    impact: [
      "Built full ingestion pipeline: PDF parsing, chunking, embedding via Sentence Transformers, and indexing in OpenSearch.",
      "Delivered REST API consumed by internal research portal with <200ms median latency.",
      "Processed 50K+ quarterly reports, prospectuses, and regulatory filings.",
      "Integrated Snowflake metadata for faceted filtering by fund, date, asset class, and geography.",
    ],
    technologies: [
      "Python",
      "Sentence Transformers",
      "OpenSearch",
      "Snowflake",
      "FastAPI",
      "Kubernetes",
      "Docker",
      "Kafka",
    ],
  },
];
