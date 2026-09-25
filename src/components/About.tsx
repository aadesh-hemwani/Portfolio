export function About() {
  return (
    <section id="about">
      <div className="about">
        <p>
          <strong>I'm a backend engineer</strong> at JPMorgan Chase, where I build AI-enabled backend workflows and modernize complex KYC systems. I work directly with operations users, product BAs, and technical BAs to shape requirements, define architecture, and drive features from development through production.
        </p>

        <p>
          Previously, I worked at ISS STOXX, where I built and owned distributed document-processing systems handling 60M+ documents using Java, Spring Boot, Kafka, Kubernetes, and Elasticsearch. Across both roles, my focus has been scalable backend architecture, event-driven systems, production ownership, and building reliable systems at scale.
        </p>

        <p>
          I hold a Master of Computer Applications (MCA) from VESIT, Mumbai, graduating with a 9.47 CGPA.
        </p>
      </div>

      <div className="signal" aria-hidden="true" style={{ marginTop: '48px', marginBottom: '24px' }}>
        <span className="signal-line"></span>
        <span className="signal-node"></span>
        <span className="signal-node"></span>
        <span className="signal-node"></span>
        <span className="signal-node"></span>
        <span className="signal-packet"></span>
      </div>
    </section>
  );
}
