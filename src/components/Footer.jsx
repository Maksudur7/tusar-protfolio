import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">MRS</div>
        <p style={{ color: 'var(--muted)', maxWidth: '400px', margin: '0 auto 2rem' }}>
          Crafting exceptional digital experiences through innovative design and 3D visualization.
        </p>

        <div className="footer-links">
          <a href="https://www.facebook.com/profile.php?id=100087513321667"><FiFacebook /></a>
          <a href="#"><FiTwitter /></a>
          <a href="#"><FiInstagram /></a>
          <a href="#"><FiLinkedin /></a>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', marginTop: '2rem' }}>
          <p className="footer-copy">
            &copy; {currentYear} Md. Musfiqur Rahaman Sikder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
