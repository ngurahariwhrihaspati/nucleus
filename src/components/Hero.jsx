import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Hero.css';

import waterfall from '../assets/images/1H.jpg';
import coast from '../assets/images/6L.jpg';
import saltFlats from '../assets/images/3L.jpg';
import island from '../assets/images/4H.jpg';

const destinations = [
  {
    name: 'The quiet side of Bali',
    place: 'Bali, Indonesia',
    image: waterfall,
    description: 'Follow the sound of water into the island’s lush heart.',
  },
  {
    name: 'Where the land meets the sea',
    place: 'Cabo San Lucas, Mexico',
    image: coast,
    description: 'Find your own stretch of coastline and let the day unfold.',
  },
  {
    name: 'Chasing the last light',
    place: 'Salar de Uyuni, Bolivia',
    image: saltFlats,
    description: 'A wide-open landscape made for taking the slower road.',
  },
  {
    name: 'A little more blue',
    place: 'Santorini, Greece',
    image: island,
    description: 'Whitewashed villages, quiet evenings, and the Aegean beyond.',
  },
];

export default function Hero() {
  return (
    <section className="hero" id="destinations" aria-label="Featured destinations">
      <Swiper
        className="hero__swiper"
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
      >
        {destinations.map((destination, index) => (
          <SwiperSlide key={destination.name}>
            <article className="hero-slide">
              <img
                className="hero-slide__image"
                src={destination.image}
                alt=""
                fetchPriority={index === 0 ? 'high' : 'auto'}
              />
              <div className="hero-slide__shade" />
              <div className="hero-slide__content">
                <p className="hero-slide__location">
                  <span aria-hidden="true">⌖</span> {destination.place}
                </p>
                <h1>{destination.name}</h1>
                <p className="hero-slide__description">{destination.description}</p>
                <a className="button button--light" href="/#blog">
                  Find your next story <span aria-hidden="true">↗</span>
                </a>
              </div>
              <span className="hero-slide__index">
                0{index + 1} <span aria-hidden="true">/</span> 0{destinations.length}
              </span>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
