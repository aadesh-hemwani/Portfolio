import { LeftSidebar } from './components/LeftSidebar';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { CustomCursor } from './components/CustomCursor';
import { FadeUp } from './components/FadeUp';
import './index.css';

function App() {
  return (
    <>
      <CustomCursor />
      <div className="layout-container">
        <LeftSidebar />
        <main className="right-content">
          <FadeUp><About /></FadeUp>
          <FadeUp><Experience /></FadeUp>
          <FadeUp><Projects /></FadeUp>
          <FadeUp><Skills /></FadeUp>
          <FadeUp><Education /></FadeUp>
          
          <footer style={{ marginTop: '96px', paddingBottom: '32px', color: 'var(--text-dim)', fontSize: '0.85rem' }}>
            Aadesh Hemwani — built with care, updated 2026.
          </footer>
        </main>
      </div>
    </>
  );
}

export default App;
