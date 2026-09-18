import { useEffect, useState } from 'react';
import './LeftSidebar.css';

export function LeftSidebar() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <header className="left-sidebar">
      <div>
        <h1 className="sidebar-name">Adesh Hemwani</h1>
        <h2 className="sidebar-role">Backend Software Engineer</h2>
        <p className="sidebar-lede">
          I build the systems that move and safeguard data at scale.
        </p>
        <p className="sidebar-sub-lede">
          Software Engineer with 4+ years building distributed systems. Currently a backend developer on JPMorgan's trade platform, delivering Java development and infrastructure/CI-CD.
        </p>

        <div style={{ marginTop: '24px', marginBottom: '32px' }}>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
            View Résumé
          </a>
        </div>

        <nav className="sidebar-nav">
          <ul>
            <li>
              <a href="#about" className={activeSection === 'about' ? 'active' : ''}>
                <span className="nav-line"></span>
                <span className="nav-text">About</span>
              </a>
            </li>
            <li>
              <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>
                <span className="nav-line"></span>
                <span className="nav-text">Experience</span>
              </a>
            </li>
            <li>
              <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>
                <span className="nav-line"></span>
                <span className="nav-text">Projects</span>
              </a>
            </li>
            <li>
              <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>
                <span className="nav-line"></span>
                <span className="nav-text">Skills</span>
              </a>
            </li>
            <li>
              <a href="#education" className={activeSection === 'education' ? 'active' : ''}>
                <span className="nav-line"></span>
                <span className="nav-text">Education</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <ul className="social-icons">
        <li>
          <a href="https://github.com/aadesh-hemwani" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.025a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.575.688.475A10.005 10.005 0 0022 12c0-5.525-4.475-10-10-10z"></path></svg>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/adesh-hemwani" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47A1.45,1.45,0,0,0,21.94,20.57V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h-.02a1.56,1.56,0,1,1,.02,0Zm11.5,10.26h-3v-4.81c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12,13.11a2,2,0,0,0-.15.85v4.78h-3s.04-8.16,0-9h3v1.27a3,3,0,0,1,2.7-1.49c1.97,0,3.45,1.29,3.45,4.06Z"></path></svg>
          </a>
        </li>
        <li>
          <a href="mailto:aadesh.hemwani@gmail.com" aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>
          </a>
        </li>
      </ul>
    </header>
  );
}
