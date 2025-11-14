import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../constants';
import Hero from '../components/Hero';

const Services: React.FC = () => {

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
        title={<>Our <span className="text-brand-gold">Services</span></>}
        subtitle="Comprehensive solutions for every type of event."
        imageUrl="https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      <section className="py-20 bg-brand-light dark:bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif text-brand-dark dark:text-brand-light">A World of Possibilities</h2>
            <p className="text-brand-gray mt-4">At KaSha, we offer a diverse portfolio of event management services, each tailored to the unique needs of our clients. Explore our expertise below.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map(service => (
              <Link to={`/services/${service.id}`} key={service.id} className="group block bg-white dark:bg-brand-dark-secondary rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-64">
                  <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif text-brand-dark dark:text-brand-light group-hover:text-brand-gold transition-colors mb-2">{service.title}</h3>
                  <p className="text-brand-gray mb-4">{service.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;