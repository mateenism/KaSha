import React from 'react';
import Hero from '../components/Hero';
import { TEAM_DATA } from '../constants';

const Team: React.FC = () => {
  return (
    <div className="dark:bg-brand-dark">
      <Hero 
        title={<>Meet Our <span className="text-brand-gold">Team</span></>}
        subtitle="The passionate minds and expert hands behind every successful KaSha event."
        imageUrl="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      <section className="py-20 bg-brand-light dark:bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif text-brand-dark dark:text-brand-light">The Architects of Your Experience</h2>
            <p className="text-lg text-brand-gray mt-4">
                Our strength lies in our people. A blend of creative visionaries, meticulous planners, and production experts, the KaSha team is united by a passion for excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
            {TEAM_DATA.map(member => (
              <div key={member.id} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <img src={member.imageUrl} alt={member.name} className="w-full h-full rounded-full object-cover shadow-lg" />
                   <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-brand-gold transition-all duration-300 transform scale-100 group-hover:scale-110"></div>
                </div>
                <h3 className="text-2xl font-serif text-brand-dark dark:text-brand-light">{member.name}</h3>
                <p className="text-brand-gold font-semibold mb-2">{member.role}</p>
                <p className="text-brand-gray max-w-xs mx-auto">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;