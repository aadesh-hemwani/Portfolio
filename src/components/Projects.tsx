export function Projects() {
  return (
    <section id="projects">
      <div className="section-label">Projects</div>
      <div className="timeline">
        <div className="role">
          <div className="role-head">
            <h3>Expense Tracker</h3>
            <span className="period">Personal Project</span>
          </div>
          <div className="company">
            <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
          <ul>
            <li>Built an offline-first personal finance system with real-time updates and AI spending analysis.</li>
            <li>Designed a dual-collection Firestore model to maintain atomic updates and optimize read performance.</li>
          </ul>
          <div className="stack">
            <span className="tag">React 19</span>
            <span className="tag">TypeScript</span>
            <span className="tag">Firebase</span>
            <span className="tag">Gemini AI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
