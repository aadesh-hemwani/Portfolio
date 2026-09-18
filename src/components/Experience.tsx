export function Experience() {
  return (
    <section id="experience">
      <div className="section-label">Experience</div>
      <div className="timeline">
        
        {/* JPMorgan Chase */}
        <div className="role">
          <div className="role-head">
            <h3>Software Engineer II</h3>
            <span className="period">January 2026 — Present</span>
          </div>
          <div className="company">JPMorgan Chase & Co</div>
          <ul>
            <li>Built a Spring Boot data extraction service, cutting processing time by 40% for AI model training.</li>
            <li>Unified validation logic across 21 scenarios within a 142-module Spring monolith.</li>
            <li>Implemented server-side PDF generation for 8 compliance assessment modules.</li>
            <li>Led the end-to-end modernization of a legacy KYC compliance module to Spring Boot.</li>
            <li>Designed Kubernetes & Jenkins CI/CD pipelines for automated deployments.</li>
          </ul>
          <div className="stack">
            <span className="tag">Java 21</span>
            <span className="tag">Spring Boot</span>
            <span className="tag">Kubernetes</span>
            <span className="tag">Jenkins</span>
          </div>
        </div>

        {/* ISS STOXX Merged Block */}
        <div className="role">
          <div className="role-head" style={{ marginBottom: '8px' }}>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text)' }}>ISS STOXX</h3>
            <span className="period">January 2022 — January 2026</span>
          </div>

          <div className="sub-role" style={{ marginBottom: '24px' }}>
            <div className="role-head" style={{ marginBottom: '8px' }}>
              <h4 style={{ margin: 0, fontSize: '1.05rem', color: 'var(--text-dim)' }}>Associate Software Engineer</h4>
              <span className="period" style={{ fontSize: '0.85rem' }}>Jan 2025 — Jan 2026</span>
            </div>
            <ul>
              <li>Built 5+ Java microservices for a distributed platform processing 60M+ documents.</li>
              <li>Led the zero-downtime migration and scaling of 4 production Kubernetes clusters.</li>
              <li>Headed a major UI modernization to React, cutting development time by 40%.</li>
            </ul>
            <div className="stack">
              <span className="tag">Java</span>
              <span className="tag">Microservices</span>
              <span className="tag">Kubernetes</span>
              <span className="tag">React.js</span>
            </div>
          </div>
          
          <div className="sub-role" style={{ marginBottom: '24px' }}>
            <div className="role-head" style={{ marginBottom: '8px' }}>
              <h4 style={{ margin: 0, fontSize: '1.05rem', color: 'var(--text-dim)' }}>Analyst</h4>
              <span className="period" style={{ fontSize: '0.85rem' }}>Jan 2023 — Dec 2024</span>
            </div>
            <ul>
              <li>Migrated data layer from DocumentDB to SQL, improving throughput by 45%.</li>
              <li>Built a Python & Kafka pipeline for automated document reprocessing and tracking.</li>
              <li>Designed a Trie-based URL filtering system processing 20M+ URLs in production.</li>
            </ul>
            <div className="stack">
              <span className="tag">Python</span>
              <span className="tag">Kafka</span>
              <span className="tag">MongoDB</span>
              <span className="tag">Redis</span>
              <span className="tag">SQL</span>
            </div>
          </div>

          <div className="sub-role">
            <div className="role-head" style={{ marginBottom: '8px' }}>
              <h4 style={{ margin: 0, fontSize: '1.05rem', color: 'var(--text-dim)' }}>Junior Analyst / Intern</h4>
              <span className="period" style={{ fontSize: '0.85rem' }}>Jan 2022 — Dec 2022</span>
            </div>
            <ul>
              <li>Developed Spring Boot APIs with MongoDB & Elasticsearch, reducing latency by 45%.</li>
              <li>Containerized applications with Docker and established automated CI/CD pipelines.</li>
              <li>Built reusable React.js UI components adopted across 10+ application screens.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
