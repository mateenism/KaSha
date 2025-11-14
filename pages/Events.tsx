import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Hero from '../components/Hero';

const Events: React.FC = () => {
  const { city } = useParams<{ city: string }>();

  // Capitalize city name for display
  const cityName = city 
    ? city.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
    : 'Unknown City';

  return (
    <div className="dark:bg-brand-dark">
      <Hero 
        title={<>Events in <span className="text-brand-gold">{cityName}</span></>}
        subtitle={`Discover the best events happening in ${cityName}.`}
        imageUrl="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-20 text-center bg-brand-light dark:bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-brand-dark dark:text-brand-light mb-4">Coming Soon!</h2>
          <p className="text-lg text-brand-gray mb-8 max-w-2xl mx-auto">
            We are currently curating the best events for {cityName}. Please check back later for a full list of unforgettable experiences!
          </p>
          <Link to="/" className="bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-sm hover:bg-yellow-500 transition-all duration-300">
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Events;
