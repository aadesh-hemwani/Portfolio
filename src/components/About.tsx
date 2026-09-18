export function About() {
  return (
    <section id="about">
      <div className="about">
        <p>
          <strong>I'm a backend engineer</strong> at JPMorgan Chase, working on a Java-based trading platform with AI integrated into its workflows.
        </p>

        <p>
          Before this, I worked at ISS STOXX building distributed document-processing systems. Across both roles, my focus has stayed the same: backend architecture, data pipelines, and the infrastructure that keeps them reliable under load.
        </p>



        <p>
          I hold an MCA from VESIT, Mumbai, graduating with a 9.47 CGPA.
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
