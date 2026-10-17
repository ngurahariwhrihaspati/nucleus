import { useEffect, useRef } from 'react';
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTiktok,
} from 'react-icons/fa';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './ContactSection.css';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: FaLinkedinIn },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: FaInstagram },
  { label: 'Pinterest', href: 'https://www.pinterest.com/', icon: FaPinterestP },
  { label: 'GitHub', href: 'https://github.com/', icon: FaGithub },
  { label: 'TikTok', href: 'https://www.tiktok.com/', icon: FaTiktok },
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: FaFacebookF },
];

export default function ContactSection() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return undefined;

    const denpasar = [-8.65, 115.2167];
    const map = L.map(mapRef.current, { scrollWheelZoom: true }).setView(denpasar, 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    L.circleMarker(denpasar, {
      radius: 9,
      color: '#fffdf5',
      weight: 4,
      fillColor: '#d76d4d',
      fillOpacity: 1,
    })
      .addTo(map)
      .bindPopup('<strong>nucleus</strong><br>Denpasar, Bali');

    return () => map.remove();
  }, []);

  return (
    <section className="contact section-shell" id="contact" aria-labelledby="contact-title">
      <div className="contact__heading">
        <p className="eyebrow">Let’s get you there</p>
        <h2 id="contact-title">Good trips start<br />with a conversation.</h2>
      </div>
      <div className="contact__content">
        <div ref={mapRef} className="contact__map" aria-label="Map showing Denpasar, Bali" />
        <div className="contact__details">
          <div className="contact__detail">
            <span className="contact__detail-icon" aria-hidden="true">⌖</span>
            <div>
              <h3>Address</h3>
              <p>Denpasar, Bali<br />Indonesia</p>
            </div>
          </div>
          <div className="contact__detail">
            <span className="contact__detail-icon" aria-hidden="true">@</span>
            <div>
              <h3>Email</h3>
              <a href="mailto:hello@nucleus.com">hello@nucleus.com</a>
            </div>
          </div>
          <div className="contact__social">
            <h3>Find us elsewhere</h3>
            <ul>
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a href={href} aria-label={label} title={label} target="_blank" rel="noreferrer">
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
