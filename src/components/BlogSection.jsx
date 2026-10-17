import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import './BlogSection.css';

const featuredPost = blogPosts[0];
const latestPost = blogPosts[1];
const topStories = blogPosts.slice(2);
const travelTags = ['Slow travel', 'Island escapes', 'Local food', 'Hidden trails'];

function StoryLink({ post, children = 'Read the story' }) {
  return (
    <Link className="story-link" to={`/blog/${post.slug}`}>
      {children}<span aria-hidden="true">↗</span>
    </Link>
  );
}

export default function BlogSection() {
  return (
    <section className="stories section-shell" id="blog" aria-labelledby="stories-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Notes from the road</p>
          <h2 id="stories-title">Stories worth<br className="desktop-break" /> travelling for.</h2>
        </div>
        <p className="section-heading__intro">
          Thoughtful guides, local favourites, and little details that make a journey yours.
        </p>
      </div>

      <div className="stories__grid">
        <article className="featured-story">
          <Link className="story-image-link" to={`/blog/${featuredPost.slug}`} aria-label={`Read ${featuredPost.title}`}>
            <img src={featuredPost.image} alt={featuredPost.imageAlt} loading="lazy" />
            <span className="image-tag">Editor's pick</span>
          </Link>
          <div className="featured-story__copy">
            <p className="story-meta">{featuredPost.category} <span>·</span> {featuredPost.readTime} min read</p>
            <h3><Link to={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link></h3>
            <p>{featuredPost.summary}</p>
            <StoryLink post={featuredPost} />
          </div>
        </article>

        <aside className="latest-story" aria-labelledby="latest-title">
          <div className="latest-story__heading">
            <div>
              <p className="eyebrow">Fresh from the journal</p>
              <h3 id="latest-title">Latest post</h3>
            </div>
            <span aria-hidden="true">02</span>
          </div>
          <Link className="latest-story__image" to={`/blog/${latestPost.slug}`} aria-label={`Read ${latestPost.title}`}>
            <img src={latestPost.image} alt={latestPost.imageAlt} loading="lazy" />
          </Link>
          <p className="story-meta">
            {latestPost.date} <span>·</span> {latestPost.readTime} min read
          </p>
          <h4><Link to={`/blog/${latestPost.slug}`}>{latestPost.title}</Link></h4>
          <p className="latest-story__summary">{latestPost.summary}</p>
          <StoryLink post={latestPost}>Read latest post</StoryLink>
        </aside>

        <aside className="top-stories" aria-labelledby="top-stories-title">
          <div className="top-stories__heading">
            <p className="eyebrow">Reader favourites</p>
            <h3 id="top-stories-title">Top stories</h3>
          </div>
          <ol>
            {topStories.map((post, index) => (
              <li key={post.slug}>
                <span className="top-stories__number">0{index + 1}</span>
                <div>
                  <p className="story-meta">{post.category} <span>·</span> {post.readTime} min</p>
                  <h4><Link to={`/blog/${post.slug}`}>{post.title}</Link></h4>
                  <p>{post.summary}</p>
                  <StoryLink post={post}>Read more</StoryLink>
                </div>
              </li>
            ))}
          </ol>
        </aside>
      </div>

      <div className="story-tags" aria-label="Explore stories by topic">
        <span className="story-tags__label">Explore by mood</span>
        {travelTags.map((tag) => (
          <a href={`/#blog`} key={tag}>#{tag.toLowerCase().replaceAll(' ', '')}</a>
        ))}
      </div>
    </section>
  );
}
