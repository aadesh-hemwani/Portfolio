export function Skills() {
  return (
    <section id="skills">
      <div className="section-label">Skills</div>
      <div className="skills-grid">
        <div className="skill-group">
          <h3>Languages</h3>
          <span className="tag">Java 21</span>
          <span className="tag">Python 3.9+</span>
          <span className="tag">TypeScript</span>
          <span className="tag">JavaScript</span>
        </div>
        <div className="skill-group">
          <h3>Frameworks & Libraries</h3>
          <span className="tag">Spring Boot</span>
          <span className="tag">Spring MVC</span>
          <span className="tag">Microservices</span>
          <span className="tag">REST APIs</span>
          <span className="tag">React.js</span>
          <span className="tag">Node.js</span>
        </div>
        <div className="skill-group">
          <h3>Infrastructure & CI/CD</h3>
          <span className="tag">Kubernetes</span>
          <span className="tag">Docker</span>
          <span className="tag">Jenkins</span>
          <span className="tag">GitLab CI/CD</span>
          <span className="tag">Linux</span>
        </div>
        <div className="skill-group">
          <h3>Data & Messaging</h3>
          <span className="tag">Apache Kafka</span>
          <span className="tag">MongoDB</span>
          <span className="tag">Redis</span>
          <span className="tag">Elasticsearch</span>
        </div>
      </div>
    </section>
  );
}
