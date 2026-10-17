import { useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import BlogSection from './components/BlogSection';
import BookingCalendar from './components/BookingCalendar';
import ReviewCarousel from './components/ReviewCarousel';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BlogPostPage from './pages/BlogPostPage';

function HomePage() {
  useEffect(() => {
    const targetId = window.location.hash.slice(1);
    if (targetId) {
      requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView();
      });
    }
  }, []);

  return (
    <main id="top">
      <Hero />
      <BlogSection />
      <BookingCalendar />
      <ReviewCarousel />
      <ContactSection />
    </main>
  );
}

function NotFoundPage() {
  return (
    <main className="not-found section-shell" id="top">
      <p className="eyebrow">Lost your way?</p>
      <h1>This page isn’t on the map.</h1>
      <Link className="button button--dark" to="/">Back to the beginning</Link>
    </main>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}
