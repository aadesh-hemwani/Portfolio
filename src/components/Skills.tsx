export function Skills() {
  return (
    <section id="skills">
      <div className="section-label">Skills</div>
      <div className="skills-grid">
        <div className="skill-group">
          <h3>Languages</h3>
          <span className="tag">Java 21</span>
          <span className="tag">Python</span>
          <span className="tag">TypeScript</span>
        </div>
        <div className="skill-group">
          <h3>Backend & Architecture</h3>
          <span className="tag">Spring Boot</span>
          <span className="tag">Microservices</span>
          <span className="tag">Distributed Systems</span>
          <span className="tag">Event-Driven Architecture</span>
          <span className="tag">REST APIs</span>
        </div>
        <div className="skill-group">
          <h3>Messaging & Data</h3>
          <span className="tag">Apache Kafka</span>
          <span className="tag">MongoDB</span>
          <span className="tag">Redis</span>
          <span className="tag">MSSQL</span>
          <span className="tag">Elasticsearch</span>
          <span className="tag">S3/MinIO</span>
        </div>
        <div className="skill-group">
          <h3>Infrastructure & DevOps</h3>
          <span className="tag">Kubernetes (K8s)</span>
          <span className="tag">Docker</span>
          <span className="tag">Jenkins</span>
          <span className="tag">GitLab CI/CD</span>
          <span className="tag">Secrets Management</span>
        </div>
      </div>
    </section>
  );
}
