import React from 'react';
import Hero from '../components/Hero';

const weddingServices = [
  "Venue Selection", "Hotel & Destination Management", "Theme Design & Decor",
  "Caterers & Cuisine", "Designer Coordination", "Photographers & Videographers",
  "Pagdiwala & Mehndiwala", "Transportation & Logistics", "Full Wedding Management"
];

const Weddings: React.FC = () => {
  return (
    <div className="dark:bg-brand-dark">
      <Hero 
        title={<>Bespoke <span className="text-brand-gold">Weddings</span></>}
        subtitle="Crafting the beginning of your forever."
        imageUrl="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-20 bg-brand-light-secondary dark:bg-brand-dark-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-brand-dark dark:text-brand-light mb-4">Your Dream Wedding, Realized</h2>
            <p className="text-lg text-brand-gray">
              At KaSha, we understand that your wedding is more than just an event—it's a cherished milestone. Our dedicated wedding planners work tirelessly to ensure every detail reflects your personal style and love story, creating an experience that is both magical and seamlessly orchestrated.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-brand-light dark:bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif text-brand-dark dark:text-brand-light text-center mb-12">Our Comprehensive Wedding Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {weddingServices.map(service => (
                    <div key={service} className="text-center p-6 bg-white dark:bg-brand-dark-secondary rounded-sm shadow-md hover:shadow-lg transition-shadow hover:-translate-y-1 transform">
                        <p className="text-lg font-medium text-brand-dark dark:text-brand-light">{service}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
      
      <section className="py-20 bg-brand-light-secondary dark:bg-brand-dark-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center">
            <div className="w-full md:w-1/2 p-4">
                <img src="https://images.pexels.com/photos/3280907/pexels-photo-3280907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Wedding Management" className="rounded-sm shadow-lg"/>
            </div>
            <div className="w-full md:w-1/2 p-4 md:pl-12">
                <h3 className="text-3xl font-serif text-brand-dark dark:text-brand-light mb-4">The KaSha <span className="text-brand-gold">Wedding Flow</span></h3>
                <p className="text-brand-gray">
                    Our process is designed for your peace of mind. We begin with a deep dive into your vision, followed by meticulous planning of every element. Our expert vendor network and production capabilities bring the designs to life, culminating in a flawlessly executed celebration where you can simply be present and enjoy every moment.
                </p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Weddings;