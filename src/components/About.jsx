import { useEffect, useRef } from 'react';

const skills = [
  { name: 'Adobe Photoshop', level: 95 },
  { name: 'Adobe Illustrator', level: 90 },
  { name: 'Cinema 4D / 3D Design', level: 85 },
  { name: 'Color Theory & Branding', level: 88 },
  { name: 'Typography & Layout', level: 92 },
];

export default function About() {
  const sectionRef = useRef(null);
  const skillsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Animate skill bars
            skillsRef.current.forEach((bar, i) => {
              if (bar) {
                setTimeout(() => {
                  bar.style.width = bar.dataset.level + '%';
                }, i * 150);
              }
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          {/* Left - Image */}
          <div className="reveal" style={{ transitionDelay: '0.1s', maxWidth: '250px', margin: '0 auto' }}>
            <div className="about-image-wrap">
              <div className="about-img-glow"></div>
              <div className="about-img-box" style={{ borderRadius: '50%', aspectRatio: '1/1' }}>
                <img src="/images/WhatsApp Image 2026-04-30 at 10.59.55 AM (3).jpeg" alt="Musfiqur Rahaman Sikder" />
              </div>
              <div className="about-badge" style={{ bottom: '10px', right: '10px', padding: '0.6rem 1rem' }}>
                <div className="about-badge-num" style={{ fontSize: '1.5rem' }}>1+</div>
                <div className="about-badge-text" style={{ fontSize: '0.6rem' }}>Years Exp.</div>
              </div>
            </div>
          </div>

          {/* Right - Info */}
          <div>
            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <span className="section-label">About Me</span>
              <h2 className="section-title">
                Creative <span className="grad-text">Designer</span> &amp;<br />Visual Storyteller
              </h2>
              <p className="about-desc">
                I am <strong style={{ color: 'var(--text)' }}>Md. Musfiqur Rahaman Sikder</strong>, a specialized Graphic Designer dedicated to pushing the boundaries of visual communication. With a deep mastery of <strong>Adobe Photoshop</strong> and <strong>Adobe Illustrator</strong>, I transform complex ideas into clear, impactful visual narratives.
              </p>
              <p className="about-desc">
                My expertise extends into the realm of <strong>3D Design</strong>, where I leverage cutting-edge tools to create immersive environments and realistic product visualizations. Whether it's high-end photo manipulation, precision vector art, or complex 3D modeling, my goal is to deliver designs that are not just beautiful, but strategically effective.
              </p>
            </div>
            <div className="reveal skills" style={{ transitionDelay: '0.4s' }}>
              {skills.map((s, i) => (
                <div className="skill-item" key={s.name}>
                  <div className="skill-header">
                    <span>{s.name}</span>
                    <span style={{ color: 'var(--magenta)' }}>{s.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-fill"
                      ref={el => skillsRef.current[i] = el}
                      data-level={s.level}
                      style={{ width: 0 }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ transitionDelay: '0.6s', marginTop: '2rem' }}>
              <a href="#portfolio" className="btn btn-primary" onClick={e => { e.preventDefault(); document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' }); }}>
                View My Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
