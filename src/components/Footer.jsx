import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-bottom">
      <Link className="footer-bottom__brand" to="/" aria-label="nucleus home">
        nucleus<span>.</span>
      </Link>
      <p>© 2026 nucleus. Made for the long way round.</p>
      <a className="footer-bottom__top" href="#top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        Back to top <span aria-hidden="true">↑</span>
      </a>
    </footer>
  );
}
