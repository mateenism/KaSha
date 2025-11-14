import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';
import { FacebookIcon, InstagramIcon, LinkedinIcon, YouTubeIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-brand-light/70 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-serif font-bold text-brand-light mb-4">KaSha</h3>
            <p className="text-sm mb-6 max-w-xs">{COMPANY_INFO.tagline}</p>
             <div className="flex space-x-4 mt-4">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-brand-light/50 hover:text-brand-gold transition-colors"><FacebookIcon/></a>
                <a href="https://www.instagram.com/kasha.events?igsh=MXNkanV5eDZqaXowdA==" target="_blank" rel="noopener noreferrer" className="text-brand-light/50 hover:text-brand-gold transition-colors"><InstagramIcon/></a>
                <a href="https://www.linkedin.com/company/kasha-events/" target="_blank" rel="noopener noreferrer" className="text-brand-light/50 hover:text-brand-gold transition-colors"><LinkedinIcon/></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-brand-light/50 hover:text-brand-gold transition-colors"><YouTubeIcon/></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-brand-light tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-brand-gold transition-colors">Our Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-brand-gold transition-colors">Portfolio</Link></li>
              <li><Link to="/team" className="hover:text-brand-gold transition-colors">Our Team</Link></li>
              <li><Link to="/career" className="hover:text-brand-gold transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-brand-light tracking-wider mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/weddings" className="hover:text-brand-gold transition-colors">Weddings</Link></li>
              <li><Link to="/corporate-events" className="hover:text-brand-gold transition-colors">Corporate Events</Link></li>
              <li><Link to="/services/concerts-live-shows" className="hover:text-brand-gold transition-colors">Concerts & Shows</Link></li>
              <li><Link to="/services/sports-events" className="hover:text-brand-gold transition-colors">Sports Events</Link></li>
              <li><Link to="/services/destination-weddings" className="hover:text-brand-gold transition-colors">Destination Weddings</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-brand-light tracking-wider mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li>{COMPANY_INFO.location}</li>
              <li><a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-brand-gold transition-colors">{COMPANY_INFO.email}</a></li>
              {COMPANY_INFO.phone.split(',').map((phone, index) => (
                <li key={index}>
                    <a href={`tel:${phone.trim().replace(/\s/g, '')}`} className="hover:text-brand-gold transition-colors">{phone.trim()}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>
        <div className="mt-12 pt-8 border-t border-brand-light/10 text-center text-sm text-brand-light/50">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved. Designed with passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;