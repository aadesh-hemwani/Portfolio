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
            <a href="https://github.com/aadesh-hemwani/ExpenseTracker" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://expenses-a2401.web.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
          <ul>
            <li>Designed a cost-efficient dual-collection Firestore data model, maintaining pre-aggregated monthly summaries to trade higher write complexity for constant-time dashboard reads.</li>
            <li>Built an AI-powered financial query system using RAG, generating vector embeddings for transactions on insertion and retrieving relevant financial context for natural-language spending queries.</li>
          </ul>
          <div className="stack">
            <span className="tag">NoSQL Data Modeling</span>
            <span className="tag">RAG Architecture</span>
            <span className="tag">Gemini AI</span>
            <span className="tag">React 19</span>
            <span className="tag">TypeScript</span>
            <span className="tag">Firebase</span>
          </div>
        </div>
      </div>
    </section>
  );
}
