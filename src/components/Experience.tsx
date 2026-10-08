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
          <div className="company">JPMorgan Chase</div>
          <ul>
            <li>Led migration of a 10-year-old KYC platform (7 modules) from Spring Framework on Linux to Spring Boot on Kubernetes. Ran old and new components side by side, then switched traffic per component with instant rollback available, resulting in zero production regressions.</li>
            <li>Engineered a multithreaded Spring Boot extraction service that runs 5 join-heavy SQL queries in parallel and uploads one archive per transaction to S3, covering 242K records across 21 products and cutting backfill time by 40% (30h to 18h).</li>
            <li>Built a concurrent document-generation service that renders 8 sections in parallel and merges them into 8-20 page PDFs in under 2 seconds. Blocks transaction submission if generation fails, preventing cross-system data inconsistencies.</li>
            <li>Spearheaded development of a new validation feature in a 142-module Spring monolith, enforcing mandatory requirements across 21 products and blocking transaction submission, eliminating orphaned transactions and preventing unresolvable user errors.</li>
            <li>Resolved production defect where the validation fired on non-eligible products. Traced the call path through Splunk logs to an early-return on null data in legacy code, removed it, and deployed the fix in under 12 hours.</li>
            <li>Partnered directly with operations users and product/technical BAs to refine requirements, design backend solutions, and translate business workflows into production functionality.</li>
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
              <h4 style={{ margin: 0, fontSize: '1.05rem', color: 'var(--text-dim)' }}>Associate (Software Engineer)</h4>
              <span className="period" style={{ fontSize: '0.85rem' }}>Jan 2025 — Jan 2026</span>
            </div>
            <ul>
              <li>Built Java services and Kafka-based processes for a distributed document-processing platform that ingests, converts, and indexes files and URLs for global analysts, processing 60M+ documents.</li>
              <li>Led zero-downtime migrations of 7 Kubernetes clusters across 3 distributed projects over one week, coordinating DevOps and network teams for resource sizing, volume mounts, and workload validation.</li>
              <li>Wrote 70+ Karate API test scenarios in Gherkin-style syntax, covering positive and negative cases across 10+ endpoints, and ran them in parallel before each release.</li>
              <li>Built an asynchronous, fault-tolerant error-reprocessing pipeline using Kafka and MongoDB, featuring automated audit tracking and duplicate handling to improve data ingestion success rates.</li>
              <li>Designed and built a 50+ component React framework over 5+ months, replacing 5 legacy Angular applications, and successfully handed it over to engineering peers through structured knowledge transfer.</li>
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
              <h4 style={{ margin: 0, fontSize: '1.05rem', color: 'var(--text-dim)' }}>Analyst (Software Engineer)</h4>
              <span className="period" style={{ fontSize: '0.85rem' }}>Jan 2023 — Dec 2024</span>
            </div>
            <ul>
              <li>Led the redesign of the Core Document Ingestion Pipeline, replacing untyped payloads with a typed Java document hierarchy and stage-specific models to streamline data ownership across multi-language processing stages.</li>
              <li>Drove storage architecture redesign: moved the system of record from Elasticsearch to MSSQL (structured data) and S3 (source documents), keeping Elasticsearch for search only. Redesigned indexing so the search layer can be rebuilt from source, and rebuilt all Java services against the new model.</li>
              <li>Designed a Trie-based filter that matches URLs against a blocklist by domain prefix, deployed across 5 production projects and processing 20M+ URLs.</li>
              <li>Orchestrated production releases, managing deployment documentation, tagging, configuration, and cross-team rollout, while troubleshooting application logs using Graylog and Kubernetes pod failures and serving as a stakeholder-facing technical point of contact.</li>
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
              <h4 style={{ margin: 0, fontSize: '1.05rem', color: 'var(--text-dim)' }}>Junior Analyst (Software Engineer)</h4>
              <span className="period" style={{ fontSize: '0.85rem' }}>Jan 2022 — Dec 2022</span>
            </div>
            <ul>
              <li>Built Spring Boot REST APIs backed by MongoDB and Elasticsearch, reducing API latency by 45% under high load, and set up Docker, Kubernetes and Jenkins pipelines for application deployment.</li>
              <li>Built responsive React.js UI components integrated with backend APIs, contributing reusable components adopted across 10+ application screens.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
