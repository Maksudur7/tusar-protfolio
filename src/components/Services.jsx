import { useEffect, useRef } from 'react';
import { FiEdit3, FiLayers, FiBox, FiPenTool } from 'react-icons/fi';

const services = [
  {
    title: 'Photo Manipulation',
    desc: 'Advanced retouching, color grading, and creative compositing using Adobe Photoshop to create surreal and professional imagery.',
    icon: <FiEdit3 />,
    tags: ['Retouching', 'Compositing', 'Masking']
  },
  {
    title: 'Vector Illustration',
    desc: 'Scalable vector designs, character illustrations, and technical drawings crafted with precision using Adobe Illustrator.',
    icon: <FiLayers />,
    tags: ['Logos', 'Icons', 'Vector Art']
  },
  {
    title: '3D Visualization',
    desc: 'Three-dimensional product renders, abstract environments, and scene compositions built with Cinema 4D and 3D modeling tools.',
    icon: <FiBox />,
    tags: ['Modeling', 'Rendering', 'Texturing']
  },
  {
    title: 'Brand Identity',
    desc: 'Comprehensive visual branding including logo systems, typography, and color palettes that define your brand’s unique voice.',
    icon: <FiPenTool />,
    tags: ['Branding', 'Typography', 'Logo Design']
  }
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="services" ref={sectionRef}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">Capabilities</span>
          <h2 className="section-title">Professional <span className="grad-text">Services</span></h2>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card reveal" key={s.title} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="service-icon grad-text">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-tags">
                {s.tags.map(tag => (
                  <span className="service-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
