import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../constants';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? TESTIMONIALS_DATA.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === TESTIMONIALS_DATA.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const currentTestimonial = TESTIMONIALS_DATA[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto text-center py-16 px-4">
      <div className="mb-8">
        <p className="text-2xl md:text-3xl font-light italic text-brand-dark-secondary dark:text-brand-light/80">
          "{currentTestimonial.quote}"
        </p>
      </div>
      <div>
        <h4 className="text-xl font-bold text-brand-dark dark:text-brand-light tracking-wider">
          {currentTestimonial.author}
        </h4>
        <p className="text-brand-gold">{currentTestimonial.event}</p>
      </div>
      <button onClick={prevSlide} className="absolute top-1/2 left-0 -translate-y-1/2 p-2 rounded-full bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 transition-colors">
        <ChevronLeftIcon className="w-6 h-6 text-brand-dark dark:text-brand-light"/>
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-0 -translate-y-1/2 p-2 rounded-full bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 transition-colors">
        <ChevronRightIcon className="w-6 h-6 text-brand-dark dark:text-brand-light"/>
      </button>
    </div>
  );
};

export default TestimonialSlider;