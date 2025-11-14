import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES_DATA, PROCESS_STEPS } from '../constants';
import Hero from '../components/Hero';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES_DATA.find(s => s.id === id);

  if (!service) {
    return (
      <div className="text-center py-20 dark:bg-brand-dark">
        <h1 className="text-4xl font-serif text-brand-dark dark:text-brand-light">Service not found</h1>
        <Link to="/services" className="text-brand-gold mt-4 inline-block">Back to Services</Link>
      </div>
    );
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="dark:bg-brand-dark">
      <Hero 
        title={service.title}
        subtitle={service.shortDescription}
        imageUrl={service.imageUrl}
      />

      <section className="py-20 bg-brand-light-secondary dark:bg-brand-dark-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-serif text-brand-dark dark:text-brand-light mb-6">About {service.title}</h2>
          <p className="text-brand-gray text-lg leading-relaxed">{service.description}</p>
        </div>
      </section>

      <section className="py-20 bg-brand-light dark:bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="bg-brand-light-secondary dark:bg-brand-dark-secondary p-8 rounded-lg border-l-4 border-brand-gold text-center">
                <h3 className="text-sm uppercase tracking-widest text-brand-gray mb-2">Starting From</h3>
                <div className="flex items-baseline justify-center gap-4 mb-6">
                    <span className="text-5xl font-bold text-brand-dark dark:text-brand-light">
                        {formatCurrency(service.discountedPrice)}
                    </span>
                    <span className="text-2xl text-brand-gray line-through">
                        {formatCurrency(service.originalPrice)}
                    </span>
                </div>
                <p className="text-brand-gray mb-6">Get a personalized quote for your specific needs.</p>
                <Link to="/cost-calculator" className="bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-sm hover:bg-yellow-500 transition-all duration-300">
                    Calculate Your Cost
                </Link>
            </div>
        </div>
      </section>

      <section className="py-20 bg-brand-light-secondary dark:bg-brand-dark-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-brand-dark dark:text-brand-light text-center mb-12">Our 4-Step Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.title} className="p-6">
                <div className="text-5xl text-brand-gold mb-4 font-serif">0{index+1}</div>
                <h3 className="text-2xl font-serif text-brand-dark dark:text-brand-light mb-2">{step.title}</h3>
                <p className="text-brand-gray">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-light dark:bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-brand-dark dark:text-brand-light text-center mb-12">Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.showcaseImages.map((img, index) => (
              <div key={index} className="overflow-hidden rounded-sm">
                <img src={img} alt={`${service.title} showcase ${index + 1}`} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;