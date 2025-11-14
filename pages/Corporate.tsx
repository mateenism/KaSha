import React from 'react';
import Hero from '../components/Hero';

const corporateServices = [
  "Brand Theme Creation", "Stage Design & Fabrication", "Sound & Lighting",
  "Technical Production", "MC / Anchors", "Promoters & Staffing",
  "Printing & Collateral", "Corporate Gifting", "Flawless Event Execution"
];

const Corporate: React.FC = () => {
  return (
    <div className="dark:bg-brand-dark">
      <Hero 
        title={<>Corporate <span className="text-brand-gold">Events</span></>}
        subtitle="Engineering impactful brand experiences."
        imageUrl="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-20 bg-brand-light-secondary dark:bg-brand-dark-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-brand-dark dark:text-brand-light mb-4">Precision, Professionalism, Perfection</h2>
            <p className="text-lg text-brand-gray">
              KaSha delivers corporate events that are not just well-managed, but are powerful tools for communication, motivation, and brand building. From intimate board meetings to large-scale international conferences, we provide strategic planning and execution to achieve your business objectives.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-brand-light dark:bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif text-brand-dark dark:text-brand-light text-center mb-12">Our Corporate Event Capabilities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {corporateServices.map(service => (
                    <div key={service} className="text-center p-6 bg-white dark:bg-brand-dark-secondary rounded-sm shadow-md hover:shadow-lg transition-shadow hover:-translate-y-1 transform">
                        <p className="text-lg font-medium text-brand-dark dark:text-brand-light">{service}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
      
      <section className="py-20 bg-brand-light-secondary dark:bg-brand-dark-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center">
             <div className="w-full md:w-1/2 p-4 md:pr-12 order-2 md:order-1">
                <h3 className="text-3xl font-serif text-brand-dark dark:text-brand-light mb-4">Executing Your Corporate <span className="text-brand-gold">Vision</span></h3>
                <p className="text-brand-gray">
                    We partner with you to understand your brand's message and goals. Our team then crafts a comprehensive event strategy, covering everything from creative concept and stage production to logistics and on-site management, ensuring a professional and memorable experience for all stakeholders.
                </p>
            </div>
            <div className="w-full md:w-1/2 p-4 order-1 md:order-2">
                <img src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Corporate Execution" className="rounded-sm shadow-lg"/>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Corporate;