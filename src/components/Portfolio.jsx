import { useState, useEffect, useRef } from 'react';
import { portfolioItems, categories } from '../data/portfolioData';
import { FiZoomIn, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const [items, setItems] = useState(portfolioItems);
  const [lightbox, setLightbox] = useState(null); // stores index of item
  const sectionRef = useRef(null);

  useEffect(() => {
    if (filter === 'all') {
      setItems(portfolioItems);
    } else {
      setItems(portfolioItems.filter(item => item.category === filter));
    }
  }, [filter]);

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
  }, [items]);

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const nextImage = (e) => {
    e.stopPropagation();
    setLightbox((lightbox + 1) % items.length);
  };
  const prevImage = (e) => {
    e.stopPropagation();
    setLightbox((lightbox - 1 + items.length) % items.length);
  };

  return (
    <section className="section" id="portfolio" ref={sectionRef}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-label">My Works</span>
          <h2 className="section-title">Creative <span className="grad-text">Portfolio</span></h2>
        </div>

        {/* Filters */}
        <div className="portfolio-filters reveal">
          {categories.map(cat => (
            <button
              key={cat.key}
              className={`filter-btn ${filter === cat.key ? 'active' : ''}`}
              onClick={() => setFilter(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="portfolio-grid">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className="portfolio-item reveal"
              onClick={() => openLightbox(idx)}
            >
              <img src={item.src} alt={item.title} loading="lazy" />
              <div className="portfolio-overlay">
                <div>
                  <div className="portfolio-overlay-tag">{item.tag}</div>
                  <h3 className="portfolio-overlay-title">{item.title}</h3>
                </div>
              </div>
              <div className="portfolio-zoom">
                <FiZoomIn />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}><FiX /></button>
          <button className="lightbox-nav lightbox-prev" onClick={prevImage}><FiChevronLeft /></button>
          <button className="lightbox-nav lightbox-next" onClick={nextImage}><FiChevronRight /></button>
          <img src={items[lightbox].src} alt={items[lightbox].title} onClick={(e) => e.stopPropagation()} />
          <div style={{ position: 'absolute', bottom: '2rem', textAlign: 'center', width: '100%' }}>
            <p className="portfolio-overlay-tag" style={{ color: '#fff' }}>{items[lightbox].tag}</p>
            <h3 className="portfolio-overlay-title" style={{ color: '#fff' }}>{items[lightbox].title}</h3>
          </div>
        </div>
      )}
    </section>
  );
}
