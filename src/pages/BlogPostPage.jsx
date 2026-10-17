import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import './BlogPostPage.css';
export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    document.title = post
      ? `${post.title} — nucleus`
      : 'Story not found — nucleus';
    return () => {
      document.title = 'nucleus — stories worth travelling for';
    };
  }, [post]);

  if (!post) {
    return (
      <main className="article-missing section-shell" id="top">
        <p className="eyebrow">A little detour</p>
        <h1>We couldn’t find that story.</h1>
        <Link className="button button--dark" to="/#blog">Back to the journal</Link>
      </main>
    );
  }

  return (
    <main className="article-page section-shell" id="top">
      <Link className="article-page__back" to="/#blog">
        <span aria-hidden="true">←</span> Back to the journal
      </Link>
      <article>
        <header className="article-page__header">
          <p className="eyebrow">{post.category} <span>·</span> {post.readTime} min read</p>
          <h1>{post.title}</h1>
          <p className="article-page__date">{post.date}</p>
        </header>
        <img className="article-page__image" src={post.image} alt={post.imageAlt} />
        <div className="article-page__body">
          <p className="article-page__standfirst">{post.summary}</p>
          {post.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <Link className="article-page__back article-page__back--bottom" to="/#blog">
          <span aria-hidden="true">←</span> More stories from the journal
        </Link>
      </article>
    </main>
  );
}
