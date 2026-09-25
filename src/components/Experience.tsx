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
            <li>Designed and developed new backend functionality from scratch, driving features from requirements to closure.</li>
            <li>Built a Spring Boot data extraction service for an AI pipeline, reducing processing time by 40%.</li>
            <li>Designed a concurrent PDF generation system with fail-fast transaction gating, processing in under 2 seconds.</li>
            <li>Drove production readiness and automated secret management across 12 environments via Kubernetes runtime injection.</li>
            <li>Developed a validation feature across 21 products within a 142-module Spring monolith.</li>
            <li>Led the modernization of a legacy KYC platform to Spring Boot and Kubernetes with zero production regressions.</li>
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
              <li>Owned Java services for a distributed document platform processing 60M+ documents.</li>
              <li>Rebuilt shared Java and TypeScript database and S3 libraries for major storage upgrades.</li>
              <li>Led zero-downtime migration of 7 Kubernetes clusters across 3 projects in one week.</li>
              <li>Single-handedly modernized UI with a 50+ component React framework replacing legacy Angular apps.</li>
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
              <li>Redesigned data ingestion pipeline with typed models across Java, Node.js, and Python.</li>
              <li>Redesigned storage architecture with MSSQL and S3, rebuilding all Java services against the new model.</li>
              <li>Designed a Trie-based URL filtering service processing 20M+ URLs in production.</li>
              <li>Built a Kafka and Python pipeline for automated failed-document reprocessing.</li>
              <li>Coordinated cross-team releases to UAT and Production environments.</li>
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
              <li>Built Spring Boot REST APIs with MongoDB & Elasticsearch, reducing latency by 45%.</li>
              <li>Established Docker, Kubernetes, and CI/CD pipelines for application deployment.</li>
              <li>Built reusable React.js UI components adopted across 10+ application screens.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
