import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { TEAM_DATA } from '../constants';
import { TargetIcon, UsersIcon, CheckCircleIcon } from '../components/icons';

const About: React.FC = () => {
  return (
    <div className="bg-brand-light dark:bg-brand-dark">
      <Hero 
        title={<>The <span className="text-brand-gold">Story</span> of KaSha</>}
        subtitle="The passion and precision behind India's premier event experience company."
        imageUrl="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
                <img src="https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=800" alt="KaSha Event" className="rounded-sm shadow-xl w-full" />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-gold/10 rounded-sm -z-10"></div>
            </div>
            <div>
              <h2 className="text-sm uppercase tracking-widest text-brand-gray mb-2">Our Vision</h2>
              <h3 className="text-4xl font-serif text-brand-dark dark:text-brand-light mb-4">Crafting Emotions into <span className="text-brand-gold">Experiences</span></h3>
              <p className="text-lg text-brand-gray mb-6">
                KaSha was born from a desire to create truly exceptional events that leave a lasting impact. We believe every event is a unique story waiting to be told, and our mission is to tell it with creativity, elegance, and flawless execution.
              </p>
              <p className="text-brand-gray">
                Based in Delhi, our reach extends across India, bringing world-class event management to every corner of the country. We are more than planners; we are your partners in celebration, dedicated to perfection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-light-secondary dark:bg-brand-dark-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif text-brand-dark dark:text-brand-light mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8">
              <TargetIcon className="w-12 h-12 text-brand-gold mx-auto mb-4"/>
              <h3 className="text-2xl font-serif text-brand-dark dark:text-brand-light mb-3">Mission</h3>
              <p className="text-brand-gray">To be India's most trusted and creative event management partner, consistently delivering outstanding experiences that exceed expectations.</p>
            </div>
            <div className="p-8 md:border-x border-gray-200 dark:border-brand-dark">
              <UsersIcon className="w-12 h-12 text-brand-gold mx-auto mb-4"/>
              <h3 className="text-2xl font-serif text-brand-dark dark:text-brand-light mb-3">Vision</h3>
              <p className="text-brand-gray">To set new benchmarks in the event industry, becoming synonymous with luxury, reliability, and unforgettable moments.</p>
            </div>
             <div className="p-8">
              <CheckCircleIcon className="w-12 h-12 text-brand-gold mx-auto mb-4"/>
              <h3 className="text-2xl font-serif text-brand-dark dark:text-brand-light mb-3">Strength</h3>
              <p className="text-brand-gray">Our end-to-end service model, pan-India presence, and unwavering commitment to creative excellence ensure a seamless and inspiring journey for our clients.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-light dark:bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-serif text-brand-dark dark:text-brand-light">Meet Our <span className="text-brand-gold">Leaders</span></h2>
                <p className="text-brand-gray mt-2 max-w-2xl mx-auto">The architects of your unforgettable events, combining experience with innovation.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {TEAM_DATA.slice(0, 3).map(member => (
                    <div key={member.id} className="bg-brand-light dark:bg-brand-dark-secondary rounded-lg shadow-lg overflow-hidden group">
                        <div className="relative h-80">
                            <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-2xl font-serif font-bold text-white">{member.name}</h3>
                                <p className="text-brand-gold font-semibold">{member.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-16">
                <Link to="/team" className="bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-sm hover:bg-yellow-500 transition-all duration-300">
                    View The Full Team
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;