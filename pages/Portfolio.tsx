import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { PortfolioItem } from '../types';
import Hero from '../components/Hero';

type Category = 'All' | 'Weddings' | 'Corporate' | 'Concerts' | 'Sports' | 'Activations';

const categories: Category[] = ['All', 'Weddings', 'Corporate', 'Concerts', 'Sports', 'Activations'];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<Category>('All');

  const filteredItems: PortfolioItem[] = filter === 'All' 
    ? PORTFOLIO_DATA 
    : PORTFOLIO_DATA.filter(item => item.category === filter);

  return (
    <div className="dark:bg-brand-dark">
      <Hero 
        title={<>Our <span className="text-brand-gold">Portfolio</span></>}
        subtitle="A showcase of our finest work and unforgettable moments."
        imageUrl="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      <section className="py-20 bg-brand-light dark:bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {categories.map(category => (
              <button 
                key={category} 
                onClick={() => setFilter(category)}
                className={`px-6 py-2 text-sm font-semibold rounded-sm transition-colors ${filter === category ? 'bg-brand-gold text-brand-dark' : 'bg-brand-light-secondary dark:bg-brand-dark-secondary text-brand-dark dark:text-brand-light hover:bg-gray-300 dark:hover:bg-brand-dark'}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
            {filteredItems.map(item => (
              <div key={item.id} className="mb-4 break-inside-avoid">
                <div className="relative group overflow-hidden rounded-sm">
                    <img 
                        src={item.imageUrl}
                        alt={item.title} 
                        className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-end p-4">
                        <h3 className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">{item.title}</h3>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;