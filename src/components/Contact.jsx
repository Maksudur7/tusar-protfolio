import { useState, useEffect, useRef } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'loading', 'success', 'error'
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submit error:', error);
      setStatus('error');
    }
  };

  return (
    <section className="section" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">Connect</span>
          <h2 className="section-title">Get In <span className="grad-text">Touch</span></h2>
        </div>

        <div className="contact-grid">
          {/* Info */}
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <h3 className="section-title" style={{ fontSize: '2rem' }}>Let's Work Together</h3>
            <p className="about-desc">
              Have a project in mind or just want to say hi? Feel free to reach out. 
              I'm always open to discussing new projects, creative ideas or original visions.
            </p>

            <div className="contact-info-items">
              <div className="contact-info-item">
                <div className="contact-info-icon"><FiMail /></div>
                <div>
                  <div className="contact-info-title">Email Me</div>
                  <div className="contact-info-val">musfiqur.design@gmail.com</div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon"><FiPhone /></div>
                <div>
                  <div className="contact-info-title">Call Me</div>
                  <div className="contact-info-val">+88 01754 610174</div>
                  <div className="contact-info-val">+88 01768 120167</div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon"><FiMapPin /></div>
                <div>
                  <div className="contact-info-title">Location</div>
                  <div className="contact-info-val">Dhaka, Bangladesh</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            {status === 'success' ? (
              <div className="glass form-success">
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. I will get back to you shortly.</p>
                <button className="btn btn-primary" style={{ marginTop: '1.5rem' }} onClick={() => setStatus(null)}>
                  Send Another
                </button>
              </div>
            ) : (
              <form className="glass contact-form" onSubmit={handleSubmit} style={{ padding: '2.5rem' }}>
                {status === 'error' && (
                  <div style={{ color: '#ff4d4d', marginBottom: '1rem', textAlign: 'center' }}>
                    Oops! Something went wrong. Please try again.
                  </div>
                )}
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input 
                      type="text" 
                      placeholder="Name" 
                      required 
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      placeholder="Email" 
                      required 
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input 
                    type="text" 
                    placeholder="Subject" 
                    required 
                    value={formData.subject}
                    onChange={e => setFormData({...formData, subject: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea 
                    rows="5" 
                    placeholder="Your message here..." 
                    required
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending...' : 'Send Message'} <FiSend />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
