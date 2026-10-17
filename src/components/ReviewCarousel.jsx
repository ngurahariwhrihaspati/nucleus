import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './ReviewCarousel.css';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'CEO, Company A',
    description:
      'The design quality is outstanding. Our clients consistently comment on how polished and professional the experience feels.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Mary Smith',
    designation: 'Marketing Director, Company A',
    description:
      'The team made the entire process feel easy. Every detail was thoughtfully considered, and the final result exceeded our expectations.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Jane Johnson',
    designation: 'CEO, Company B',
    description:
      'A wonderful experience from the first conversation to the final delivery. I would happily recommend them to other businesses.',
    rating: 4,
  },
];

export default function ReviewCarousel() {
  const swiperRef = useRef(null);

  return (
    <section className="review-carousel" id="reviews" aria-labelledby="reviews-title">
      <div className="review-carousel__heading">
        <p className="review-carousel__eyebrow">Kind words</p>
        <h2 id="reviews-title">What our clients say</h2>
      </div>

      <div className="review-carousel__slider">
        <button
          className="review-carousel__arrow review-carousel__arrow--prev"
          type="button"
          aria-label="Previous testimonial"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          ‹
        </button>

        <Swiper
          className="review-carousel__swiper"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView="auto"
          centeredSlides
          spaceBetween={24}
          rewind
          grabCursor
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <article className="review-card">
                <div>
                  <p
                    className="review-card__rating"
                    aria-label={`${testimonial.rating} out of 5 stars`}
                  >
                    {'★'.repeat(testimonial.rating)}
                  </p>
                  <blockquote className="review-card__quote">
                    “{testimonial.description}”
                  </blockquote>
                </div>

                <div className="review-card__author">
                  <span className="review-card__avatar" aria-hidden="true">
                    {testimonial.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')}
                  </span>
                  <span>
                    <span className="review-card__name">{testimonial.name}</span>
                    <span className="review-card__designation">
                      {testimonial.designation}
                    </span>
                  </span>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="review-carousel__arrow review-carousel__arrow--next"
          type="button"
          aria-label="Next testimonial"
          onClick={() => swiperRef.current?.slideNext()}
        >
          ›
        </button>
      </div>
    </section>
  );
}
